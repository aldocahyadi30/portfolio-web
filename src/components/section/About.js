import TechSquare from "../TechSquare";

const About = () => {
  return (
    <section id="about" className="bg-raisin-black lg:bg-jet min-h-half-screen lg:min-h-screen w-full px-8 lg:px-20 xl:px-24 pt-8 lg:py-24 xl:py-24 snap-center">
      <div className="rounded-full w-fit border border-hunyadi-yellow py-1 px-4">
        <p className="text-hunyadi-yellow text-sm lg:text-base">ABOUT</p>
      </div>
      <p className="font-display text-2xl lg:text-4xl xl:text-5xl text-left text-hunyadi-yellow font-bold my-4 lg:my-8 xl:my-12">
        ABOUT <span className="text-platinum">ME</span>
      </p>
      <p className="font-display text-2xs lg:text-base xl:text-lg text-left text-platinum mb-4 lg:mb-8 xl:mb-12 ">
        My name is Aldo Octavio, a fresh graduate and versatile Software Engineer skilled in React and Laravel for web development, and Flutter for creating seamless cross-platform mobile applications. During my one-year internship at PT. Avia Avian Tbk, I gained hands-on experience developing
        internal websites with Laravel, collaborating with senior developers, engaging in client discussions, and presenting project demos, which further honed both my technical and soft skills.
      </p>
      <div className="h-fit w-full border border-hunyadi-yellow rounded-2xl flex flex-row items-center">
        <div className="grid gap-1 lg:gap-3 xl:gap-4 grid-cols-3 p-2 lg:p-3 xl:p-4 justify-items-center basis-5/12">
          <TechSquare tech="html" />
          <TechSquare tech="css" />
          <TechSquare tech="js" />
          <TechSquare tech="php" />
          <TechSquare tech="python" />
          <TechSquare tech="dart" />
        </div>
        <div className="w-px bg-platinum h-12 lg:h-24 xl:h-28"></div>
        

        <div className="grid gap-1 lg:gap-3 xl:gap-4 grid-cols-1 p-2 lg:p-3 xl:p-4 justify-items-center basis-2/12">
          <TechSquare tech="firebase" />
          <TechSquare tech="supabase" />
        </div>
        <div className="w-px bg-platinum h-12 lg:h-24 xl:h-28"></div>

        <div className="grid gap-1 lg:gap-3 xl:gap-4 grid-cols-3 p-2 lg:p-3 xl:p-4 justify-items-center basis-5/12">
          <TechSquare tech="bootstrap" />
          <TechSquare tech="tailwind" />
          <TechSquare tech="laravel" />
          <TechSquare tech="react" />
          <TechSquare tech="flutter" />
        </div>
      </div>
    </section>
  );
};

export default About;
