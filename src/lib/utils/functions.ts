/* eslint-disable @typescript-eslint/no-explicit-any */
import { browser } from '$app/environment';
import { Interval, TeamSize } from '$lib/constant';
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

export function capitalizeFirstWord(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatTeamSize(teamSize: TeamSize): string {
  switch (teamSize) {
    case TeamSize.Sole:
      return '1';
    case TeamSize.Micro:
      return '<10';
    case TeamSize.Small:
      return '<49';
    case TeamSize.Medium:
      return '<249';
    case TeamSize.Large:
      return '250+';
    default:
      return teamSize;
  }
}

export function getIntervalAbbreviation(interval: Interval): string {
  switch (interval) {
    case Interval.Hour:
      return 'hr';
    case Interval.Day:
      return 'dy';
    case Interval.Months:
      return 'mo';
    case Interval.Years:
      return 'yr';
    default:
      return interval;
  }
}