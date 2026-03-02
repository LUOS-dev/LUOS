// src/i18n/index.ts
import { 
  navBarTexts,
  startSectionTexts,
  innovationSectionTexts,
  secondPartTexts,
} from './home-translations';

export const translations = {
  es: {
    navbar: navBarTexts.es,
    startSection: startSectionTexts.es,
    innovationSection: innovationSectionTexts.es,
    secondPart: secondPartTexts.es,
  },
  en: {
    navbar: navBarTexts.en,
    startSection: startSectionTexts.en,
    innovationSection: innovationSectionTexts.en,
    secondPart: secondPartTexts.en,
  }
};

export type Translations = typeof translations;