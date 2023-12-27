import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      pokemonType: {
        bug: {
          value: "#A7B723",
        },
        dark: {
          value: "#75574C",
        },
        dragon: {
          value: "#7037FF",
        },
        electric: {
          value: "#F9CF30",
        },
        fairy: {
          value: "#E69EAC",
        },
        fighting: {
          value: "#C12239",
        },
        fire: {
          value: "#F57D31",
        },
        flying: {
          value: "#A891EC",
        },
        ghost: {
          value: "#70559B",
        },
        normal: {
          value: "#AAA67F",
        },
        grass: {
          value: "#74CB48",
        },
        ground: {
          value: "#DEC16B",
        },
        ice: {
          value: "#9AD6DF",
        },
        poison: {
          value: "#A43E9E",
        },
        psychic: {
          value: "#FB5584",
        },
        rock: {
          value: "#B69E31",
        },
        steel: {
          value: "#B7B9D0",
        },
        water: {
          value: "#6493EB",
        },
      },
      identity: {
        primary: {
          value: "#DC0A2D",
        },
      },
      grayscale: {
        dark: {
          value: "#1D1D1D",
        },
        medium: {
          value: "#666666",
        },
        light: {
          value: "#E0E0E0",
        },
        background: {
          value: "#EFEFEF",
        },
        white: {
          value: "#FFFFFF",
        },
        wireframe: {
          value: "#B8B8B8",
        },
      },
    },
  },
  plugins: [],
}
export default config
