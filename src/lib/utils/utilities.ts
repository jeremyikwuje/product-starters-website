/* eslint-disable @typescript-eslint/no-explicit-any */
import { env } from '$env/dynamic/private';
import { RequestMethod } from '$lib/constant';

export function setApiUrl(endpoint: string) {
	const server = env.SERVER;
	let apiUrl = env.API_URL || '';
	if (server?.toLowerCase() == 'local') {
		apiUrl = 'http://localhost:4003/core';
	}

	return `${apiUrl}${endpoint}`;
}

export async function requestApi(endpoint: string, method: string = RequestMethod.GET, body = {}) {
	const url = setApiUrl(endpoint);
	
	let options: any = {
		method: method.toUpperCase()
	};

	if (method.toUpperCase() != RequestMethod.GET) {
		options = {
			method: method.toUpperCase(),
			body: JSON.stringify(body)
		};
	}

	const res = await fetch(url, options);
	const json = await res.json();

	return json;
}
