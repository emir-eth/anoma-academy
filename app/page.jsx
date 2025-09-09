'use client';

export const dynamic = 'force-dynamic';


import { useMemo, useEffect, useState } from 'react';
import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
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
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const data = localStorage.getItem('anoma_academy_done_' + lang);
    setDone(data ? JSON.parse(data) : {});
  }, [lang]);

  // En az bir ders tamamlandı mı?
  const hasProgress = useMemo(
    () => Object.values(done || {}).some(Boolean),
    [done]
  );

  // İlerlemeyi sıfırla (sadece mevcut dil için)
  function resetProgress() {
    if (
      confirm(
        lang === 'tr'
          ? 'İlerlemeni sıfırlamak istiyor musun?'
          : 'Reset your progress?'
      )
    ) {
      localStorage.removeItem('anoma_academy_done_' + lang);
      setDone({});
    }
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
              <button onClick={resetProgress} className="btn btn-ghost">
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
          {lessons.map((l) => (
            <LessonCard
              key={l.slug}
              href={`/lesson/${l.slug}`}
              title={l.title}
              desc={l.desc}
              // duration prop'unu görmezden gelebilirsin; kartta gösterilmiyorsa sorun yok
              duration={l.duration}
              done={!!done[l.slug]}
            />
          ))}
        </div>
      </section>
    </main>
  );
}