import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const lightTheme: CustomThemeConfig = {
	name: 'light-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter`,
		'--theme-font-family-heading': `sans-serif`,
		'--theme-font-color-base': '56 53 63',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary
		'--color-primary-50': '239 246 255',
		'--color-primary-100': '219 234 254',
		'--color-primary-200': '191 219 254',
		'--color-primary-300': '147 197 253',
		'--color-primary-400': '96 165 250',
		'--color-primary-500': '59 130 246',
		'--color-primary-600': '37 99 235',
		'--color-primary-700': '29 78 216',
		'--color-primary-800': '30 64 175',
		'--color-primary-900': '30 58 138',
		// secondary
		'--color-secondary-50': '240 249 255',
		'--color-secondary-100': '224 242 254',
		'--color-secondary-200': '186 230 253',
		'--color-secondary-300': '125 211 252',
		'--color-secondary-400': '56 189 248',
		'--color-secondary-500': '14 165 233',
		'--color-secondary-600': '2 132 199',
		'--color-secondary-700': '3 105 161',
		'--color-secondary-800': '7 89 133',
		'--color-secondary-900': '12 74 110',
		// tertiary
		'--color-tertiary-50': '238 242 255',
		'--color-tertiary-100': '224 231 255',
		'--color-tertiary-200': '199 210 254',
		'--color-tertiary-300': '165 180 252',
		'--color-tertiary-400': '129 140 248',
		'--color-tertiary-500': '99 102 241',
		'--color-tertiary-600': '79 70 229',
		'--color-tertiary-700': '67 56 202',
		'--color-tertiary-800': '55 48 163',
		'--color-tertiary-900': '49 46 129',
		// success
		'--color-success-50': '237 247 220',
		'--color-success-100': '230 245 208',
		'--color-success-200': '224 242 197',
		'--color-success-300': '206 235 162',
		'--color-success-400': '169 219 92',
		'--color-success-500': '132 204 22',
		'--color-success-600': '119 184 20',
		'--color-success-700': '99 153 17',
		'--color-success-800': '79 122 13',
		'--color-success-900': '65 100 11',
		// warning
		'--color-warning-50': '252 244 218',
		'--color-warning-100': '251 240 206',
		'--color-warning-200': '250 236 193',
		'--color-warning-300': '247 225 156',
		'--color-warning-400': '240 202 82',
		'--color-warning-500': '234 179 8',
		'--color-warning-600': '211 161 7',
		'--color-warning-700': '176 134 6',
		'--color-warning-800': '140 107 5',
		'--color-warning-900': '115 88 4',
		// error
		'--color-error-50': '249 221 234',
		'--color-error-100': '246 209 228',
		'--color-error-200': '244 198 221',
		'--color-error-300': '238 163 200',
		'--color-error-400': '225 94 159',
		'--color-error-500': '212 25 118',
		'--color-error-600': '191 23 106',
		'--color-error-700': '159 19 89',
		'--color-error-800': '127 15 71',
		'--color-error-900': '104 12 58',
		// surface
		'--color-surface-50': '249 246 241', // #f9f6f1
		'--color-surface-100': '247 243 236', // #f7f3ec
		'--color-surface-200': '245 240 232', // #f5f0e8
		'--color-surface-300': '238 231 217', // #eee7d9
		'--color-surface-400': '226 214 189', // #e2d6bd
		'--color-surface-500': '213 196 161', // #d5c4a1
		'--color-surface-600': '192 176 145', // #c0b091
		'--color-surface-700': '160 147 121', // #a09379
		'--color-surface-800': '128 118 97', // #807661
		'--color-surface-900': '104 96 79' // #68604f
	}
};
