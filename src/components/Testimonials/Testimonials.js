import TestDPs from "../../Assets/Group dps.png";
import Testimonial from "../../Assets/testimonial.png";

export const Testimonials = () => {
  return (
    <div>
      <div className="flex flex-col ml-4 sm:ml-auto items-center justify-center">
        <p className="text-center text-black text-lg font-medium font-['Clash Display'] uppercase tracking-widest">
          Testimonial
        </p>
        <p className="text-center text-black text-4xl md:text-5xl font-bold font-['Clash Display'] capitalize">
          What our users <br /> say about us?
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-start mt-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-32 gap-4 sm:gap-8">
        <div className="w-full flex justify-center sm:w-[32.5rem]">
          <img
            className="w-4/5 ml-6 sm:ml-auto md:w-4/5 lg:w-full h-auto"
            src={Testimonial}
            alt="Testimonial"
          />
        </div>
        <div className="flex items-center h-auto ml-4 sm:ml-auto sm:h-5/6 leading-tight">
          <div className="space-y-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-4">
                <div className="text-black flex text-xl sm:text-3xl font-semibold font-['Clash Display'] capitalize leading-7">
                  The Best financial accounting app ever!
                </div>
              </div>
              <p className="opacity-50 text-black text-md mt-2 sm:mt-8 font-medium font-['Clash Display'] capitalize leading-7">
                "Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam."
              </p>
              <img
                className="w-24 text-center sm:text-left sm:w-48 mt-2 sm:mt-8 h-auto"
                src={TestDPs}
                alt="Testimonial Author"
              />
            </div>
            <p className="text-black text-center sm:text-left text-md font-semibold capitalize">
              - Nick Jonas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
