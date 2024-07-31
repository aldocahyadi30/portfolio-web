import { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import About from "./components/section/About";
import Contact from "./components/section/Contact";
import Introduction from "./components/section/Introduction";
import Timeline from "./components/section/Timeline";
import Project from "./components/section/Project";
import ProfilePicture from "./components/ProfilePicture";
import SocialButton from "./components/SocialButton";
import ProjectModal from "./components/ProjectModal";
import CV from "./assets/files/cv.pdf";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedProjectModal, setSelectedProjectModal] = useState(0);

  useEffect(() => {
    const content = document.getElementById("content");
    if (isModalVisible) {
      content.classList.add("no-scroll");
    } else {
      content.classList.remove("no-scroll");
    }
  }, [isModalVisible]);

  function openProjectModal() {
    setIsModalVisible(true);
    setSelectedProjectModal(0);
  }

  function openProjectDetailModal(id) {
    setIsModalVisible(true);
    setSelectedProject(id);
    setSelectedProjectModal(1);
  }

  function closeModal() {
    setIsModalVisible(false);
    setSelectedProject(0);
  }

  function handleScroll() {
    if (window.innerWidth < 1024) {
      window.location.href = "mailto:aldocahyadi28@gmail.com";
    } else {
      const content = document.getElementById("content");

      content.scrollTo({
        top: content.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="App">
      <div id="mainContent" className="relative h-full lg:h-screen w-screen bg-raisin-black flex flex-col lg:flex-row lg:pl-8">
        <div className=" h-screen w-full justify-center lg:basis-1/4 lg:border-x border-x-hunyadi-yellow flex flex-col items-center justify-center px-6">
          <ProfilePicture />
          <p className="font-display text-2xl text-hunyadi-yellow font-bold mt-4">Aldo Octavio</p>
          <p className="font-display text-base text-platinum">Software Developer</p>
          <div className="flex flex-row justify-evenly w-full sm:md:w-2/4 my-6 px-8 lg:px-0">
            <SocialButton social="linkedin" />
            <SocialButton social="github" />
            <SocialButton social="instagram" />
            <SocialButton social="facebook" />
          </div>
          <button onClick={() => handleScroll()} className="bg-hunyadi-yellow drop-shadow-xl font-bold text-center border-2 border-hunyadi-yellow text-lg text-jet py-2 w-3/4 sm:w-2/4 lg:w-full rounded-full hover:bg-jet hover:text-hunyadi-yellow hover:border-2 hover:border-hunyadi-yellow font-medium mb-2">
            Hire Me
          </button>
          <a href={CV} target="_blank" rel="noreferrer" className="bg-jet drop-shadow-xl font-bold text-center text-lg border-2 border-hunyadi-yellow  text-hunyadi-yellow py-2 w-3/4 sm:w-2/4 lg:w-full rounded-full hover:bg-hunyadi-yellow hover:text-jet hover:border-2 hover:border-hunyadi-yellow font-medium">
            Download CV
          </a>
        </div>
        <div id="content" className="lg:basis-3/4 flex flex-col h-screen w-full lg:overflow-y-auto lg:snap-y lg:snap-mandatory">
          <Introduction />
          <About />
          <Timeline />
          <Project openProjectModal={openProjectModal} openProjectDetailModal={openProjectDetailModal} />
          <Contact />
        </div>
        {/* <ProjectModal /> */}
        {isModalVisible && <ProjectModal closeModal={closeModal} selectedID={selectedProject} type={selectedProjectModal} />}
        <SpeedInsights />
      </div>
    </div>
  );
}

export default App;
