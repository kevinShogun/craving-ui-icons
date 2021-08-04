// tailwind.config.js
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
        azul: "#409FFF",
        naranja: "#FE9F5E",
        verde: "#3DCC79",
        celeste: "#22CCE2",
        amarillo: "#FFD454",
        lima: "#AEE553",
        rojo: "#FD7972",
        violeta: "#B656EB",
        rosa: "#FD72DE",
        gris: "#7A7A7A",
      },
      spacing: {
        '97': '30rem',
      }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
    require('@tailwindcss/forms'),
  ],
};
