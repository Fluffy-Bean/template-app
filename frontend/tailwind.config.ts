import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        "IBMPlexMono": ['"IBM Plex Mono"', 'monospace'],
        "Roboto": ['Roboto', 'sans-serif'],
      },
    }
  },
  plugins: []
} as Config;
