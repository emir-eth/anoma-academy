'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const LangContext = createContext({ lang: 'en', setLang: () => {} });

export function LanguageProvider({ children }) {
  // localStorage'dan başlat (persist)
  const [lang, setLangState] = useState('en');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('anoma_lang');
    if (saved === 'tr' || saved === 'en') {
      setLangState(saved);
      document.documentElement.setAttribute('lang', saved);
    }
  }, []);

  const setLang = (l) => {
    setLangState(l);
    if (typeof window !== 'undefined') {
      localStorage.setItem('anoma_lang', l);
      document.documentElement.setAttribute('lang', l);
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LangContext);
}
