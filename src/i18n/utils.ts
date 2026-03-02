// src/i18n/utils.ts
import { useEffect, useState } from 'react';
import { translations } from './index';

type Lang = 'es' | 'en';
const LANG_STORAGE_KEY = 'luos-lang';
const LANG_EVENT_NAME = 'luos-language-change';

export function detectBrowserLanguage(): Lang {
  if (typeof navigator === 'undefined') {
    return 'es';
  }

  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function getCurrentLanguage(): Lang {
  if (typeof window === 'undefined') {
    return 'es';
  }

  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored === 'es' || stored === 'en') {
    return stored;
  }

  return detectBrowserLanguage();
}

export function setCurrentLanguage(lang: Lang) {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.setItem(LANG_STORAGE_KEY, lang);
  document.documentElement.lang = lang;
  window.dispatchEvent(new CustomEvent(LANG_EVENT_NAME, { detail: lang }));
}

export function useLanguage() {
  const [lang, setLang] = useState<Lang>('es');

  useEffect(() => {
    const initialLang = getCurrentLanguage();
    setLang(initialLang);
    document.documentElement.lang = initialLang;

    const onLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<Lang>;
      if (customEvent.detail === 'es' || customEvent.detail === 'en') {
        setLang(customEvent.detail);
      }
    };

    const onStorageChange = (event: StorageEvent) => {
      if (event.key === LANG_STORAGE_KEY && (event.newValue === 'es' || event.newValue === 'en')) {
        setLang(event.newValue);
      }
    };

    window.addEventListener(LANG_EVENT_NAME, onLanguageChange as EventListener);
    window.addEventListener('storage', onStorageChange);

    return () => {
      window.removeEventListener(LANG_EVENT_NAME, onLanguageChange as EventListener);
      window.removeEventListener('storage', onStorageChange);
    };
  }, []);

  return {
    lang,
    setLanguage: setCurrentLanguage,
  };
}

type TranslationPath<T> = T extends object ? {
  [K in keyof T]: K extends string ? 
    | `${K}` 
    | `${K}.${TranslationPath<T[K]> extends string ? TranslationPath<T[K]> : never}` 
    : never;
}[keyof T] : never;

type TranslationKeys = TranslationPath<typeof translations.es>;

export function useTranslations(lang: string) {
  const validLang = (lang === 'es' || lang === 'en') ? lang : getCurrentLanguage();
  const t = translations[validLang];
  
  return {
    // Helper genérico con tipado
    t: (path: TranslationKeys, fallback?: string) => {
      const keys = path.split('.');
      let value: any = t;
      
      for (const key of keys) {
        if (value === undefined || value === null) {
          return fallback || path;
        }
        value = value[key as keyof typeof value];
      }
      
      return value ?? fallback ?? path;
    },
    
    // Helpers específicos
    getNavbar: () => t.navbar,
    
    getNavbarServices: () => t.navbar.services,

    getSecondPart: () => t.secondPart,
  };
}