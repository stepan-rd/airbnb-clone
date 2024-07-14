import { useEffect, useRef } from "react";
import imgs from "@/data/imgs.json";
import { useRbnbDetailsPage } from "@/state/RbnbDetailsStore";

type Props = {};

export function MorePicturesPopup({}: Props) {
  const { morePicturesDisplaying, setMorePicturesDisplaying } =
    useRbnbDetailsPage();

  const popupRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        className="absolute top-0 z-50 flex flex-col items-center w-screen bg-white"
        style={{top: "40px"}}
        ref={popupRef}
      >
        {imgs.map((img, imgIndex) => {
          return (
            <img
              key={imgIndex}
              className="my-4 rounded-lg"
              style={{ width: "813px", height: "600px" }}
              src={img.src}
              alt={img.alt}
            />
          );
        })}
      </div>
      <div className="fixed top-0 left-0 z-50 flex items-center w-screen h-10 p-2 bg-white border-b shadow-ms border-b-stone-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          onClick={() => setMorePicturesDisplaying(false)}
          className="hover:cursor-pointer"
          style={{
            display: "block",
            fill: "none",
            height: "16px",
            width: "16px",
            stroke: "currentcolor",
            strokeWidth: "4px",
            overflow: "visible",
          }}
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
        </svg>
        <h1 className="absolute hover:cursor-pointer right-10">Save</h1>
      </div>
    </>
  );
}
