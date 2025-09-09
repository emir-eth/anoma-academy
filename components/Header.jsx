'use client';
import Image from 'next/image';
import Link from 'next/link';
import { dict } from '@/app/i18n/dict';
import { useLanguage } from '@/app/providers/LanguageProvider';

export default function Header(){
  const { lang, setLang } = useLanguage();
  const t = dict[lang];
  return (
    <header className="container py-5 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3 hover:opacity-90">
        <Image src="/icons/anoma-logo.svg" alt="Anoma" width={32} height={32} />
        <span className="text-xl font-semibold">{t.site}</span>
      </Link>
      <div className="flex items-center gap-4">
        <LangSwitch lang={lang} setLang={setLang} />
        <Link href="https://anoma.net" target="_blank" className="text-sm text-zinc-300 hover:text-white">anoma.net</Link>
      </div>
    </header>
  );
}

function LangSwitch({ lang, setLang }){
  return (
    <div className="inline-flex items-center rounded-2xl border border-zinc-700 bg-zinc-800/60 overflow-hidden">
      <button onClick={()=>setLang('tr')} className={`px-3 py-1 text-sm ${lang==='tr'?'bg-anoma-red text-white':'text-zinc-200 hover:bg-zinc-700'}`}>TR</button>
      <button onClick={()=>setLang('en')} className={`px-3 py-1 text-sm ${lang==='en'?'bg-anoma-red text-white':'text-zinc-200 hover:bg-zinc-700'}`}>EN</button>
    </div>
  );
}
