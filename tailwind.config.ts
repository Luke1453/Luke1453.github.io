import { join } from 'path';
import type { Config } from 'tailwindcss';

import { skeleton } from '@skeletonlabs/tw-plugin';
import { lightTheme } from './src/themes/light-theme';
import { darkTheme } from './src/themes/dark-theme';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		}
	},
	plugins: [
		skeleton({
			themes: {
				// preset: [{ name: 'skeleton', enhancements: true }]
				custom: [lightTheme, darkTheme]
			}
		})
	]
} satisfies Config;

module.exports = config;

// https://www.skeleton.dev/docs/get-started
