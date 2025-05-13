import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Inter", "sans-serif"], 
      },
      colors: {
        primary: {
          DEFAULT: "#DC143C", 
          50: "#FFEBEE",
          100: "#FFCDD2",
          500: "#DC143C", 
          900: "#B71C1C",
        },
        secondary: {
          DEFAULT: "#1C1C1C",
          50: "#F5F5F5",
          100: "#E0E0E0",
          500: "#1C1C1C", 
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
