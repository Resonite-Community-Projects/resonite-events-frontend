import type { PageServerLoad } from './$types';

import { DateTime } from 'luxon';

// https://natclark.com/tutorials/javascript-lighten-darken-hex-color/
const newShade = (hexColor, magnitude) => {
	hexColor = hexColor.replace(`#`, ``);
	if (hexColor.length === 6) {
		const decimalColor = parseInt(hexColor, 16);
		let r = (decimalColor >> 16) + magnitude;
		r > 255 && (r = 255);
		r < 0 && (r = 0);
		let g = (decimalColor & 0x0000ff) + magnitude;
		g > 255 && (g = 255);
		g < 0 && (g = 0);
		let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
		b > 255 && (b = 255);
		b < 0 && (b = 0);
		return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
	} else {
		return hexColor;
	}
};

export const load: PageServerLoad = async () => {
	const timeFormat = (input: string) => DateTime.fromISO(input.replaceAll(' ', 'T')).toString();
	// https://stackoverflow.com/a/16348977
	const stringToColor = (str: string) => {
		let hash = 0;
		str.split('').forEach((char) => {
			hash = char.charCodeAt(0) + ((hash << 5) - hash);
			console.log(hash);
		});
		let color = '#';
		for (let i = 0; i < 3; i++) {
			const value = (hash >> (i * 8)) & 0xff;
			color += value.toString(16).padStart(2, '0');
		}
		return color;
	};

	const rawAPI = await fetch('https://resonite-communities.com/v1/events');
	const apiResponse = await rawAPI.text();
	const events = apiResponse.split('\n').map((eventRaw, i) => {
		const event = eventRaw.split('`');
		return {
			id: i,
			start: timeFormat(event[3]),
			end: timeFormat(event[4]),
			title: event[0],
			backgroundColor: newShade(stringToColor(event[5]), 15),
			extendedProps: {
				description: event[1],
				location: event[2],
				community_name: event[5]
			}
		};
	});
	console.log(events[0]);
	return { events };
};
