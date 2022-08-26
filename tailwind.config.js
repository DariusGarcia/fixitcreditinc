/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
// tailwind.config.js
const colors = require('tailwindcss/colors')
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			oswald: ['Oswald', 'sans-serif'],
			DMSans: ['DM Sans', 'sans-serif'],
			Roboto: ['Roboto', 'sans-serif'],
			Inter: ['Inter', 'sans-serif'],
		},
		colors: {
			white: '#ffffff',
			black: '#000000',
			grey: '#374151',
			lightGrey: '#f1f5f9',
			greybtn: '#d1d5db',
			grey3: '#4b5563',
			primary: '#004999',
			bluetext: '#3b82f6',
			red: '#dc2626',
			tmobile: '#E20074',
			att: '#00a8e0',
			spectrum: '#003057',
			neutral: '#fafafa',
			zinc: '#f1f1f1',
			gradBlue: '#004999',
			gradBlue2: '#009dff',
			slate: '#111827',
			grey2: 'f5f6f6',
			grey3: '#cbd5e1',
			netlify: '#31c9c9',
			nerdBlue: '#eef7ff',
			'warm-gray': colors.warmGray,
			teal: '#004999',
			grey800: '#1f2937',
			grey300: '#d1d5db',
			grey50: '#f9fafb',
		},
		extend: {
			backgroundImage: {
				'curve-bg': "url('Assets/Images/smooth.jpg')",
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant, e, postcss }) {
			addVariant('firefox', ({ container, separator }) => {
				const isFirefoxRule = postcss.atRule({
					name: '-moz-document',
					params: 'url-prefix()',
				})
				isFirefoxRule.append(container.nodes)
				container.append(isFirefoxRule)
				isFirefoxRule.walkRules((rule) => {
					rule.selector = `.${e(
						`firefox${separator}${rule.selector.slice(1)}`
					)}`
				})
			})
		}),

		require('@tailwindcss/forms'),
	],
}
