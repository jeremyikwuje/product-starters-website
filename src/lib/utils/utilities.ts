/* eslint-disable @typescript-eslint/no-explicit-any */
import { env } from '$env/dynamic/private';
import { RequestMethod } from '$lib/constant';

export function setApiUrl(endpoint: string) {
	const server = env.SERVER;
	let apiUrl = env.API_URL || 'https://product-starters-api-production.up.railway.app/core';
	if ('local' === server?.toLowerCase()) {
		apiUrl = 'http://localhost:4003/core';
	}

	return `${apiUrl}${endpoint}`;
}

export async function requestApi(endpoint: string, method: string = RequestMethod.GET, body = {}) {
	try {
		const url = setApiUrl(endpoint);
		
		const options: any = {
			method: method.toUpperCase(),
			headers: {
				'Content-Type': 'application/json',
			}
		};

		if (method.toUpperCase() != RequestMethod.GET) {
			options.body = JSON.stringify(body);
		}

		const res = await fetch(url, options);
		if (!res.ok) {
			throw new Error(res.statusText);
		}

		const json = await res.json();

		return json;
	} catch (e: any) {

		return {
			error: e.message || e,
		}
	}
}
