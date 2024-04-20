/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				unifrakturCook: ["UnifrakturCook"],
				lilitaOne: ["Lilita", "One"],
				Preahvihear: ["Tilt Warp", "sans-serif"],
			},

			screens: {
				xs: "360px",
			},
		},
	},
	plugins: [require("daisyui")],
};
