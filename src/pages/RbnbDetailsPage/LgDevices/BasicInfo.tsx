import { useHomePage } from "@/state/HomePageStore";
import { useParams } from "react-router-dom";
import { PictureGridLgDisplay } from "./PictureGridLgDisplay";

type Props = {};

export function BasicInfo({}: Props) {
  const { allRbnbs } = useHomePage();

  const { rbnbId } = useParams();

  return (
    <>
      <h1 className="my-4 text-2xl font-semibold">
        *Rbnb name*
      </h1>
      <PictureGridLgDisplay />
      <h1 className="mt-6 mb-2 text-xl font-semibold">
        *Type of rbnb, location etc.* Lorem Ipsum
      </h1>
      <h1>*X of hosts* · *X of bedrooms* · *X of beds* · *X of bathrooms*</h1>
    </>
  );
}
