import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import ProjedCarousel from "./ProjedCarousel";
import { project } from "./Data";

const ProjectModal = ({ closeModal, selectedID }) => {
  const data = project.filter((item) => item.id === selectedID)[0];
  console.log(data);
  return (
    <div id="project-modal" className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-10/12 bg-eerie-black drop-shadow-xl rounded-2xl ">
      <div className="relative size-full flex flex-row">
        <FontAwesomeIcon onClick={() => closeModal()} icon={faClose} className="absolute top-4 right-4 xl:size-8 text-hunyadi-yellow ring ring-hunyadi-yellow rounded-full hover:cursor-pointer" />

        <div className="basis-8/12 w-full h-full">
          <ProjedCarousel imgArr={data.img}/>
        </div>
        <div className="basis-4/12 w-full h-full"></div>
      </div>
    </div>
  );
};

export default ProjectModal;
