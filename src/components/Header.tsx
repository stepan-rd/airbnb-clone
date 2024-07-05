import rbnbSvg from "@/assets/airbnb.svg";
import rbnbSvgSmall from "@/assets/airbnb-small.svg"
import { SearchBar } from "./SearchBar";
import { HouseTypes } from "./HouseTypes";

type Props = {};

export function Header({}: Props) {
  return (
    <>
      <div className="flex p-4">
        <img className="hidden sm:block" src={rbnbSvg} width={118} />
        <img className="block sm:hidden" src={rbnbSvgSmall} width={34} />
        <SearchBar />
      </div>
      <hr />
      <div>
        <HouseTypes />
      </div>
      <hr />
    </>
  );
}
