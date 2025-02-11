/* eslint-disable @typescript-eslint/no-explicit-any */
import { writable, get } from 'svelte/store';

export function Timezone(initialValue: any) {
	const isBrowser = typeof window !== 'undefined';

	const store = writable(initialValue);

	if (!isBrowser) {
		return {
			subscribe: store.subscribe,
			set: store.set,
			update: store.update,
			get: () => get(store)
		};
	}

	return {
		subscribe: store.subscribe,
		set: (value: any) => {
			store.set(value);
		},
		update: (fn: any) => {
			store.update(fn);
		},
		get: () => get(store)
	};
}
