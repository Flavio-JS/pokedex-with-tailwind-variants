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
        pokemonType: {
          bug: "#A7B723",
          dark: "#75574C",
          dragon: "#7037FF",
          electric: "#F9CF30",
          fairy: "#E69EAC",
          fighting: "#C12239",
          fire: "#F57D31",
          flying: "#A891EC",
          ghost: "#70559B",
          normal: "#AAA67F",
          grass: "#74CB48",
          ground: "#DEC16B",
          ice: "#9AD6DF",
          poison: "#A43E9E",
          psychic: "#FB5584",
          rock: "#B69E31",
          steel: "#B7B9D0",
          water: "#6493EB",
        },
        identity: {
          primary: "#DC0A2D",
        },
        grayscale: {
          dark: "#1D1D1D",
          medium: "#666666",
          light: "#E0E0E0",
          background: "#EFEFEF",
          white: "#FFFFFF",
          wireframe: "#B8B8B8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
