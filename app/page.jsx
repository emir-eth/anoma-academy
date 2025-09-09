'use client';

export const dynamic = 'force-dynamic';


import { useMemo, useEffect, useState } from 'react';
import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import ConfirmModal from '@/components/ConfirmModal';
import ProgressBar from '@/components/ProgressBar';
import { dict } from '@/app/i18n/dict';
import { content } from '@/app/i18n/content';
import { useLanguage } from '@/app/providers/LanguageProvider';

export default function HomePage() {
  // Dili global context’ten al
  const { lang } = useLanguage();
  const t = dict[lang];

  const lessons = useMemo(() => content[lang], [lang]);

  // Ders tamamlama durumları (dil bazlı yerel kayıt)
  const [done, setDone] = useState({});
  const [showResetModal, setShowResetModal] = useState(false);
  const [quizData, setQuizData] = useState({});
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const loadData = () => {
      const data = localStorage.getItem('anoma_academy_done_' + lang);
      setDone(data ? JSON.parse(data) : {});
      
      // Quiz verilerini de yükle
      const quizStates = {};
      if (lessons) {
        lessons.forEach(lesson => {
          if (lesson.quiz) {
            const quizKey = `anoma_academy_quiz_${lesson.slug}_${lang}`;
            const quizData = localStorage.getItem(quizKey);
            if (quizData) {
              quizStates[lesson.slug] = JSON.parse(quizData);
            }
          }
        });
      }
      setQuizData(quizStates);
    };
    
    loadData();
    
    // Storage değişikliklerini dinle (reset progress için)
    const handleStorageChange = (e) => {
      if (e.key === `anoma_academy_done_${lang}` || e.key?.startsWith('anoma_academy_quiz_')) {
        loadData();
      }
    };
    
    // Custom event dinle (quiz tamamlandığında)
    const handleQuizComplete = () => {
      loadData();
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('quizComplete', handleQuizComplete);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('quizComplete', handleQuizComplete);
    };
  }, [lang, lessons]);

  // En az bir ders tamamlandı mı?
  const hasProgress = useMemo(
    () => Object.values(done || {}).some(Boolean),
    [done]
  );

  // İlerleme hesaplama - quiz progress'ini de hesaba kat
  const completedCount = useMemo(() => {
    if (!lessons) return 0;
    
    return lessons.reduce((count, lesson) => {
      // Ders tamamlandı mı?
      if (done[lesson.slug]) {
        return count + 1;
      }
      
      // Quiz varsa ve tüm sorular cevaplandı mı?
      if (lesson.quiz && quizData[lesson.slug]) {
        const savedAnswers = quizData[lesson.slug];
        const completedQuestions = Object.keys(savedAnswers).length;
        if (completedQuestions === lesson.quiz.length) {
          return count + 1;
        }
      }
      
      return count;
    }, 0);
  }, [done, lessons, quizData]);

  const totalLessons = lessons?.length || 0;

  // İlerlemeyi sıfırla (sadece mevcut dil için)
  function handleResetClick() {
    setShowResetModal(true);
  }

  function confirmReset() {
    // LocalStorage'dan tüm verileri temizle
    localStorage.removeItem('anoma_academy_done_' + lang);
    
    // Quiz verilerini de temizle
    if (lessons && typeof window !== 'undefined') {
      lessons.forEach(lesson => {
        if (lesson.quiz) {
          const quizKey = `anoma_academy_quiz_${lesson.slug}_${lang}`;
          localStorage.removeItem(quizKey);
        }
      });
    }
    
    // State'leri sıfırla
    setDone({});
    setQuizData({});
    
    setShowResetModal(false);
  }

  function cancelReset() {
    setShowResetModal(false);
  }

  function scrollToCurriculum() {
    const el = document.getElementById('curriculum');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main>
      {/* HERO — boşluğu azaltılmış */}
      <section className="container py-6 hero">
        <div className="card p-8 card-hover text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            {t.site}
          </h1>
          <p className="mt-4 text-zinc-300">{t.tagline}</p>

          {/* Progress Bar */}
          {totalLessons > 0 && (
            <div className="mt-6 max-w-md mx-auto">
              <ProgressBar 
                current={completedCount} 
                total={totalLessons}
                size="md"
                lang={lang}
              />
            </div>
          )}

          {/* Buton grubu: Get Started + Lessons + (varsa) Reset */}
          <div className="mt-6 flex gap-3 justify-center flex-wrap">
            {lessons?.length > 0 && (
              <Link
                href={`/lesson/${lessons[0].slug}`}
                className="btn btn-primary"
              >
                {t.getStarted}
              </Link>
            )}

            <button onClick={scrollToCurriculum} className="btn btn-ghost">
              {t.lessons}
            </button>

            {hasProgress && (
              <button onClick={handleResetClick} className="btn btn-ghost">
                {lang === 'tr' ? 'İlerlemeni sıfırla' : 'Reset progress'}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="container py-6">
        <div
          id="curriculum"
          className="mt-2 grid md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-mt-28"
        >
          {lessons.map((l) => {
            // Ders tamamlandı mı?
            const isLessonDone = !!done[l.slug];
            
            // Quiz tamamlandı mı?
            let isQuizDone = false;
            if (l.quiz && quizData[l.slug]) {
              const savedAnswers = quizData[l.slug];
              const completedQuestions = Object.keys(savedAnswers).length;
              isQuizDone = completedQuestions === l.quiz.length;
            }
            
            // Ders veya quiz tamamlandıysa done = true
            const isDone = isLessonDone || isQuizDone;
            
            return (
              <LessonCard
                key={l.slug}
                href={`/lesson/${l.slug}`}
                title={l.title}
                desc={l.desc}
                duration={l.duration}
                done={isDone}
              />
            );
          })}
        </div>
      </section>

      {/* Reset Progress Modal */}
      <ConfirmModal
        isOpen={showResetModal}
        onClose={cancelReset}
        onConfirm={confirmReset}
        title={lang === 'tr' ? 'İlerlemeyi Sıfırla' : 'Reset Progress'}
        message={lang === 'tr' 
          ? 'Tüm ders ilerlemenizi sıfırlamak istediğinizden emin misiniz? Bu işlem geri alınamaz.'
          : 'Are you sure you want to reset all your lesson progress? This action cannot be undone.'
        }
        confirmText={lang === 'tr' ? 'Evet, Sıfırla' : 'Yes, Reset'}
        cancelText={lang === 'tr' ? 'İptal' : 'Cancel'}
      />
    </main>
  );
}