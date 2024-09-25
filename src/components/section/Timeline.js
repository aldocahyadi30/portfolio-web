import React from "react";
import TimelineItem from "../TimelineItem";
import Avian from "../../assets/images/avian.png";
import TJ from "../../assets/images/tj.png";
import PCU from "../../assets/images/ukp.png";

const Timeline = ({ reference }) => {
  return (
    <section ref={reference} id="timeline" className="relative bg-jet min-h-screen w-full flex flex-col px-8 lg:px-9 py-8 lg:py-14 snap-center flex flex-col justify-center">
      <div className="absolute top-14 rounded-full w-fit border border-hunyadi-yellow py-1 px-4">
        <p className="text-hunyadi-yellow text-xs lg:text-base">TIMELINE</p>
      </div>
      <p className="font-d isplay text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-left text-hunyadi-yellow font-bold my-4 lg:my-8 xl:my-12">
        EDUCATION & <span className="text-platinum">EXPERIENCE</span>
      </p>
      <div className="w-full h-[75%] lg:h-full flex flex-col lg:flex-row">
        <TimelineItem img={TJ} name="Taruna Jaya" detail="Senior Highschool" position="Social Science Major" date="2017-2020" type={1} />
        <TimelineItem img={PCU} name="Universitas Kristen Petra" detail="Bachelor Degree" position="Computer Science" date="2020-2024" type={1} />
        <TimelineItem img={Avian} name="PT. Avia Avian Tbk" detail="Internship" position="Software Engineer" date="2023-2024" type={2} />
        <TimelineItem img={Avian} name="PT. Avia Avian Tbk" detail="Staff" position="Software Engineer" date="2024-Present" type={2} />
      </div>
    </section>
  );
};

export default Timeline;
