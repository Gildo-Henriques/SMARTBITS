import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        azul: {
          100: "#8cbcff",
          200: "#6598e0",
          300: "#2f5994"
        },
        castanho: {
          100: "#e0b765",
          200: "#946f25"
        }
      }
    }
  },

  plugins: [require("@tailwindcss/typography")]
} as Config;
