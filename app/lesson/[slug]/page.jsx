'use client';

export const dynamic = 'force-dynamic';


import { useEffect, useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Quiz from '@/components/Quiz';
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
  useEffect(()=>{
    if (typeof window==='undefined') return;
    const data = localStorage.getItem('anoma_academy_done_'+lang);
    setDone(data ? JSON.parse(data) : {});
  }, [lang]);

  function finish(){
    const key = 'anoma_academy_done_'+lang;
    const next = { ...done, [lesson.slug]: true };
    setDone(next);
    if (typeof window!=='undefined') localStorage.setItem(key, JSON.stringify(next));
  }

  if (!lesson) return null;

  const homeLabel = lang === 'tr' ? 'Ana sayfa' : 'Home';

  return (
    <main>
      <section className="container py-6 grid md:grid-cols-[260px_1fr] gap-6">
        <Sidebar items={sidebarItems} lang={lang} active={lesson.slug} />

        <article className="space-y-6">
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

          {lesson.quiz && <Quiz items={lesson.quiz} onFinish={finish} t={t} />}

          {/* Alt kontrol butonları */}
          <div className="flex items-center justify-between">
            {/* Sol: Ana sayfa */}
            <Link href="/" className="btn btn-ghost">← {homeLabel}</Link>

            {/* Sağ: Back / Next / Finish */}
            <div className="flex items-center gap-2">
              {idx>0 && (
                <Link className="btn btn-ghost" href={`/lesson/${lessons[idx-1].slug}`}>{t.back}</Link>
              )}
              {idx<lessons.length-1 ? (
                <Link className="btn btn-primary" href={`/lesson/${lessons[idx+1].slug}`}>{t.next}</Link>
              ) : (
                <Link className="btn btn-primary" href="/">{t.finish}</Link>
              )}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}