import { IoPlayCircleOutline } from "react-icons/io5";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

import styles from "./cover.module.css";

import iPhone_1 from "../../Assets/iPhone 1.png";
import iPhone_2 from "../../Assets/iPhone 2.png";
import adv1 from "../../Assets/adv1.png";

export const Cover = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 mt-12 md:mt-24 lg:ml-36">
      <div className="flex ml-8 md:ml-12 flex-col gap-4 md:gap-8">
        <p className="text-black text-2xl md:text-6xl font-semibold capitalize leading-none">
          Make the best financial decisions
        </p>
        <p className="text-black text-sm md:text-md pr-4 md:pr-24 capitalize leading-relaxed">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="flex gap-4 md:gap-8">
          <button className="bg-black text-white flex items-center justify-center text-base md:text-lg font-medium font-ClashDisplay hover:shadow-lg hover:bg-gray-700 active:bg-black active:shadow-inner capitalize leading-7 p-3 md:p-4 sm:rounded-lg rounded">
            Get Started <LiaLongArrowAltRightSolid className="ml-2" />
          </button>
          <div className="flex items-center hover:cursor-pointer group justify-center p-3 md:p-4">
            <IoPlayCircleOutline className="text-2xl md:text-3xl group-active:text-black group-hover:text-gray-500" />
            <a className="text-base md:text-lg group-hover:text-gray-500 group-hover:text-shadow-custom group-active:text-black font-medium pl-2">
              Watch video
            </a>
          </div>
        </div>
      </div>
      <div className={styles["image-container"]}>
        <img src={iPhone_1} />
        <img src={iPhone_2} />
        <img src={iPhone_1} />
      </div>
      <div>
        <img className="max-w-full h-auto mt-8 md:mt-0" src={adv1} />
      </div>
    </div>
  );
};
