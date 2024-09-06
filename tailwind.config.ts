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
        mainColor: "#FFFFFF",
        outlineColor: "#847469",
        customOrange: "#FF9939"
      },
      maxWidth: {
        customMax: "1552px"
      }
    },
  },
  plugins: [],
};
export default config;
