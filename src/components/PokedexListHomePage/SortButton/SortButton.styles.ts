import { tv } from "tailwind-variants";

export const sortButtonStyles = tv({
  slots: {
    SortButtonWrapper:
      "flex justify-center items-center shadow-inner w-32 h-32 p-8 rounded-full bg-grayscale-white hover:cursor-pointer",
  },
});
