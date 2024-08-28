import { useState, useEffect, useRef } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ProfilePicture from "./components/ProfilePicture";
import ProjectModal from "./components/ProjectModal";
import About from "./components/section/About";
import Contact from "./components/section/Contact";
import Introduction from "./components/section/Introduction";
import Project from "./components/section/Project";
import Timeline from "./components/section/Timeline";
import SocialButton from "./components/SocialButton";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedProjectModal, setSelectedProjectModal] = useState(0);
  const [index, setIndex] = useState(0);
  const introductionRef = useRef(null);
  const aboutRef = useRef(null);
  const timelineRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

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

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.id) {
            case "introduction":
              setIndex(0);
              break;
            case "about":
              setIndex(1);
              break;
            case "timeline":
              setIndex(2);
              break;
            case "project":
              setIndex(3);
              break;
            case "contact":
              setIndex(4);
              break;
            default:
              break;
          }
        }
      });
    }, options);

    const sections = [introductionRef.current, aboutRef.current, timelineRef.current, projectRef.current, contactRef.current];

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  function handleScroll(id = "") {
    if (window.innerWidth < 1024) {
      window.location.href = "mailto:aldocahyadi28@gmail.com";
    } else {
      let index = 0;
      if (id === "introduction") {
        index = 0;
      } else if (id === "about") {
        index = 1;
      } else if (id === "timeline") {
        index = 2;
      } else if (id === "project") {
        index = 3;
      } else if (id === "contact") {
        index = 4;
      }

      setIndex(index);

      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <div className="App">
      <div id="mainContent" className="relative h-full lg:h-screen w-screen bg-raisin-black flex flex-col lg:flex-row ">
        <div className="relative h-screen w-full justify-center lg:w-[25%] bg-eerie-black flex flex-col items-center justify-center px-6">
          <ProfilePicture />
          <p className="font-display text-3xl text-hunyadi-yellow font-bold mt-4">Aldo Octavio</p>
          <p className="font-display text-base text-platinum">Software Developer</p>
          <div className="flex flex-row justify-evenly w-3/4  my-6 px-8 lg:px-0">
            <SocialButton social="linkedin" />
            <SocialButton social="github" />
            <SocialButton social="instagram" />
            <SocialButton social="facebook" />
          </div>
          <div className="hidden lg:flex absolute w-full bottom-0  justify-evenly py-2">
            <button onClick={() => handleScroll("introduction")} className={`px-2 font-display text-platinum hover:font-bold ${index === 0 ? "font-bold" : ""}`}>
              Home
            </button>
            <button onClick={() => handleScroll("about")} className={`px-2 font-display text-platinum hover:font-bold ${index === 1 ? "font-bold" : ""}`}>
              About
            </button>
            <button onClick={() => handleScroll("timeline")} className={`px-2 font-display text-platinum hover:font-bold ${index === 2 ? "font-bold" : ""}`}>
              Timeline
            </button>
            <button onClick={() => handleScroll("project")} className={`px-2 font-display text-platinum hover:font-bold ${index === 3 ? "font-bold" : ""}`}>
              Project
            </button>
            <button onClick={() => handleScroll("contact")} className={`px-2 font-display text-platinum hover:font-bold ${index === 4 ? "font-bold" : ""}`}>
              Contact
            </button>
          </div>
        </div>
        <div id="content" className="lg:basis-3/4 flex flex-col h-screen w-full lg:overflow-y-auto lg:snap-y lg:snap-mandatory">
          <Introduction reference={introductionRef} handleScroll={handleScroll} />
          <About reference={aboutRef} />
          <Timeline reference={timelineRef} />
          <Project reference={projectRef} openProjectModal={openProjectModal} openProjectDetailModal={openProjectDetailModal} />
          <Contact reference={contactRef} />
        </div>
        {isModalVisible && <ProjectModal closeModal={closeModal} selectedID={selectedProject} type={selectedProjectModal} />}
        <SpeedInsights />
      </div>
    </div>
  );
}

export default App;
