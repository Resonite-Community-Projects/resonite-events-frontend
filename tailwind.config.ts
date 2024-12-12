import daisyui from "daisyui";

import typography from '@tailwindcss/typography';

// import themesDaisyui from "daisyui/src/theming/themes";

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [typography, daisyui],
	daisyui: {
		darkTheme: "sunset",
    themes: [
			"winter",
			"sunset"
    ]
  }
} satisfies Config;
