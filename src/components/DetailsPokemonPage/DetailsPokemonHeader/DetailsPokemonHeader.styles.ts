import { tv } from "tailwind-variants";

export const detailsPokemonHeaderStyles = tv({
  slots: {
    detailsPokemonHeaderWrapper: "flex justify-between items-center px-[16px] py-[16px] pb-[20px] text-white",
    detailsPokemonHeaderH1: "text-[24px] font-bold",
    detailsPokemonHeaderH2: "text-[12px] font-bold",
  },
});
