import * as RNLocalize from 'react-native-localize';
import { I18n } from 'i18n-js';

import en from './en.json';
import ru from './ru.json';

const translations = { en, ru };
const i18n = new I18n(translations);

const { languageTag } = RNLocalize.findBestLanguageTag(
  Object.keys(translations),
) || { languageTag: 'en' };

i18n.locale = languageTag;
i18n.enableFallback = true;
i18n.translations = translations;

export default i18n;
