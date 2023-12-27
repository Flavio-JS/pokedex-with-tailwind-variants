import { tv } from "tailwind-variants";

export const sortButtonStyles = tv({
  slots: {
    SortButtonWrapper:
      "flex justify-center items-center shadow-inner w-[32px] h-[32px] p-[8px] rounded-full bg-grayscale-white hover:cursor-pointer",
  },
});
