import iPhone_1 from "../../Assets/iPhone 5.png";
import iPhone_2 from "../../Assets/iPhone 6.png";
import iPhone_3 from "../../Assets/iPhone 4.png";
import bellIcon from "../../Assets/bell-icon.png";
import customisableIcon from "../../Assets/customisable-icon.png";
import { useState } from "react";

const features = [
  {
    title: "budgeting intervals",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
  {
    title: "budgeting intervals",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
  {
    title: "budgeting intervals",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
];

const advantages = [
  {
    title: "Clever Notifications",
    description:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
  },
  {
    title: "Fully Customizable",
    description:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
  },
];

const Lightbox = ({ src, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <img className="max-h-full max-w-full" src={src} alt="Enlarged" />
    </div>
  );
};

export const Features = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");

  const openLightbox = (src) => {
    setLightboxSrc(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxSrc("");
  };

  return (
    <div
      id="Features"
      className="mt-12 px-4 mb-20 md:mb-auto sm:px-6 md:px-8 lg:px-12 xl:px-28"
    >
      <div className="grid grid-cols-1 justify-center sm:grid-cols-2 gap-x-8 sm:items-start">
        <div className="flex justify-center items-center">
          <img
            className="h-auto ml-20 sm:h-[42rem] max-w-full"
            src={iPhone_1}
            onClick={() => openLightbox(iPhone_1)}
          />
        </div>
        <div className="sm:mt-0 leading-tight">
          <div>
            <div>
              <p className="text-rose-500 text-center md:text-left text-md font-medium font-['Clash Display'] uppercase leading-7 tracking-widest">
                features
              </p>
              <p className="text-black text-center sm:text-left mb-4 text-5xl font-bold font-['Clash Display'] capitalize leading-10">
                uifry premium
              </p>
            </div>
            <div>
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="flex items-center mb-4">
                    <p className="text-black w-full sm:w-auto text-center sm:text-left text-md font-semibold font-['Clash Display'] capitalize leading-7">
                      {feature.title}
                    </p>
                  </div>
                  <p className="opacity-50 text-center sm:text-left text-black text-md font-medium font-['Clash Display'] capitalize leading-7">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start mt-20">
        <div className="grid gap-4 leading-tight">
          <p className="text-rose-500 text-center md:text-left text-md font-medium font-['Clash Display'] uppercase leading-7 tracking-widest">
            Advantages
          </p>
          <p className="text-black text-center md:text-left text-5xl font-bold font-['Clash Display'] capitalize leading-12">
            Why Choose Uifry?
          </p>
          <div>
            <p className="text-black text-center md:text-left flex text-md justify-center md:justify-start font-semibold font-['Clash Display'] capitalize leading-8">
              <img
                className="bg-red-500 rounded-full p-1 mr-2 w-8 h-8"
                src={bellIcon}
                alt="Bell Icon"
              />
              Clever Notifications
            </p>
            <p className="opacity-50 text-center sm:text-left mt-4 text-black text-md font-medium font-['Clash Display'] capitalize leading-7">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="h-auto ml-20 sm:h-[42rem] max-w-full"
            src={iPhone_2}
            onClick={() => openLightbox(iPhone_2)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20">
        <div className="flex justify-center items-center">
          <img
            className="h-auto ml-20 sm:h-[42rem] max-w-full"
            src={iPhone_3}
            onClick={() => openLightbox(iPhone_3)}
          />
        </div>
        <div className="flex items-center leading-tight">
          <div>
            <p className="text-black mb-4 text-center sm:text-left justify-center md:justify-start flex text-md font-semibold font-['Clash Display'] capitalize leading-7">
              <img
                className="bg-red-500 rounded-full p-1 mr-2 w-8 h-8"
                src={customisableIcon}
                alt="Star Icon"
              />
              Fully customisable
            </p>
            <div className="opacity-50 text-black text-center sm:text-left text-md font-medium font-['Clash Display'] capitalize leading-7">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </div>
          </div>
        </div>
      </div>
      {lightboxOpen && <Lightbox src={lightboxSrc} onClose={closeLightbox} />}
    </div>
  );
};
