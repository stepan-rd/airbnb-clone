import rbnbSvg from "@/assets/airbnb.svg";
import rbnbSvgSmall from "@/assets/airbnb-small.svg";
import { FilterSelection } from "./FilterSelection";
import { HouseTypes } from "./HouseTypes";
import { useNavigate } from "react-router-dom";
import { FilterSelectionMedium } from "./FilterSelectionMedium";

type Props = {};

export function Header({}: Props) {

  const navigate = useNavigate();

  return (
    <>
      <div className="flex p-4">
        <div className="flex items-center flex-shrink-0 hover:cursor-pointer" onClick={() => navigate("/")}>
          <img className="hidden mr-2 sm:block" src={rbnbSvg} width={118} />
          <img className="block sm:hidden" src={rbnbSvgSmall} width={34} />
        </div>
        <div className="justify-center flex-grow hidden md:flex">
          <FilterSelection />
        </div>        
        <div className="flex justify-center flex-grow md:hidden">
          <FilterSelectionMedium />
        </div>
      </div>
      <hr />
      <div>
        <HouseTypes />
      </div>
    </>
  );
}
