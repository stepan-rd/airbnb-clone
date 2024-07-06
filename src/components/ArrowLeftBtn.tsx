import { useThemeStore } from "@/state/ThemeStore";

type Props = {
  onClick: () => void;
};

export function ArrowLeftBtn({onClick}: Props) {

  const {theme} = useThemeStore()

  return (
    <button
      className={`absolute top-2 bg-white left-2 text-xl hover:scale-110 hover:shadow-xl flex items-center justify-center last:${theme.borderColor} rounded-full shadow-lg w-7 h-7 border`}
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
        <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
      </svg>
    </button>
  );
}
