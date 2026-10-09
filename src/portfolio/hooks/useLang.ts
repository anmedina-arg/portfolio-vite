// Page language (harden pass 2026-09-30).
// Resolution order: ?lang= in the URL (shareable English link for recruiters abroad)
// → last explicit choice (localStorage) → browser language → Spanish.
// Keeps <html lang> in sync so screen readers pronounce the content correctly.
import { useCallback, useEffect, useState } from 'react';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'portfolio-lang';

const isLang = (value: unknown): value is Lang => value === 'es' || value === 'en';

const initialLang = (): Lang => {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (isLang(fromUrl)) return fromUrl;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    // Storage blocked (private mode, disabled cookies): fall through to the browser language.
  }
  return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
};

export const useLang = (): [Lang, (lang: Lang) => void] => {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Not persisted; the choice still applies for this visit.
    }
  }, []);

  return [lang, setLang];
};
