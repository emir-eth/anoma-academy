'use client';

export const dynamic = 'force-dynamic';


import { useEffect, useMemo, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Quiz from '@/components/Quiz';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import SuccessAnimation from '@/components/SuccessAnimation';
import ProgressBar from '@/components/ProgressBar';
import Confetti from '@/components/Confetti';
import { dict } from '@/app/i18n/dict';
import { useLanguage } from '@/app/providers/LanguageProvider';
import { content } from '@/app/i18n/content';
import Link from 'next/link';

export default function LessonPage(){
  const params = useParams();
  const router = useRouter();
  const { lang } = useLanguage();
  const t = dict[lang];
  const lessons = content[lang];
  const idx = lessons.findIndex(l=>l.slug === params.slug);
  const lesson = lessons[idx];

  useEffect(()=>{
    if (!lesson) router.replace('/');
  }, [lesson, router]);

  const sidebarItems = useMemo(()=> lessons.map((l)=>({ slug: l.slug, title: l.title })), [lessons]);
  const [done, setDone] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [quizData, setQuizData] = useState({});
  
  useEffect(()=>{
    if (typeof window==='undefined') return;
    
    const loadData = () => {
      const data = localStorage.getItem('anoma_academy_done_'+lang);
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
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [lang, lessons]);

  function finish(){
    const key = 'anoma_academy_done_'+lang;
    const next = { ...done, [lesson.slug]: true };
    setDone(next);
    if (typeof window!=='undefined') localStorage.setItem(key, JSON.stringify(next));
    setShowConfetti(true);
  }

  // Quiz tamamlandığında progress'i güncelle
  const handleQuizComplete = useCallback(() => {
    const loadData = () => {
      const data = localStorage.getItem('anoma_academy_done_'+lang);
      setDone(data ? JSON.parse(data) : {});
      
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
  }, [lang, lessons]);

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

  if (!lesson) return null;

  const homeLabel = lang === 'tr' ? 'Ana sayfa' : 'Home';

  // Loading state
  if (isLoading) {
    return (
      <main>
        <section className="container py-6 grid md:grid-cols-[260px_1fr] gap-6">
          <div className="hidden md:block">
            <LoadingSkeleton type="card" count={5} />
          </div>
          <div>
            <LoadingSkeleton type="lesson" count={2} />
            {/* Loading sırasında da butonları göster */}
            <div className="space-y-3 mt-6">
              <div className="flex items-center justify-between">
                <Link href="/" className="btn btn-ghost">← {homeLabel}</Link>
                <div className="flex items-center gap-2">
                  {idx>0 && (
                    <Link className="btn btn-ghost" href={`/lesson/${lessons[idx-1].slug}`}>{t.back}</Link>
                  )}
                  {idx < lessons.length-1 && (
                    <Link className="btn btn-primary" href={`/lesson/${lessons[idx+1].slug}`}>{t.next}</Link>
                  )}
                  {idx === lessons.length-1 && (
                    <Link className="btn btn-primary" href="/">{t.finish}</Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="container py-6 grid md:grid-cols-[260px_1fr] gap-6">
        <Sidebar items={sidebarItems} lang={lang} active={lesson.slug} />

        <article className="space-y-6">
          {/* Progress Bar */}
          <div className="card p-4">
            <ProgressBar 
              current={completedCount} 
              total={lessons.length}
              size="sm"
              lang={lang}
            />
          </div>
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">{lesson.title}</h1>
              {done[lesson.slug] && <span className="badge border border-green-500/30 bg-green-500/10 text-green-300">{t.completed}</span>}
            </div>
            {lesson.sections.map((s, i)=>(
              <div key={i} className="prose mt-4">
                <h3 className="text-lg font-semibold">{s.h}</h3>
                <p className="mt-1">{s.p}</p>
              </div>
            ))}
          </div>

          {lesson.quiz && (
            <Quiz 
              items={lesson.quiz} 
              onFinish={finish} 
              t={t} 
              lessonSlug={lesson.slug} 
              lang={lang}
              onQuizComplete={handleQuizComplete}
            />
          )}

          {/* Alt kontrol butonları */}
          <div className="space-y-3">
            {/* Üst satır: Home (sol) - Back/Next/Finish (sağ) */}
            <div className="flex items-center justify-between">
              {/* Sol: Home */}
              <Link href="/" className="btn btn-ghost">← {homeLabel}</Link>

              {/* Sağ: Back / Next / Finish */}
              <div className="flex items-center gap-2">
                {idx > 0 && (
                  <Link className="btn btn-ghost" href={`/lesson/${lessons[idx-1].slug}`}>{t.back}</Link>
                )}
                {idx < lessons.length - 1 && (
                  <Link className="btn btn-primary" href={`/lesson/${lessons[idx+1].slug}`}>{t.next}</Link>
                )}
                {idx === lessons.length - 1 && (
                  <Link className="btn btn-primary" href="/">{t.finish}</Link>
                )}
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Success Animation */}
      <SuccessAnimation 
        isVisible={showSuccess} 
        onComplete={() => setShowSuccess(false)} 
      />

      {/* Konfeti Animation */}
      <Confetti 
        isVisible={showConfetti} 
        onComplete={() => setShowConfetti(false)} 
      />
    </main>
  );
}