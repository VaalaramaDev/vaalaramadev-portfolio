import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#0f0f0f',
        muted: '#6b7280',
        accent: '#2563eb',
        border: '#e5e7eb',
        card: '#f9fafb'
      },
      maxWidth: {
        content: '1100px'
      },
      boxShadow: {
        soft: '0 20px 60px -32px rgba(15, 15, 15, 0.18)'
      }
    }
  },
  plugins: []
};

export default config;
