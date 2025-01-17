module.exports = {
	content: [
	  "./src/**/*.{html,js,jsx,ts,tsx}",
	],
	theme: {
	  extend: {
		animation: {
		  marquee: 'marquee 20s linear infinite',
		},
		keyframes: {
		  marquee: {
			'0%': { transform: 'translateX(100%)' },
			'100%': { transform: 'translateX(-100%)' },
		  },
		},
	  },
	},
	plugins: [],
  }
  