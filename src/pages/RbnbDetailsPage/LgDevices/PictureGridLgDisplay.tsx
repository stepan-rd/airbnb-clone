import { useRbnbDetailsPage } from "@/state/RbnbDetailsStore";

type Props = {};

export function PictureGridLgDisplay({}: Props) {
  const { morePicturesDisplaying, setMorePicturesDisplaying } =
    useRbnbDetailsPage();

  return (
    <div className="relative flex justify-center w-full max-h-32.188rem max-w-63.75rem">
      <img
        className="w-full mr-2 rounded-l-xl min-w-80 min-h-80"
        src="https://placehold.co/320x320?text=Placeholder"
        alt=""
      />
      <div className="grid w-full max-w-63.75rem grid-cols-2 grid-rows-2 gap-2">
        <img
          className="w-full min-w-9.375rem min-h-9.375rem"
          src="https://placehold.co/150x150?text=Placeholder"
          alt=""
        />

        <img
          className="w-full rounded-r-xl min-w-9.375rem min-h-9.375rem"
          src="https://placehold.co/150x150?text=Placeholder"
          alt=""
        />

        <img
          className="w-full min-w-9.375rem min-h-9.375rem"
          src="https://placehold.co/150x150?text=Placeholder"
          alt=""
        />

        <img
          className="w-full rounded-r-xl min-w-9.375rem min-h-9.375rem"
          src="https://placehold.co/150x150?text=Placeholder"
          alt=""
        />
      </div>
      <button
        className="absolute flex px-2 py-1 transition-all bg-white border border-black rounded-lg right-10 hover:scale-102 active:scale-100 whitespace-nowrap"
        style={{top: "85%"}}
        onClick={() => setMorePicturesDisplaying(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          aria-hidden="true"
          width={16}
          role="presentation"
          focusable="false"
          className="mr-2"
        >
          <path
            fill-rule="evenodd"
            d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
          ></path>
        </svg>
        Show more photos
      </button>
    </div>
  );
}
