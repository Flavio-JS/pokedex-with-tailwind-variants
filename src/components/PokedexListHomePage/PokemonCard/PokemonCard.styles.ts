import { tv } from "tailwind-variants";

export const pokemonCardStyles = tv({
  slots: {
    pokemonCardWrapper:
      "flex flex-col justify-between h-[108px] w-[104px] rounded-8 shadow hover:cursor-pointer",
    pokemonNumberWrapper:
      "flex justify-end h-[12px] w-full py-[4px] px-[8px] text-xs",
    pokemonImageWrapper: "relative",
    pokemonImage: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3",
    pokemonNameWrapper:
      "text-center py-[24px] px-[8px] pb-[4px] bg-grayscale-background text-xs overflow-hidden whitespace-nowrap overflow-ellipsis",
  },
});
