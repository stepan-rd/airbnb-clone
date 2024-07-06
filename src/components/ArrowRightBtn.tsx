import { useThemeStore } from "@/state/ThemeStore";
import React from "react";

type Props = {
  onClick: () => void;
};

export function ArrowRightBtn({onClick}: Props) {
  const { theme } = useThemeStore();

  return (
    <button
      className={`absolute bg-white right-2 top-2 text-xl transition-all flex items-center justify-center last:${theme.borderColor} rounded-full shadow-lg w-7 h-7 border hover:scale-110 hover:shadow-xl`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        style={{
          display: "block",
          fill: "none",
          height: "12px",
          width: "12px",
          stroke: "currentcolor",
          strokeWidth: "5.33333px",
          overflow: "visible",
        }}
        aria-hidden="true"
        role="presentation"
        focusable="false"
      >
        <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
      </svg>
    </button>
  );
}
