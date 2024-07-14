import { usePriceCalcStore } from "@/state/PriceCalcStore";
import { useThemeStore } from "@/state/ThemeStore";

type Props = {
  monthString: string;
  currMonthDaysCount: number;
  currMonthNumber: number;
};

export function DaySelection({
  monthString,
  currMonthDaysCount,
  currMonthNumber,
}: Props) {
  const {
    daysInWeek,
    arrivalDate,
    setArrivalDate,
    setLeavingDate,
    currSelecting,
    setDateSelectionVisible,
  } = usePriceCalcStore();

  const { theme } = useThemeStore();

  return (
    <div className="w-11/12 mr-10">
      <h1 className="flex justify-center my-2">{monthString} 2024</h1>
      <div className="flex">
        {daysInWeek.map((day) => (
          <h1
            className={`${theme.textSecondary} text-xs flex justify-center w-9`}
          >
            {day}
          </h1>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {Array(currMonthDaysCount)
          .fill("")
          .map((_, dayIndex) => {
            const dayNumber = dayIndex + 1;
            const arrivalDay = parseInt(arrivalDate.slice(0, 2));

            if (currSelecting === "leaving" && dayNumber < arrivalDay + 1) {
              return (
                <div className="flex justify-center w-9 hover:cursor-pointer text-stone-300 hover:text-red-500">
                  {dayNumber}
                </div>
              );
            }

            return (
              <div
                className="flex justify-center w-9 hover:cursor-pointer hover:text-red-500"
                onClick={() => {
                  const date = `${dayNumber.toString().padStart(2, "0")}${currMonthNumber.toString().padStart(2, "0")}${2024}`;

                  if (currSelecting === "arrival") {
                    setArrivalDate(date);
                    setLeavingDate("");
                  } else {
                    setLeavingDate(date);
                  }
                }}
              >
                {dayNumber}
              </div>
            );
          })}
      </div>
    </div>
  );
}
