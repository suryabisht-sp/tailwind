/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        tg: "#FFC300",
        pin:"#FCDBE5"
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'),],
}
