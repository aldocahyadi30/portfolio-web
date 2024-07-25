import React from "react";
import TimelineItem from "../TimelineItem";
import Avian from "../../assets/images/avian.png";
import TJ from "../../assets/images/tj.png";
import PCU from "../../assets/images/ukp.png";

const Timeline = () => {
  return (
    <section id="timeline" className="bg-jet lg:bg-raisin-black h-screen lg:min-h-screen w-full flex flex-col px-8 lg:px-20 xl:px-24 pt-16 lg:pt-24 xl:pt-24 lg:pb-8 xl:pb-16 snap-center">
      <div className="rounded-full w-fit border border-hunyadi-yellow py-1 px-4">
        <p className="text-hunyadi-yellow text-sm lg:text-base">TIMELINE</p>
      </div>
      <p className="font-display text-2xl lg:text-4xl xl:text-5xl text-left text-hunyadi-yellow font-bold my-4 lg:my-8 xl:my-12">
        EDUCATION & <span className="text-platinum">EXPERIENCE</span>
      </p>
      <div className="w-full h-full flex flex-col pl-2">
        <TimelineItem img={TJ} name="Taruna Jaya" detail="Senior Highschool" position="Social Science Major" date="2017-2020" type={1} orientation={1}/>
        <TimelineItem img={PCU} name="Universitas Kristen Petra" detail="Bachelor Degree" position="Computer Science" date="2020-2024" type={1} orientation={2}/>
        <TimelineItem img={Avian} name="PT. Avia Avian Tbk" detail="Internship" position="Software Engineer" date="2023-2024" type={2} orientation={1}/>
      </div>
    </section>
  );
};

export default Timeline;
