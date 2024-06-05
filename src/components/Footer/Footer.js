import Logo from "../../Assets/Logo.png";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

export const Footer = () => {
  const links = ["Home", "About Us", "Bookings", "Blogs"];
  const legal = ["Terms of Use", "Privacy Policy", "Cookie Policy"];
  const products = ["Take Tour", "Live Chat", "Reviews"];
  return (
    <div className="flex flex-col border-t gap-y-4 mt-4 sm:mt-auto ml-3 sm:ml-auto md:mx-16 items-center justify-center md:justify-start">
      <div className="flex flex-col mt-4 sm:mt-auto md:flex-row gap-x-8 w-full justify-center md:justify-between md:my-16 text-center md:text-left">
        <div className="flex flex-col mb-4 gap-1 sm:gap-2 items-center md:items-start">
          <img src={Logo} alt="Logo" className="w-20" />
          <div className="flex items-center">
            <MdEmail className="mr-2" />
            <a
              className="hover:text-blue-400 hover:underline underline-offset-4"
              href="mailto:help@Frybix.com"
            >
              help@Frybix.com
            </a>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <a
              className="hover:text-blue-400 hover:underline underline-offset-4"
              href="tel:+12345678900"
            >
              +1 234 5678900
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 mb-8 sm:mb-auto items-center md:items-start">
          <p className="text-xl md:text-2xl font-normal">Links</p>
          {links.map((link, index) => (
            <a
              key={index}
              className="text-sm hover:text-blue-400 hover:underline cursor-pointer font-medium"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 mb-8 sm:mb-auto items-center md:items-start">
          <p className="text-xl md:text-2xl font-normal">Legal</p>
          {legal.map((legal, index) => (
            <a
              key={index}
              className="text-sm hover:text-blue-400 hover:underline cursor-pointer font-medium"
            >
              {legal}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 mb-8 sm:mb-auto items-center md:items-start">
          <p className="text-xl md:text-2xl font-normal">Product</p>
          {products.map((product, index) => (
            <a
              key={index}
              className="text-sm hover:text-blue-400 hover:underline cursor-pointer font-medium"
            >
              {product}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 mb-8 sm:mb-auto items-center md:items-start">
          <p className="text-xl md:text-2xl font-normal">Newsletter</p>
          <p className="text-sm md:text-base my-2 font-medium">
            Stay up to date
          </p>
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-4">
            <input
              placeholder="Email"
              className="w-full md:w-3/5 px-2 border border-red-500 text-sm rounded"
            />
            <button className="bg-black hover:shadow-lg hover:bg-gray-700 active:bg-black active:shadow-inner text-white text-base md:text-lg font-medium font-ClashDisplay capitalize leading-7 py-2 px-4 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border border-gray-800 w-11/12 md:w-full"></div>
      <div className="my-4 capitalize">
        Copyright 2024 Uifry.com. All rights reserved
      </div>
    </div>
  );
};
