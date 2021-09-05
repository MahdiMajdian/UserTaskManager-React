const colors = require('tailwindcss/colors')

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				sky: colors.sky,
				lime: colors.lime,
				teal: colors.teal,
				cyan: colors.cyan,
				rose: colors.rose,
				amber: colors.amber,
				emerald: colors.emerald,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
