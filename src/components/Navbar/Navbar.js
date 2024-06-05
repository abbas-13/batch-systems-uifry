import Logo from "../../Assets/Logo.png";

const NavbarLink = ({ name }) => {
  return (
    <a
      href={`#${name}`}
      className="text-black text-md font-medium text-shadow-custom font-ClashDisplay active:test-rose-500 hover:text-rose-500 hover:cursor-pointer capitalize"
    >
      {name}
    </a>
  );
};

export const Navbar = () => {
  return (
    <div className="w-full p-4">
      <div className="container pt-4 mx-auto px-4 lg:px-12 xl:px-32">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex flex-col md:flex-row items-center md:gap-6 mb-4 md:mb-0">
            <img className="w-28 h-9 mb-4 md:mb-0" src={Logo} alt="Logo" />
            <div className="flex gap-5">
              {["Home", "About Us", "Pricing", "Features"].map((item) => (
                <NavbarLink name={item} />
              ))}
            </div>
          </div>
          <button className="bg-black text-white text-lg font-medium font-ClashDisplay capitalize leading-7 py-2 px-4 rounded hover:shadow-lg active:shadow-inner">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};
