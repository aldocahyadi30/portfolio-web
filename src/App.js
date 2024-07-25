import { useState, useEffect } from "react";
import About from "./components/section/About";
import Contact from "./components/section/Contact";
import Introduction from "./components/section/Introduction";
import Timeline from "./components/section/Timeline";
import Project from "./components/section/Project";
import ProfilePicture from "./components/ProfilePicture";
import SocialButton from "./components/SocialButton";
import ProjectModal from "./components/ProjectModal";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);

  useEffect(() => {
    const content = document.getElementById("content");
    if (isModalVisible) {
      content.classList.add("no-scroll");
    } else {
      content.classList.remove("no-scroll");
    }
  }, [isModalVisible]);

  function openModal(id) {
    setIsModalVisible(true);
    setSelectedProject(id);
  }

  function closeModal() {
    setIsModalVisible(false);
    setSelectedProject(0);
  }
  return (
    <div id="mainContent" className="App">
      <div className="relative h-full lg:h-screen w-screen bg-raisin-black flex flex-col lg:flex-row lg:pl-8">
        <div className="h-screen w-full justify-center lg:basis-1/4  lg:border-x border-x-hunyadi-yellow flex flex-col items-center justify-center px-6">
          <ProfilePicture />
          <p className="font-display text-2xl text-hunyadi-yellow font-bold mt-4">Aldo Octavio</p>
          <p className="font-display text-base text-platinum">Software Developer</p>
          <div className="flex flex-row justify-evenly w-full my-6 px-8 lg:px-0">
            <SocialButton social="linkedin" />
            <SocialButton social="github" />
            <SocialButton social="instagram" />
            <SocialButton social="facebook" />
          </div>
          <a href="#" className="bg-hunyadi-yellow drop-shadow-xl font-bold text-center border-2 border-hunyadi-yellow text-lg text-jet py-2 w-full rounded-full hover:bg-jet hover:text-hunyadi-yellow hover:border-2 hover:border-hunyadi-yellow font-medium mb-2">
            Hire Me
          </a>
          <a href="#" className="bg-jet drop-shadow-xl font-bold text-center text-lg border-2 border-hunyadi-yellow  text-hunyadi-yellow py-2 w-full rounded-full hover:bg-hunyadi-yellow hover:text-jet hover:border-2 hover:border-hunyadi-yellow font-medium">
            Download CV
          </a>
        </div>
        <div id="content" className="lg:basis-3/4 flex flex-col h-screen w-full lg:overflow-y-auto lg:snap-y lg:snap-mandatory">
          <Introduction />
          <About />
          <Timeline />
          <Project openModal={openModal} />
          <Contact />
        </div>
        {isModalVisible && <ProjectModal closeModal={closeModal} selectedID={selectedProject} />}
      </div>
    </div>
  );
}

export default App;
