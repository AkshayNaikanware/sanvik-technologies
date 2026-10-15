/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B1340', 800: '#101B52', 900: '#070B22' },
        brand: { DEFAULT: '#2C49C7', dark: '#21399E' },
        cyan: { DEFAULT: '#0DD5E2', dark: '#0BB9C5' },
        ink: '#101A33',
        muted: '#5B6478',
        line: '#E3E7F2',
        paper: '#F4F7FD',
      },
      fontFamily: { sans: ['Poppins', 'sans-serif'] },
      maxWidth: { content: '1200px' },
      boxShadow: { card: '0 14px 30px -18px rgba(44,73,199,0.45)' },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse at top right, #152266 0%, #0B1340 55%, #070B22 100%)',
        'cta-glow': 'linear-gradient(120deg, #0B1340, #1A2A6E)',
        'illus': 'linear-gradient(135deg, #EEF2FD, #E3ECFF)',
      },
    },
  },
  plugins: [],
};
