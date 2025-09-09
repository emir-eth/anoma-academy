'use client';
import Link from 'next/link';

export default function Sidebar({ items, lang, active }){
  return (
    <aside className="card p-4 h-fit sticky top-4">
      <div className="text-sm uppercase tracking-wide text-zinc-400 mb-2">{lang==='tr'?'Dersler':'Lessons'}</div>
      <nav className="grid gap-1">
        {items?.map(it=>{
          const is = it.slug===active;
          return (
            <Link key={it.slug} href={`/lesson/${it.slug}`} className={`px-3 py-2 rounded-lg text-sm ${is?'bg-anoma-red text-white':'hover:bg-zinc-800'}`}>
              {it.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
