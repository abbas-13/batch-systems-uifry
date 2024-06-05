const Box = ({ number }) => {
  const isOdd = number % 2 !== 0;
  const textColorClass = isOdd ? "text-white" : "text-black";
  const bgColor = isOdd ? "bg-red-500" : "";
  const classes = `mb-4 ml-4 p-4 rounded-lg ${bgColor}`;

  return (
    <div className={classes}>
      <div className="flex items-center mb-4">
        <p
          className={`flex text-xl sm:text-3xl font-semibold font-['Clash Display'] capitalize leading-7 ${textColorClass}`}
        >
          The Best financial accounting app ever!
        </p>
      </div>
      <p
        className={`opacity-50 text-sm sm:text-md mt-2 sm:mt-4 font-medium font-['Clash Display'] capitalize leading-7 ${textColorClass}`}
      >
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris etiam odio."
      </p>
    </div>
  );
};

export const FAQs = () => {
  const repeatFAQs = [
    {
      title: "The Best Financial Accounting App Ever!",
      description:
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
  ];

  return (
    <>
      <div className="flex flex-col mt-20 items-center">
        <p className="text-rose-500 text-md font-medium font-['Clash Display'] uppercase leading-7 tracking-widest">
          FAQ
        </p>
        <p className="text-center text-black text-3xl md:text-5xl font-bold font-['Clash Display'] capitalize">
          Frequently Asked <br /> Questions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start mt-12 px-4 md:px-6 lg:px-32">
        {[1, 2, 3, 4, 5, 6].map((number) => (
          <Box key={number} number={number} />
        ))}
      </div>
    </>
  );
};
