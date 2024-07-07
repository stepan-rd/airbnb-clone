import { useHouseTypeSelect } from "@/state/HouseTypeSelectStore";

type Props = {
  house: { name: string; imgSrc: string };
  index: number;
  isHovered: boolean;
  isActive: boolean;
};

export function HouseType({ house, isHovered, isActive, index }: Props) {
  const { setHoveredIndex, setActiveIndex } = useHouseTypeSelect();

  return (
    <div
      className={`flex flex-col items-center justify-center mr-5 text-sm border border-b-2 border-transparent  hover:cursor-pointer pb-1 whitespace-nowrap ${isActive ? "border-b-black" : "hover:border-b-stone-300"} `}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => setActiveIndex(index)}
    >
      <img
        src={house.imgSrc}
        className={`w-6 h-6 filter-stone-500 transition-all ${isHovered && "filter-none"} ${isActive && "filter-none"}`}
        width={24}
      />

      <h1
        className={` hover:text-black transition-all ${isActive ? "text-black" : "text-stone-500"}
    `}
      >
        {house.name}
      </h1>
    </div>
  );
}
