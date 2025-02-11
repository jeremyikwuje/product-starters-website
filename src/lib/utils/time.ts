/* eslint-disable @typescript-eslint/no-explicit-any */
import { browser } from '$app/environment';
import { Timezone } from '$lib/stores/timezone';
import date from 'date-and-time';

export const timezone = Timezone('UTC');

// get the user timezone
function getUserTimezone(): string {
	return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export const format = (dt: any, d = 'datetime') => {
	dt = changeTimeZone(dt);

	if (d == 'date') {
		return date.format(dt, 'ddd, MMM DD YYYY');
	}

	return date.format(dt, 'ddd, MMM DD YYYY h:mm:ss A');
};

export const formatDate = (dateString: any) => {
	const dt = new Date(dateString);
	return date.format(dt, 'ddd, MMM DD YYYY');
};

export function friendlyDate(dt: any, d = 'datetime') {
	let getTimezone = timezone.get();
	if (browser) {
		getTimezone = getUserTimezone();
	}
	const dateString = format(dt, d);
	const date = new Date(dateString);
	const now = new Date();
	//console.log(getTimezone)

	// Convert dates to the user's timezone
	const userDate = new Date(date.toLocaleString('en-US', { timeZone: getTimezone }));
	const userNow = new Date(now.toLocaleString('en-US', { timeZone: getTimezone }));

	const diffInSeconds = Math.floor((userNow.getTime() - userDate.getTime()) / 1000);

	const isSameDay =
		userDate.getDate() === userNow.getDate() &&
		userDate.getMonth() === userNow.getMonth() &&
		userDate.getFullYear() === userNow.getFullYear();

	if (diffInSeconds < 900) {
		return 'Just now';
	} else if (diffInSeconds < 3600) {
		const minutes = Math.floor(diffInSeconds / 60);
		return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
	} else if (isSameDay) {
		return `Today, ${userDate.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			timeZone: getTimezone
		})}`;
	} else if (diffInSeconds < 86400) {
		const hours = Math.floor(diffInSeconds / 3600);
		return `${hours} hour${hours > 1 ? 's' : ''} ago`;
	} else if (diffInSeconds < 2592000) {
		const days = Math.floor(diffInSeconds / 86400);
		return `${days} day${days > 1 ? 's' : ''} ago`;
	} else if (diffInSeconds < 31536000) {
		const months = Math.floor(diffInSeconds / 2592000);
		return `${months} month${months > 1 ? 's' : ''} ago`;
	} else {
		const years = Math.floor(diffInSeconds / 31536000);
		return `${years} year${years > 1 ? 's' : ''} ago`;
	}
}

// ✅ Or get a Date object with the specified Time zone
function changeTimeZone(date: any) {
	let timeZone = timezone.get();
	if (browser) {
		timeZone = getUserTimezone();
	}
	if (typeof date === 'string') {
		return new Date(
			new Date(date).toLocaleString('en-US', {
				timeZone
			})
		);
	}

	return new Date(
		date.toLocaleString('en-US', {
			timeZone
		})
	);
}

export function calculateDaysDifference(
	date1: string | Date,
	date2: string | Date
) {
	const d1 = new Date(date1);
	const d2 = new Date(date2);
	const timeDiff = Math.abs(d2.getTime() - d1.getTime());
	return Math.ceil(timeDiff / (1000 * 3600 * 24));
}