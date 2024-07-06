import searchIcon from "@/assets/search-icon.svg";

type Props = {};

export function FilterSelection({}: Props) {


  return (
    <div className="relative flex text-sm leading-4 border rounded-full shadow-md border-stone-400 whitespace-nowrap">
      <div className="py-2 pl-5 pr-20 rounded-l-full hover:bg-stone-100 hover:cursor-pointer">
        <h1 className="font-semibold">Where</h1>
        <h1 className="text-stone-500">Search Destinations</h1>
      </div>
      <div className="py-2 pl-5 pr-20 border-l border-stone-400 hover:bg-stone-100 hover:cursor-pointer">
        <h1 className="font-semibold">Rooms</h1>
        <h1 className="text-stone-500">Search by room count</h1>
      </div>
      <div className="py-2 pl-5 pr-20 border-l rounded-r-full border-x-stone-400 hover:bg-stone-100 hover:cursor-pointer">
        <h1 className="font-semibold">Who</h1>
        <h1 className="text-stone-500">Add Quests</h1>
      </div>
      <div
        className="absolute flex items-center justify-center w-8 h-8 transition-all rounded-full right-2 top-2 hover:cursor-pointer hover:-translate-y-px hover:shadow-md active:translate-y-px"
        style={{ background: "rgb(232, 25, 72)" }}
      >
        <img src={searchIcon} className="search-icon-white" width={15} />
      </div>
    </div>
  );
}
