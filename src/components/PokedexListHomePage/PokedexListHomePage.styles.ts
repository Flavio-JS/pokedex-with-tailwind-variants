import { tv } from "tailwind-variants";

export const pokedexListStyles = tv({
  slots: {
    pokedexListWrapper:
      "flex flex-col items-start p-[4px] bg-identity-primary h-screen w-screen overflow-y-hidden",
    pokedexListPokemonCardWrapper:
      "flex flex-row flex-wrap w-full h-calcvh-[84px] gap-[10px] p-[10px] bg-grayscale-white justify-between content-start rounded-[8px] overflow-y-scroll scrollbar",
  },
});
