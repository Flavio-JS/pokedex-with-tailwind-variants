import { tv } from "tailwind-variants";

export const TextFieldStyles = tv({
  slots: {
    TextFieldWrapper:
      "flex items-center justify-start w-full max-w-[200px] p-[8px] rounded-[16px] shadow-inner gap-[8px] bg-grayscale-white",
    TextFieldInput: "w-full p-[2px] rounded border-gray-300 focus:outline-none focus:border-blue-500",
  },
});
