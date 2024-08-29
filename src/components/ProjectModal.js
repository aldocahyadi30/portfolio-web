import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faArrowLeft, faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjedCarousel from "./ProjedCarousel";
import { project } from "./Data";
import TechProject from "./TechProject";

const ProjectModal = ({ closeModal, selectedID = 0, type = 0 }) => {
  const [projectIndex, setProjectIndex] = useState(0);
  var data = null;
  var buttons = null;
  function selectProject(id) {
    setProjectIndex(id);
  }

  function back() {
    setProjectIndex(0);
  }
  
  if (projectIndex !== 0 || selectedID !== 0) {
    const index = projectIndex !== 0 ? projectIndex : selectedID;
    data = project.filter((item) => item.id === index)[0];
    if (data.github === "" && data.github2 === "" && data.demo === "") {
      buttons = <p className="text-center text-hunyadi-yellow font-medium">*Source Code Not Available*</p>;
    } else {
      if (data.github2 === "") {
        buttons = (
          <div className="flex flex-row gap-2">
            {data.github !== "" ? (
              <a href={data.github} className="self-center block my-4 bg-[#2b3137] hover:bg-[#24292e] hover:drop-shadow-xl text-center text-[#fafbfc] py-2 w-2/4 rounded-full font-medium">
                <FontAwesomeIcon icon={faGithub} /> Source Code
              </a>
            ) : null}

            {data.demo !== "" ? (
              <a href={data.demo}  className="self-center block my-4 bg-[#2b3137] hover:bg-[#24292e] hover:drop-shadow-xl text-center text-[#fafbfc] py-2 w-2/4 rounded-full font-medium">
                <FontAwesomeIcon icon={faLink} /> Demo{" "}
              </a>
            ) : null}
          </div>
        );
      } else {
        buttons = (
          <div className="flex flex-row gap-2">
            <a href={data.github} className="self-center block my-4 bg-[#2b3137] hover:bg-[#24292e] hover:drop-shadow-xl text-center text-[#fafbfc] py-2 w-2/4 rounded-full font-medium">
              <FontAwesomeIcon icon={faGithub} /> Source Code 1
            </a>
            <a href={data.github} className="self-center block my-4 bg-[#2b3137] hover:bg-[#24292e] hover:drop-shadow-xl text-center text-[#fafbfc] py-2 w-2/4 rounded-full font-medium">
              <FontAwesomeIcon icon={faGithub} /> Source Code 2
            </a>
          </div>
        );
      }
    }

    
  }
  return (
    <div id="project-modal" className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black/75">
      <div className=" size-10/12  drop-shadow-xl rounded-2xl">
        {projectIndex === 0 && selectedID === 0 ? (
          <div className="size-full flex flex-col">
            <div className="basis-1/12 flex flex-row w-full h-full justify-between items-center bg-onyx rounded-t-2xl lg:p-2 xl:p-4">
              <p className="font-display text-hunyadi-yellow font-bold lg:text-lg xl:text-xl">All Project</p>
              <FontAwesomeIcon onClick={() => closeModal()} icon={faClose} className=" lg:size-4 xl:size-6 text-platinum ring ring-platinum rounded-full hover:cursor-pointer" />
            </div>
            <div className="basis-11/12 w-full h-full bg-eerie-black rounded-b-2xl">
              <div className="size-full grid gap-4 grid-cols-4 p-4">
                {project.map((item) => {
                  return (
                    <div key={item.id} onClick={() => selectProject(item.id)} className="relative bg-onyx w-full rounded-xl flex items-center justify-center p-2 hover:cursor-pointer hover:scale-105 hover:drop-shadow-lg duration-200">
                      <img src={item.cover} alt={item.name} className="drop-shadow-lg" />
                      <div className="absolute bottom-2 left-1 flex flex-row">
                        {item.tech.map((tech) => {
                          return <TechProject tech={tech} size="s" />;
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="size-full flex flex-col">
            <div className="basis-1/12 flex flex-row w-full h-full justify-between items-center bg-onyx rounded-t-2xl lg:p-2 xl:p-4">
              <p className="font-display text-hunyadi-yellow font-bold lg:text-lg xl:text-xll">Project Detail</p>
              <FontAwesomeIcon onClick={() => (selectedID !== 0 ? closeModal() : back())} icon={selectedID !== 0 ? faClose : faArrowLeft} className="lg:size-4 xl:size-6 text-platinum ring ring-platinum rounded-full hover:cursor-pointer" />
            </div>
            <div className="basis-11/12 w-full h-full flex flex-row bg-eerie-black rounded-b-2xl">
              <div className="basis-8/12 w-full h-full rounded-l-2xl">
                <ProjedCarousel imgArr={data.img} />
              </div>
              <div className="basis-4/12 flex flex-col justify-between w-full h-full rounded-r-2xl p-4">
                <div className="basis-2/12 flex items-center">
                  <p className="lg:text-2xl xl:text-3xl text-left text-hunyadi-yellow font-bold">{data.name}</p>
                </div>
                <div className="basis-10/12">
                  <p className="lg:text-xs xl:text-base text-left text-platinum font-medium mb-4">{data.desc}</p>
                  <div>
                    {buttons}
                  </div>
                </div>
                <div className="flex flex-row h-fit">
                  {data.tech.map((tech) => {
                    return <TechProject tech={tech} size="l" />;
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
