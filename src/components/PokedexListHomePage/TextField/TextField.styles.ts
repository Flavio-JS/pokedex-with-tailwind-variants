import { tv } from "tailwind-variants";

export const TextFieldStyles = tv({
  slots: {
    TextFieldWrapper:
      "flex items-center justify-start w-full max-w-200 p-8 rounded-16 shadow-inner gap-8 bg-grayscale-white",
    TextFieldInput: "w-full p-2 rounded border-gray-300 focus:outline-none focus:border-blue-500",
  },
});
