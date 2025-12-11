export default {
  content: [
    './index.html',
    './src/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sun: '#f7ad6c',    // green-yellow that blends well with teal
          navy: '#2563eb',   // blue
          teal: '#d2721e',   // green
          gray: '#5e5d5d',   // neutral gray, blends well with green and blue
          light: '#f5f5f5',  // faded gray-white
          dark: '#1b1b1b'    // deep dark background
        }
      },
      fontFamily: {
        sans: ['BankFont'],
      }
    }
  },
  darkMode: 'class',
  plugins: []
};





