import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputerMouse, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import CV from "../../assets/files/cv.pdf";

const Introduction = ({ reference, handleScroll }) => {
  return (
    <section ref={reference} id="introduction" className="relative bg-jet min-h-half-screen lg:min-h-screen w-full px-8 lg:px-9 py-4 lg:py-14 flex flex-col justify-center snap-center">
      <div className="absolute top-4 lg:top-14 rounded-full w-fit border border-hunyadi-yellow py-1 px-4">
        <p className="text-hunyadi-yellow text-xs lg:text-base">INTRODUCE</p>
      </div>
      <div className="">
        <p className="font-display text-2xl sm:text-4xl lg:text-6xl xl:text-7xl text-hunyadi-yellow font-bold text-left lg:mb-2">I'm Aldo Cahyadi</p>
        <p className="font-display text-2xl sm:text-4xl lg:text-6xl xl:text-7xl text-platinum font-medium text-left">Software Engineer</p>
        <p className="font-display text-xs sm:text-base lg:text-xl xl:text-2xl text-platinum text-left mt-4 lg:mt-8 mb-8 lg:mb-4 lg:mt-12">
          I'm a passionate full-stack developer. Here, you'll find a showcase of my projects, demonstrating my proficiency in both front-end and back-end development. Explore my work below and feel free to get in touch.
        </p>
      </div> 
      <div className="flex gap-2">
        <button onClick={() => handleScroll("contact")} className="bg-hunyadi-yellow drop-shadow-xl font-bold text-center border-2 border-hunyadi-yellow text-lg text-jet py-2 w-3/4 sm:w-2/4 lg:w-[25%] rounded-full hover:bg-jet hover:text-hunyadi-yellow hover:border-2 hover:border-hunyadi-yellow font-medium">
          Hire Me
        </button>
        <a href={CV} target="_blank" rel="noreferrer" className="bg-jet drop-shadow-xl font-bold text-center text-lg border-2 border-hunyadi-yellow  text-hunyadi-yellow py-2 w-3/4 sm:w-2/4 lg:w-[25%] rounded-full hover:bg-hunyadi-yellow hover:text-jet hover:border-2 hover:border-hunyadi-yellow font-medium">
          Download CV
        </a>
      </div>
      <div className="absolute bottom-0 left-1/2  size-[10%]  lg:flex flex-col i items-center animate-bounce hidden">
        <FontAwesomeIcon icon={faComputerMouse} className="text-hunyadi-yellow size-6" />
        <FontAwesomeIcon icon={faChevronDown} className="text-hunyadi-yellow size-4" />
      </div>
    </section>
  );
};

export default Introduction;
