/* eslint-disable @typescript-eslint/no-explicit-any */
import { browser } from '$app/environment';
import { Timezone } from '$lib/stores/timezone';

export const timezone = Timezone('UTC');

export function setCookie(key: string, value: string, days: number) {
	const expires = new Date();
	expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
	if (browser) {
		document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
	}
}

export function getCookie(key: string) {
	if (browser) {
		const keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
		return keyValue ? keyValue[2] : null;
	}

	return null;
}

export function array_to_key_object(entries: any, property: string) {
	const entries_obj: any = {};
	for (const key in entries) {
		entries_obj[entries[key][property]] = entries[key];
	}

	return entries_obj;
}