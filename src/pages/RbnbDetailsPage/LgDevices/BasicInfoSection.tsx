import { useThemeStore } from "@/state/ThemeStore";
type Props = {};

export default function BasicInfoSection({}: Props) {

  const {theme} = useThemeStore();

  return (
    <section>
      <h1 className={`mb-2 text-xl font-semibold ${theme.textMain}`}>
        *Type of rbnb, location etc.* Lorem Ipsum
      </h1>
      <h1 className="mb-2">*X hosts* · *X bedrooms* · *X beds* · *X baths*</h1>
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          style={{
            display: "block",
            height: "16px",
            width: "16px",
            fill: "currentcolor",
          }}
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path
            fill-rule="evenodd"
            d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
          ></path>
        </svg>
        <h1
          className={`${theme.textMain} font-semibold ml-2 underline hover:cursor-pointer`}
        >
          1 review
        </h1>
      </div>
    </section>
  );
}
