import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import TechProject from "../TechProject";
import { project } from "../Data";
const Project = ({ reference, openProjectModal, openProjectDetailModal }) => {
  function handleClick(id) {
    if (window.innerWidth < 1024) {
      toast.info("Please open this website on a desktop to view the project detail and other projects!");
    } else {
      openProjectDetailModal(id);
    }
  }
  return (
    <section ref={reference} id="project" className=" relative bg-onyx min-h-screen flex flex-col w-full px-8 lg:px-9 py-4 lg:py-14 snap-center flex flex-col justify-center">
      <div className="absolute top-4 lg:top-14 rounded-full w-fit border border-hunyadi-yellow py-1 px-4">
        <p className="text-hunyadi-yellow text-xs lg:text-base">PROJECT</p>
      </div>
      <p className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-left text-hunyadi-yellow font-bold my-4 lg:my-8 xl:my-12">
        FEATURED <span className="text-platinum">PROJECT</span>
      </p>

      <div className="w-full p-4 lg:p-0 lg:w-[80%] h-[80%] grid gap-2 lg:gap-4 lg:grid-cols-2 self-center">
        {project
          .filter((item) => item.featured)
          .map((item) => {
            return (
              <div onClick={() => handleClick(item.id)} className="flex flex-col h-full w-full hover:scale-105 hover:cursor-pointer hover:cursor-pointer hover:shadow-xl duration-200">
                <div className="h-[85%] bg-jet p-3 rounded-t-xl">
                  <img src={item.cover} alt={item.name} className="w-full h-full object-fill drop-shadow-xl" />
                </div>
                <div className="h-[15%] bg-platinum rounded-b-xl px-2 py-1 flex justify-between items-center">
                  <p className="text-[14px] text-jet font-medium font-display">{item.name}</p>
                  <div className="flex w-[50%] justify-end">
                    {item.tech.map((tech) => {
                      return <TechProject tech={tech} size="m" />;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        <div onClick={() => openProjectModal()} className="hidden lg:flex flex-col h-full w-full hover:scale-105 hover:cursor-pointer hover:shadow-xl duration-200">
          <div className="h-[85%] bg-jet rounded-t-xl flex items-center justify-center">
            <FontAwesomeIcon icon={faEllipsis} className="text-platinum size-[40%]" />
          </div>
          <div className="h-[15%] bg-platinum rounded-b-xl px-2 flex items-center ">
            <p className="text-[14px] text-jet font-medium font-display">View All Projects</p>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </section>
  );
};

export default Project;
