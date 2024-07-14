import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const darkTheme: CustomThemeConfig = {
	name: 'dark-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '24px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '255 255 255',
		'--on-warning': '255 255 255',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #458588
		'--color-primary-50': '227 237 237', // #e3eded
		'--color-primary-100': '218 231 231', // #dae7e7
		'--color-primary-200': '209 225 225', // #d1e1e1
		'--color-primary-300': '181 206 207', // #b5cecf
		'--color-primary-400': '125 170 172', // #7daaac
		'--color-primary-500': '69 133 136', // #458588
		'--color-primary-600': '62 120 122', // #3e787a
		'--color-primary-700': '52 100 102', // #346466
		'--color-primary-800': '41 80 82', // #295052
		'--color-primary-900': '34 65 67', // #224143
		// secondary | #d79921
		'--color-secondary-50': '249 240 222', // #f9f0de
		'--color-secondary-100': '247 235 211', // #f7ebd3
		'--color-secondary-200': '245 230 200', // #f5e6c8
		'--color-secondary-300': '239 214 166', // #efd6a6
		'--color-secondary-400': '227 184 100', // #e3b864
		'--color-secondary-500': '215 153 33', // #d79921
		'--color-secondary-600': '194 138 30', // #c28a1e
		'--color-secondary-700': '161 115 25', // #a17319
		'--color-secondary-800': '129 92 20', // #815c14
		'--color-secondary-900': '105 75 16', // #694b10
		// tertiary | #b16286
		'--color-tertiary-50': '243 231 237', // #f3e7ed
		'--color-tertiary-100': '239 224 231', // #efe0e7
		'--color-tertiary-200': '236 216 225', // #ecd8e1
		'--color-tertiary-300': '224 192 207', // #e0c0cf
		'--color-tertiary-400': '200 145 170', // #c891aa
		'--color-tertiary-500': '177 98 134', // #b16286
		'--color-tertiary-600': '159 88 121', // #9f5879
		'--color-tertiary-700': '133 74 101', // #854a65
		'--color-tertiary-800': '106 59 80', // #6a3b50
		'--color-tertiary-900': '87 48 66', // #573042
		// success | #689d6a
		'--color-success-50': '232 240 233', // #e8f0e9
		'--color-success-100': '225 235 225', // #e1ebe1
		'--color-success-200': '217 231 218', // #d9e7da
		'--color-success-300': '195 216 195', // #c3d8c3
		'--color-success-400': '149 186 151', // #95ba97
		'--color-success-500': '104 157 106', // #689d6a
		'--color-success-600': '94 141 95', // #5e8d5f
		'--color-success-700': '78 118 80', // #4e7650
		'--color-success-800': '62 94 64', // #3e5e40
		'--color-success-900': '51 77 52', // #334d34
		// warning | #d65d0e
		'--color-warning-50': '249 231 219', // #f9e7db
		'--color-warning-100': '247 223 207', // #f7dfcf
		'--color-warning-200': '245 215 195', // #f5d7c3
		'--color-warning-300': '239 190 159', // #efbe9f
		'--color-warning-400': '226 142 86', // #e28e56
		'--color-warning-500': '214 93 14', // #d65d0e
		'--color-warning-600': '193 84 13', // #c1540d
		'--color-warning-700': '161 70 11', // #a1460b
		'--color-warning-800': '128 56 8', // #803808
		'--color-warning-900': '105 46 7', // #692e07
		// error | #cc241d
		'--color-error-50': '247 222 221', // #f7dedd
		'--color-error-100': '245 211 210', // #f5d3d2
		'--color-error-200': '242 200 199', // #f2c8c7
		'--color-error-300': '235 167 165', // #eba7a5
		'--color-error-400': '219 102 97', // #db6661
		'--color-error-500': '204 36 29', // #cc241d
		'--color-error-600': '184 32 26', // #b8201a
		'--color-error-700': '153 27 22', // #991b16
		'--color-error-800': '122 22 17', // #7a1611
		'--color-error-900': '100 18 14', // #64120e
		// surface | #504945
		'--color-surface-50': '229 228 227', // #e5e4e3
		'--color-surface-100': '220 219 218', // #dcdbda
		'--color-surface-200': '211 210 209', // #d3d2d1
		'--color-surface-300': '185 182 181', // #b9b6b5
		'--color-surface-400': '133 128 125', // #85807d
		'--color-surface-500': '80 73 69', // #504945
		'--color-surface-600': '72 66 62', // #48423e
		'--color-surface-700': '60 55 52', // #3c3734
		'--color-surface-800': '48 44 41', // #302c29
		'--color-surface-900': '39 36 34' // #272422
	}
};
