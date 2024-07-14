import { useHomePage } from "@/state/HomePageStore";
import { useThemeStore } from "@/state/ThemeStore";
import { useParams } from "react-router-dom";
import { OptionBtns } from "./OptionBtns";
import { usePriceCalcStore } from "@/state/PriceCalcStore";
import { ReserveBtn } from "./ReserveBtn";
import { useMemo } from "react";

type Props = {};

export function PriceCalc({}: Props) {
  const { rbnbId } = useParams();

  const { allRbnbs } = useHomePage();

  const { theme } = useThemeStore();

  const currRbnb = useMemo(() => {
    return allRbnbs[parseInt(rbnbId!)];
  }, [allRbnbs]);

  const { currDaysSelected } = usePriceCalcStore();

  return (
    <div
      className={`absolute right-0 w-4/12 font-semibold border p-4 rounded-lg shadow-md ${theme.borderColor}`}
    >
      <h1 className="mb-4 font-normal">
        <span className="text-xl font-semibold">
          ${currRbnb.pricePerNight.toFixed()}
        </span>{" "}
        night
      </h1>
      <OptionBtns />
      <ReserveBtn />
      <div className="w-full mb-4 border-t rounded-full border-t-stone-300"></div>
      <div className="flex justify-between">
        <h1>Total</h1>
        <h1>${(currDaysSelected * currRbnb.pricePerNight).toFixed(0)}</h1>
      </div>
    </div>
  );
}
