import { PictureMdDisplay } from "./MdDevices/PictureMdDisplay";
import { PageLgDisplay } from "./LgDevices/PageLgDisplay";

type Props = {};

export default function RbnbDetailsPage({}: Props) {
  return (
    <>
      <div className="hidden w-screen md:block">
        <PageLgDisplay />
      </div>
      <div className="block md:hidden">
        <PictureMdDisplay />
      </div>
    </>
  );
}
