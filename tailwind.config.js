/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: { parallax: "url(./components/pictures/darkbg.jpg)" },
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
