import { useThemeStore } from "@/state/ThemeStore";
import { usePriceCalcStore } from "@/state/PriceCalcStore";
import { formatDate } from "@/utils/formatDate";
import { useQuestsStore } from "@/state/QuestsStore";

type Props = {};

export function OptionBtns({}: Props) {
  const { theme } = useThemeStore();

  const {
    setCurrSelecting,
    arrivalDate,
    leavingDate,
    setDateSelectionVisible,
    setQuestsSelectionVisible,
  } = usePriceCalcStore();

  const { adultCount, kidCount, infantCount, petCount } = useQuestsStore();

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full">
        <div
          className={`p-2 ${theme.borderColor} border active:bg-stone-100 hover:border-t-stone-600 hover:border-l-stone-600 hover:shadow-sm hover:cursor-pointer rounded-tl-lg w-1/2`}
          onClick={() => {
            setDateSelectionVisible(true);
            setCurrSelecting("arrival");
          }}
        >
          <h1 className="text-10px whitespace-nowrap">ARRIVAL</h1>
          <h1 className="text-sm font-normal">{formatDate(arrivalDate)}</h1>
        </div>
        <div
          className={`p-2 border-t border-b border-r w-1/2 hover:border-r-stone-600 active:bg-stone-100 hover:border-t-stone-600 hover:shadow-sm hover:cursor-pointer ${theme.borderColor} rounded-tr-lg`}
          onClick={() => {
            setDateSelectionVisible(true);
            setCurrSelecting("leaving");
          }}
        >
          <h1 className="text-10px whitespace-nowrap">DEPARTURE</h1>
          <h1 className="text-sm font-normal">{formatDate(leavingDate)}</h1>
        </div>
      </div>
      <div
        className={`border-b p-2 hover:cursor-pointer hover:shadow-md hover:border-stone-600 border-l border-r rounded-b-lg w-full ${theme.borderColor}`}
        onClick={() => setQuestsSelectionVisible(true)}
      >
        <h1 className="w-full text-10px">QUESTS</h1>
        <h1 className="text-sm font-normal">
          {adultCount + kidCount > 0 && `${adultCount + kidCount} ${adultCount + kidCount === 1 ? "quest," : "quests,"}`}
        </h1>
        <h1 className="text-sm font-normal">
          {infantCount > 0 &&
            `${infantCount} ${infantCount === 1 ? "kid," : "kids,"}`}
        </h1>
        <h1 className="text-sm font-normal">
          {petCount > 0 &&
            `${petCount} ${petCount === 1 ? "pet," : "pets,"}`}
        </h1>
      </div>
    </div>
  );
}
