'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Quiz({ items, onFinish, t, lessonSlug, lang, onQuizComplete }){
  const [i, setI] = useState(0);
  const [sel, setSel] = useState(null);
  const [status, setStatus] = useState('idle');
  const [savedAnswers, setSavedAnswers] = useState({});
  const router = useRouter();
  const cur = items[i];

  // Kaydedilmiş cevapları yükle
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const key = `anoma_academy_quiz_${lessonSlug}_${lang}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      setSavedAnswers(JSON.parse(saved));
    }
  }, [lessonSlug, lang]);

  // Mevcut sorunun cevabını yükle
  useEffect(() => {
    if (savedAnswers[i] !== undefined) {
      setSel(savedAnswers[i].answer);
      setStatus(savedAnswers[i].status);
    }
  }, [i, savedAnswers]);

  function check(){
    if (sel===null) { return; }
    const isCorrect = sel === cur.answer;
    const newStatus = isCorrect ? 'ok' : 'bad';
    setStatus(newStatus);
    
    // Cevabı kaydet
    const newSavedAnswers = {
      ...savedAnswers,
      [i]: { answer: sel, status: newStatus }
    };
    setSavedAnswers(newSavedAnswers);
    
    if (typeof window !== 'undefined') {
      const key = `anoma_academy_quiz_${lessonSlug}_${lang}`;
      localStorage.setItem(key, JSON.stringify(newSavedAnswers));
    }
  }
  
  function next(){
    if (i === items.length - 1) {
      onFinish();
      router.push('/');
    }
    else { 
      setI(i+1); 
      // Yeni soru için state'i sıfırla (kaydedilmiş cevap varsa useEffect'te yüklenecek)
      if (savedAnswers[i+1] === undefined) {
        setSel(null); 
        setStatus('idle');
      }
    }
  }

  // Tamamlanan soru sayısını hesapla
  const completedQuestions = Object.keys(savedAnswers).length;
  const progressPercentage = items.length > 0 ? Math.round((completedQuestions / items.length) * 100) : 0;
  
  // Quiz tamamlandığında onQuizComplete'i çağır
  useEffect(() => {
    if (completedQuestions === items.length && items.length > 0) {
      if (onQuizComplete) {
        onQuizComplete();
      }
      // Ana sayfayı da güncellemek için custom event tetikle (debounced)
      if (typeof window !== 'undefined') {
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('quizComplete'));
        }, 50);
      }
    }
  }, [completedQuestions, items.length]); // onQuizComplete'i dependency'den çıkardık

  return (
    <div className="card p-5 space-y-3">
      <div className="text-sm text-zinc-400 flex items-center justify-between">
        <span>Quiz {i+1}/{items.length}</span>
        <span>{progressPercentage}%</span>
      </div>
      <div className="w-full bg-zinc-800/60 rounded-full overflow-hidden">
        <div className="progress" style={{width: `${progressPercentage}%`}} />
      </div>
      <div className="mt-2 font-semibold">{cur.q}</div>

      <div className="mt-3 grid gap-2">
        {cur.options.map((o,idx)=>{
          const active = sel===idx;
          const ok = status==='ok' && active;
          const bad = status==='bad' && active;
          return (
            <label key={idx} className={`flex items-center gap-3 px-3 py-2 rounded-xl border transition ${ok?'border-green-500/60 bg-green-500/10': bad?'border-red-500/60 bg-red-500/10':'border-zinc-700/60 hover:bg-zinc-800'}`}>
              <input type="radio" name={`q-${i}`} checked={sel===idx} onChange={()=>setSel(idx)} />
              <span>{o}</span>
            </label>
          );
        })}
      </div>

      {status!=='idle' && (
        <div className="mt-3 text-sm text-zinc-300">
          {status==='ok'? t.correct : t.wrong} — <span className="text-zinc-400">{cur.explain}</span>
        </div>
      )}

      <div className="mt-4 flex justify-between">
        <button onClick={check} className="btn btn-ghost">{t.quiz}</button>
        <button onClick={next} className="btn btn-primary">{i===items.length-1? t.finish : t.next}</button>
      </div>
    </div>
  );
}
