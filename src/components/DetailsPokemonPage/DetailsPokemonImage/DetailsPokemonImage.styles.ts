import { tv } from "tailwind-variants";

export const detailsPokemonImageStyles = tv({
  slots: {
    detailsPokemonImageWrapper:
      "flex min-h-[144px] justify-between items-end px-[16px]",
    detailsPokemonImage:
      "absolute top-[80px] left-1/2 transform -translate-x-1/2 z-50",
    detailsPokemonImagePreviousAndNextButton: "mb-[20px] hover:cursor-pointer",
  },
});
