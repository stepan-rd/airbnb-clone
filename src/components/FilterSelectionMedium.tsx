import searchIcon from "@/assets/search-icon.svg";
import { useThemeStore } from "@/state/ThemeStore";
import "@/styles.css";

type Props = {};

export function FilterSelectionMedium({}: Props) {

  const {theme} = useThemeStore();

  return (
    <div className="relative flex p-2 px-4 text-sm leading-4 border rounded-full w-72 shadow-m hover:bg-stone-100 hover:cursor-pointer border-stone-400 whitespace-nowrap">
      <img
        src={searchIcon}
        alt="search-icon"
        className="mr-3 search-icon-black"
        width={15}
      />
      <div className="flex flex-col leading-4">
        <h1 className="font-semibold">Where is it going to be?</h1>
        <h1 className={`${theme.textSecondary}`}>Wherever • Add Quests • Whenever</h1>
      </div>
    </div>
  );
}
