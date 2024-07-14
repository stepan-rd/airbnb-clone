import { PriceCalc } from "./PriceCalc";
import { BasicInfo } from "./BasicInfo";
import { useRbnbDetailsPage } from "@/state/RbnbDetailsStore";
import { MorePicturesPopup } from "./MorePicturesPopup";
import { usePriceCalcStore } from "@/state/PriceCalcStore";
import { GuestsSelection } from "./GuestsSelection";
import { DateSelection } from "./DateSelection";

type Props = {};

export function PageLgDisplay({}: Props) {
  const { morePicturesDisplaying, setMorePicturesDisplaying } =
    useRbnbDetailsPage();

  const { dateSelectionVisible, questsSelectionVisible } = usePriceCalcStore();

  return (
    <div className="flex flex-col items-center" style={{ marginTop: "83px" }}>
      <div className="w-11/12 relative max-w-63.75rem min-h-screen">
        <BasicInfo />
        <PriceCalc />
        {dateSelectionVisible && <DateSelection />}
        {questsSelectionVisible && <GuestsSelection />}
      </div>
      {morePicturesDisplaying && <MorePicturesPopup />}
    </div>
  );
}
