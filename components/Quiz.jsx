'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Quiz({ items, onFinish, t }){
  const [i, setI] = useState(0);
  const [sel, setSel] = useState(null);
  const [status, setStatus] = useState('idle');
  const router = useRouter();
  const cur = items[i];

  function check(){
    if (sel===null) { return; }
    if (sel === cur.answer) setStatus('ok'); else setStatus('bad');
  }
  function next(){
    if (i === items.length - 1) {
      onFinish();
      router.push('/');
    }
    else { setI(i+1); setSel(null); setStatus('idle'); }
  }

  return (
    <div className="card p-5 space-y-3">
      <div className="text-sm text-zinc-400 flex items-center justify-between"><span>Quiz {i+1}/{items.length}</span><span>{Math.round(((i+1)/items.length)*100)}%</span></div>
      <div className="w-full bg-zinc-800/60 rounded-full overflow-hidden"><div className="progress" style={{width: `${((i+1)/items.length)*100}%`}} /></div>
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
