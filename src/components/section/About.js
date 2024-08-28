import TechAbout from "../TechAbout";
import { techs } from "../Data";

const About = ({ reference }) => {
  const tech1 = techs.slice(0, techs.length / 2);
  const tech2 = techs.slice(techs.length / 2, techs.length);
  return (
    <section ref={reference} id="about" className="relative bg-onyx min-h-half-screen lg:min-h-screen w-full px-8 lg:px-9 py-4 lg:py-14 snap-center flex flex-col justify-center">
      <div className="absolute top-4 lg:top-14 rounded-full w-fit border border-hunyadi-yellow py-1 px-4">
        <p className="text-hunyadi-yellow text-xs lg:text-base">ABOUT</p>
      </div>
      <p className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-left text-hunyadi-yellow font-bold my-4 lg:my-4">
        ABOUT <span className="text-platinum">ME</span>
      </p>
      <p className="font-display text-2xs sm:text-xs lg:text-base xl:text-lg text-left text-platinum mb-4 lg:my-4 ">
        My name is Aldo Octavio, a fresh graduate and versatile Software Engineer skilled in React and Laravel for web development, and Flutter for creating seamless cross-platform mobile applications. During my one-year internship at PT. Avia Avian Tbk, I gained hands-on experience developing
        internal websites with Laravel, collaborating with senior developers, engaging in client discussions, and presenting project demos, which further honed both my technical and soft skills.
      </p>
      <div className="flex w-full  gap-2 lg:gap-4 justify-center mt-4 mb-6">
        {tech1.map((tech) => {
          return <TechAbout tech={tech} />;
        })}
      </div>
      <div className="flex w-full gap-2 lg:gap-4  justify-center">
        {tech2.map((tech) => {
          return <TechAbout tech={tech} />;
        })}
      </div>
    </section>
  );
};

export default About;
