const TechAbout = ({ tech }) => {
  const url = `https://skillicons.dev/icons?i=${tech.key}`;
  return (
    <div className=" lg:bg-raisin-black lg:py-4 lg:px-1 flex flex-col gap-2 lg:gap-4  lg:w-1/12 items-center rounded-3xl hover:scale-110 duration-200">
      <div className="size-[24px] lg:size-[40px] ">
        <img src={url} alt="tech"></img>
      </div>
      <p className="hidden lg:block text-center text-platinum font-medium text-[5px] lg:text-[12px]">{tech.name}</p>
    </div>
  );
};

export default TechAbout;
