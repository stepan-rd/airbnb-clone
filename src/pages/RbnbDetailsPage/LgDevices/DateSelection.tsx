import { usePriceCalcStore } from "@/state/PriceCalcStore";
import { DaySelection } from "./DaySelection";
import { useThemeStore } from "@/state/ThemeStore";
import { useEffect } from "react";
import numDaysMonths from "@/data/numDaysMonths.json";

type Props = {};

export function DateSelection({}: Props) {
  const {
    currDaysSelected,
    setCurrDaysSelected,
    arrivalDate,
    leavingDate,
    currSelecting,
    months,
    currMonth,
    setDateSelectionVisible,
  } = usePriceCalcStore();

  const { theme } = useThemeStore();

  useEffect(() => {
    if (leavingDate === "" || arrivalDate === "") return;
    const arrivalDay = parseInt(arrivalDate.slice(0, 2));
    const leavingDay = parseInt(leavingDate.slice(0, 2));

    setCurrDaysSelected(leavingDay - arrivalDay);
  }, [arrivalDate, leavingDate]);

  return (
    <>
      <div
        className="absolute top-0 left-0 w-screen h-screen"
        onClick={() => setDateSelectionVisible(false)}
      ></div>
      <div
        className={`absolute z-50 p-4 bg-white rounded-lg shadow-lg right-0 border ${theme.borderColor}`}
        style={{top: "30%"}}
      >
        <h1 className="text-2xl">
          {currDaysSelected || 0} {currDaysSelected === 1 ? "night" : "nights"}
        </h1>
        <h1 className={`${theme.textSecondary} mb-7`}>
          {currSelecting === "arrival" ? (
            <>
              Currently selecting{" "}
              <span className="font-bold text-black">Arrival</span> date
            </>
          ) : (
            <>
              Currently selecting{" "}
              <span className="font-bold text-black">Leaving</span> date
            </>
          )}
        </h1>
        <DaySelection
          monthString={months[currMonth - 1]}
          currMonthDaysCount={numDaysMonths[currMonth - 1]}
          currMonthNumber={currMonth}
        />
      </div>
    </>
  );
}
