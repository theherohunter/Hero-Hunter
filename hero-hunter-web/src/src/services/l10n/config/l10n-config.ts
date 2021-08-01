import { l10EnDictionary, l10UaDictionary, l10RuDictionary } from '../languages';
import { L10Dictionary } from '../models';
import { Locales } from '../locales';
import { flattenDictionary } from '../utils';

export const l10Config: Record<Locales, L10Dictionary> = {
  [Locales.En]: l10EnDictionary,
  [Locales.Ua]: l10UaDictionary,
  [Locales.Ru]: l10RuDictionary,
};

export function getFlattenL10nByLocale(lang: Locales) {
  return flattenDictionary(l10Config[lang]);
}
export function getL10nByLocale(lang: Locales) {
  return l10Config[lang];
}
