/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}', // Tailwind will scan the main App file
		'./src/**/*.{js,jsx,ts,tsx}', // Scan all JS, JSX, TS, and TSX files in the src folder
	],
	theme: {
		extend: {}, // You can customize your theme here
	},
	plugins: [], // Add any TailwindCSS plugins if needed
};
