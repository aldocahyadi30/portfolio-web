import TechProject from "../TechProject";
import { project } from "../Data";
const Project = ({openModal}) => {
  return (
    <section id="project" className="bg-raisin-black lg:bg-jet min-h-screen flex flex-col w-full px-8 lg:px-20 xl:px-24 pt-16 lg:pt-24 xl:pt-24 lg:pb-8 xl:pb-16 snap-center">
      <div className="rounded-full w-fit border border-hunyadi-yellow py-1 px-4">
        <p className="text-hunyadi-yellow text-sm lg:text-base">PROJECT</p>
      </div>
      <p className="font-display text-2xl lg:text-4xl xl:text-5xl text-left text-hunyadi-yellow font-bold my-4 lg:my-8 xl:my-12">
        FEATURED <span className="text-platinum">PROJECT</span>
      </p>
      <div className="h-full w-full grid gap-8 lg:gap-2 xl:gap-4 grid-cols-1 lg:grid-cols-2">
        {project
          .filter((item) => item.featured)
          .map((item) => {
            return (
              <div key={item.id} onClick={() => openModal(item.id)} className=" relative bg-onyx w-full h-full rounded-xl flex items-center justify-center p-4 hover:cursor-pointer hover:scale-105 hover:drop-shadow-lg duration-200">
                <img src={item.cover} alt={item.name} className="rounded-xl drop-shadow-lg"/>
                <div className="absolute bottom-2 left-1 flex flex-row">
                  {item.tech.map((tech) => {
                    return <TechProject tech={tech} />;
                  })}
                </div>
              </div>
            );
          })}
        <div className="relative bg-onyx w-full h-full rounded-xl hidden lg:flex items-center justify-center p-4 hover:cursor-pointer hover:scale-105 hover:drop-shadow-lg duration-200">
          <p className="font-display text-platinum font-medium lg:text-lg xl:text-xl">More Project</p>
        </div>
      </div>
      <a
        href="#"
        className="self-center block lg:hidden my-4 bg-hunyadi-yellow drop-shadow-xl font-bold text-center border-2 border-hunyadi-yellow  lg:text-base text-jet py-2 w-2/4 lg:w-1/4 rounded-full hover:bg-jet hover:text-hunyadi-yellow hover:border-2 hover:border-hunyadi-yellow font-medium lg:my-0 lg:mt-4 xl:mt-8"
      >
        More Project
      </a>
    </section>
  );
};

export default Project;
