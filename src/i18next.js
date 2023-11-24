import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n.use(
    resourcesToBackend((language, namespace, callback) => {
        import(`./locales/${language}/${namespace}.json`)
            .then((resources) => {
                callback(null, resources);
            })
            .catch((error) => {
                callback(error, null);
            });
    })
)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
