import rbnbSvg from "@/assets/airbnb.svg";
import rbnbSvgSmall from "@/assets/airbnb-small.svg";
import { FilterSelection } from "./FilterSelection";
import { useNavigate } from "react-router-dom";
import { FilterSelectionMedium } from "./FilterSelectionMedium";

type Props = {};

export function Header({}: Props) {
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed z-10 flex w-full p-4 bg-white border-b shadow-sm border-b- stone-200">
        <div
          className="flex items-center flex-shrink-0 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img className="hidden mr-2 sm:block" src={rbnbSvg} width={118} />
          <img className="block mr-2 sm:hidden" src={rbnbSvgSmall} width={34} />
        </div>
        <div className="justify-center flex-grow hidden md:flex">
          <FilterSelection />
        </div>
        <div className="flex justify-center flex-grow md:hidden">
          <FilterSelectionMedium />
        </div>
      </div>
      <hr />
    </>
  );
}
