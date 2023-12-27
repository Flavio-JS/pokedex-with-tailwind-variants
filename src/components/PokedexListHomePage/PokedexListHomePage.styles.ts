import { tv } from "tailwind-variants";

export const pokedexListStyles = tv({
  slots: {
    pokedexListWrapper:
      "flex flex-col items-start p-4 bg-identity-primary h-screen w-screen overflow-y-hidden",
    pokedexListPokemonCardWrapper:
      "flex flex-row flex-wrap w-full h-calcvh-84 gap-10 p-10 bg-grayscale-white justify-between content-start rounded-8 overflow-y-scroll scrollbar",
  },
});
