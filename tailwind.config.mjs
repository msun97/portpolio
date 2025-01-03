/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray : "#5D5D5D",
        gray10: "#F7F7F7",
        gray20 : "#E0E0E0",
        gray40 : "#898989",
        gray90 : "#333333"
      },
      fontFamily: {
      'pretendard400': ['Pretendard-Regular', 'system-ui' ],
      'title': ['LOTTERIADDAG', 'Pretendard-Regular', 'system-ui']
      },
    },
  },
  plugins: [],
};
