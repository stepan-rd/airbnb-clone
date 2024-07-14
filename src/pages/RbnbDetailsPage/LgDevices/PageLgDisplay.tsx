import { PriceCalc } from "./PriceCalc";
import { useRbnbDetailsPage } from "@/state/RbnbDetailsStore";
import { MorePicturesPopup } from "./MorePicturesPopup";
import { usePriceCalcStore } from "@/state/PriceCalcStore";
import { GuestsSelection } from "./GuestsSelection";
import { PictureGridLgDisplay } from "./PictureGridLgDisplay";
import { useThemeStore } from "@/state/ThemeStore";
import { HostInfoSection } from "./HostInfoSection";
import { DateSelection } from "./DateSelection";
import BasicInfoSection from "./BasicInfoSection";

type Props = {};

export function PageLgDisplay({}: Props) {
  const { morePicturesDisplaying, setMorePicturesDisplaying } =
    useRbnbDetailsPage();

  const { dateSelectionVisible, questsSelectionVisible } = usePriceCalcStore();

  const { theme } = useThemeStore();

  return (
    <div className="min-h-screen px-10" style={{ marginTop: "83px" }}>
      <h1 className={`${theme.textMain} mx-auto my-4 text-2xl font-semibold max-w-63.75rem`}>*Rbnb name*</h1>
      <PictureGridLgDisplay />
      <div className="mt-6 flex relative max-w-63.75rem mx-auto">
        <div className="flex flex-col">
          <BasicInfoSection />
          <div className="my-4 border-t border-t-stone-300"></div>
          <HostInfoSection />
        </div>
        <PriceCalc />
      </div>

      {dateSelectionVisible && <DateSelection />}
      {questsSelectionVisible && <GuestsSelection />}
      {morePicturesDisplaying && <MorePicturesPopup />}
    </div>
  );
}
