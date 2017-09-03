import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_ML_NAME, LANG_ML_TRANS } from './lang-ml';

// translation token
export const TRANSLATIONS = new OpaqueToken('translation');

// all translations
const dictionary = {};
dictionary[LANG_EN_NAME] = LANG_EN_TRANS;
dictionary[LANG_ML_NAME] = LANG_ML_TRANS;

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];