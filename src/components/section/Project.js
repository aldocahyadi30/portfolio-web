import {  toast } from "react-toastify";
import TechProject from "../TechProject";
import { project } from "../Data";
const Project = ({ openProjectModal, openProjectDetailModal }) => {

  function handleClick(id) {
    if (window.innerWidth < 1024) {
      toast.info("Please open this website on a desktop to view the project detail and other projects!");
    } else {
      openProjectDetailModal(id);
    }
  }
  return (
    <section id="project" className="bg-raisin-black lg:bg-jet min-h-screen flex flex-col w-full px-8 lg:px-20 xl:px-24 pt-8 lg:pt-24 xl:pt-24 pb-4 lg:pb-8 xl:pb-16 snap-center">
      <div className="rounded-full w-fit border border-hunyadi-yellow py-1 px-4">
        <p className="text-hunyadi-yellow text-sm lg:text-base">PROJECT</p>
      </div>
      <p className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-left text-hunyadi-yellow font-bold my-4 lg:my-8 xl:my-12">
        FEATURED <span className="text-platinum">PROJECT</span>
      </p>
      <div className="h-full w-full grid gap-2 lg:gap-2 xl:gap-4 grid-cols-1 lg:grid-cols-2 justify-items-center">
        {project
          .filter((item) => item.featured)
          .map((item) => {
            return (
              <div key={item.id} onClick={() => handleClick(item.id)} className="relative bg-onyx w-full h-full sm:max-md:w-3/4 rounded-xl flex items-center justify-center p-4 hover:cursor-pointer hover:scale-105 hover:drop-shadow-lg duration-200">
                <img src={item.cover} alt={item.name} className="rounded-xl drop-shadow-lg h-full w-full" />
                <div className="absolute bottom-2 left-1 flex flex-row">
                  {item.tech.map((tech) => {
                    return <TechProject tech={tech} size="m" />;
                  })}
                </div>
              </div>
            );
          })}
        <div onClick={() => openProjectModal()} className="relative bg-onyx w-full h-full rounded-xl hidden lg:flex items-center justify-center p-4 hover:cursor-pointer hover:scale-105 hover:drop-shadow-lg duration-200">
          <p className="font-display text-platinum font-medium lg:text-lg xl:text-xl">View All Projects</p>
        </div>
      </div>
    </section>
  );
};

export default Project;
