import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#2bb673",
        orange: "#ff6f3c",
        deep: "#062014",
        bg: "#f6fbf8",
        card: "#ffffff",
        muted: "#6b7280",
      },
      maxWidth: {
        maxw: "1200px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "accent-grad": "linear-gradient(135deg, #2bb673, #54c17a 40%, #ff6f3c)",
      },
    },
  },
  plugins: [],
};
export default config;

