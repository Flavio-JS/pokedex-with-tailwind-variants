import { tv } from "tailwind-variants";

export const pokedexListHeaderStyles = tv({
  slots: {
    pokedexListHeaderWrapper:
      "flex flex-col items-start p-[12px] bg-identity-primary w-full",
    pokedexListHeaderFilterWrapper: "flex justify-between items-center w-full",
    pokedexListHeaderSortWrapper:
      "flex gap-[8px] items-center text-grayscale-white",
  },
});
