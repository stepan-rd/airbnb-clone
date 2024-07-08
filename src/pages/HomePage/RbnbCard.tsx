import { useThemeStore } from "@/state/ThemeStore";
import { RbnbType } from "@/types/types";
import React, { forwardRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  rbnbDetails: RbnbType;
  rbnbIndex: number;
};

export const RbnbCard = forwardRef<HTMLDivElement, Props>(({ rbnbDetails, rbnbIndex }, ref) => {
  const { theme } = useThemeStore();

  const navigate = useNavigate();

  const starImg = useMemo(() => {
    console.log(`img number: ${rbnbIndex} is rerendering...`)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        width="14"
        role="presentation"
        focusable="false"
      >
        <path
          fillRule="evenodd"
          d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
        ></path>
      </svg>
    );
  }, []);

  return (
    <div
      className="m-10 transition-transform duration-300 transform w-fit hover:cursor-pointer"
      onClick={() => navigate(`/details/${rbnbIndex}`)}
      ref={ref}
    >
      <img
        src={rbnbDetails.imgUrls[0]}
        className="rounded-2xl"
        alt="rbnb-img"
      />
      <div className="relative mt-2">
        <h1 className={`${theme.textMain} font-semibold`}>
          {rbnbDetails.name}
        </h1>
        <h1 className={theme.textSecondary}>
          Hosted by {rbnbDetails.hostedBy}
        </h1>
        <div className="flex">
          <h1 className={`${theme.textMain} font-semibold`}>
            ${rbnbDetails.pricePerNight.toFixed(0)}
          </h1>
          <h1 className="ml-1">per night</h1>
        </div>
        <div className="absolute top-0 right-0 flex items-center justify-center">
          <h1 className="mr-1">{starImg}</h1>
          {rbnbDetails.stars.toFixed(2)}
        </div>
      </div>
    </div>
  );
});

RbnbCard.displayName = "RbnbCard";
