import type { Config } from "tailwindcss";

import animatePlugin from "tailwindcss-animate";
import formsPlugin from "@tailwindcss/forms";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [formsPlugin, animatePlugin],
} satisfies Config;

export default config;
