/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: 'body',
  theme: {
    extend: {
      backgroundColor: {
        1: '#2B2836',
        support2: '#3A3649',
        support3: '#514C66',
        accent: '#2E2C3A',
        trans: '#2A2735B2',
      },
      textColor: {
        primary: '#B79494',
        1: '#B6BFC8',
        2: '#FFFFFF',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
