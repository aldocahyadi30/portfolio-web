import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputerMouse, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Introduction = () => {
  return (
    <section id="introduction" className="relative bg-jet lg:bg-raisin-black min-h-half-screen lg:min-h-screen w-full px-8 lg:px-20 xl:px-24 py-8 lg:py-24 xl:py-24 flex flex-col justify-between snap-center">
      <div className="rounded-full w-fit border border-hunyadi-yellow py-1 px-4">
        <p className="text-hunyadi-yellow text-sm lg:text-base">INTRODUCE</p>
      </div>
      <div className="">
        <p className="font-displa-y text-3xl lg:text-6xl xl:text-7xl text-xanthous font-bold text-left lg:mb-2">I'm Aldo Cahyadi</p>
        <p className="font-display text-3xl lg:text-6xl xl:text-7xl text-platinum font-medium text-left">Software Engineer</p>
        <p className="font-display text-sm lg:text-xl xl:text-2xl text-platinum text-left mt-8 mb-8 lg:mb-0 lg:mt-12">I'm a passionate full-stack developer. Here, you'll find a showcase of my projects, demonstrating my proficiency in both front-end and back-end development. Explore my work below and feel free to get in touch.</p>
      </div>
      <div className="lg:flex flex-col inset-0 items-center animate-bounce hidden">
        <FontAwesomeIcon icon={faComputerMouse} className="text-hunyadi-yellow size-6"/>
        <FontAwesomeIcon icon={faChevronDown} className="text-hunyadi-yellow size-4"/>
      </div>
    </section>
  );
};

export default Introduction;
