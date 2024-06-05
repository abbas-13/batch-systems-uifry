import { FaApple } from "react-icons/fa";

import CTA1 from "../../Assets/CTA1.png";

export const GetStarted = () => {
  return (
    <div className="w-full ml-3 sm:ml-auto flex justify-center">
      <div className="flex mt-20 bg-black relative rounded-md w-11/12 h-auto">
        <img src={CTA1} />
        <div className="flex justify-center items-center w-3/5 absolute h-full">
          <div className="flex flex-col gap-x-4 gap-1 sm:gap-4 ml-8 leading-tight">
            <div className="text-white text-xl sm:text-5xl font-bold font-['Clash Display'] capitalize leading-tight">
              ready to get started?
            </div>
            <div className="text-white text-xs sm:text-md font-light font-['Clash Display'] capitalize leading-tight">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio.
            </div>
            <button className="hover:shadow-lg active:shadow-inner hover:bg-gray-300 active:ring-4 active:ring-white active:bg-gray-400 bg-gray-200 flex text-black text-sm sm:text-lg w-fit items-center gap-1 sm:gap-2 font-medium capitalize leading-tight p-1 sm:p-4 rounded">
              download <FaApple className="text-md sm:text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
