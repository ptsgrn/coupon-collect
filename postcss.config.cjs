const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer
		// postcss-scss is needed to parse SCSS syntax
	]
};

module.exports = config;
