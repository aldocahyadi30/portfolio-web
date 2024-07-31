const TechSquare = ({tech = ''}) => {
  const url = `https://skillicons.dev/icons?i=${tech}`;
  return <div id="tech-square" className="size-4 sm:size-7 lg:size-9 xl:size-10 hover:scale-125 duration-200">
    <img src={url} alt="tech"></img>
  </div>;
};

export default TechSquare;
