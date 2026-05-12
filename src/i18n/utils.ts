import es from './es.json';
import en from './en.json';

export const languages = {
	es,
	en
};

export type Lang = keyof typeof languages;

export function getLangFromUrl(url: URL): Lang {
	return url.pathname.startsWith('/en') ? 'en' : 'es';
}

export function useTranslations(lang: Lang) {
	return function t(key: string) {
		return key
			.split('.')
			.reduce((obj: any, i) => obj?.[i], languages[lang]) || key;
	};
}