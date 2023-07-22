import type { Config } from 'tailwindcss';

import formsPlugin from '@tailwindcss/forms';
import animatePlugin from 'tailwindcss-animate';

const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [formsPlugin, animatePlugin],
} satisfies Config;

export default config;
