import { usePriceCalcStore } from "@/state/PriceCalcStore";
import { useThemeStore } from "@/state/ThemeStore";
import { GuestChoice } from "./GuestChoice";

type Props = {};

const questChoices = [
  { name: "Adults", description: "13 years and older" },
  { name: "Kids", description: "Age 2 up to 12 years" },
  { name: "Infants", description: "Younger than 2 years" },
  { name: "Pets", description: "Bring a pet !" },
];

export function GuestsSelection({}: Props) {
  const { setQuestsSelectionVisible } = usePriceCalcStore();

  const { theme } = useThemeStore();

  return (
    <>
      <div
        className="absolute top-0 left-0 w-screen h-screen"
        onClick={() => setQuestsSelectionVisible(false)}
      ></div>
      <div
        className={`absolute bg-white shadow-md border z-50 p-4 right-0 rounded-lg ${theme.borderColor}`}
        style={{top: "42%"}}
      >
        {questChoices.map((choice, choiceIndex) => (
          <GuestChoice key={choiceIndex} name={choice.name} description={choice.description}/>
        ))}
      </div>
    </>
  );
}
