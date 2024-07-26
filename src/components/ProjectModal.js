import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjedCarousel from "./ProjedCarousel";
import { project } from "./Data";
import TechProject from "./TechProject";

const ProjectModal = ({ closeModal, selectedID }) => {
  const data = project.filter((item) => item.id === selectedID)[0];
  var githubButton = null;
  if (data.github === "" && data.github2 === "") {
    githubButton = (
      <p className="text-center text-sunset font-medium">*Source Code Not Available*</p>
    );
  } else {
    if (data.github2 === "") {
      githubButton = (
        <a href={data.github} className="self-center block my-4 bg-[#2b3137] hover:bg-[#24292e] hover:drop-shadow-xl text-center text-[#fafbfc] py-2 w-2/4 rounded-full font-medium">
          <FontAwesomeIcon icon={faGithub} /> Source Code
        </a>
      );
    } else {
      githubButton = (
        <div className="flex flex-row">
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

  return (
    <div id="project-modal" className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-10/12  drop-shadow-xl rounded-2xl ">
      <div className=" size-full flex flex-row">
        <div className="basis-8/12 w-full h-full bg-eerie-black rounded-l-2xl">
          <ProjedCarousel imgArr={data.img} />
        </div>
        <div className="basis-4/12 flex flex-col justify-between w-full h-full bg-onyx rounded-r-2xl xl:p-4">
          <FontAwesomeIcon onClick={() => closeModal()} icon={faClose} className="self-end xl:size-8 text-platinum ring ring-platinum rounded-full hover:cursor-pointer" />
          <div className="basis-2/12 flex items-center">
            <p className="text-3xl text-left text-hunyadi-yellow font-bold">{data.name}</p>
          </div>
          <div className="basis-10/12">
            <p className="text-base text-left text-platinum font-medium mb-4">{data.desc}</p>
            <div>{githubButton}</div>
          </div>
          <div className="flex flex-row h-fit">
            {data.tech.map((tech) => {
              return <TechProject tech={tech} isModal={true} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
