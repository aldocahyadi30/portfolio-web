import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const TimelineItem = ({ img, name, detail, position, date, type }) => {
  var icon = null;
  if (type === 1) {
    icon = faGraduationCap;
  } else {
    icon = faBriefcase;
  }

  

  return (
    <div className="timeline w-full flex flex-row h-full justify-center">
      {/* Desktop View */}
      <div className="size-full hidden lg:flex flex-col justify-center">
        <div className="basis-3/5 relative flex flex-col bg-raisin-black w-[95%] self-center rounded-3xl items-center lg:py-4 hover:scale-105 duration-200">
          <img src={img} alt={name} className="w-[30%] mb-2"></img>
          <p className="font-display text-hunyadi-yellow lg:text-2xl font-bold text-center h-[20%]">{name}</p>
          <p className="font-display text-platinum lg:text-xl font-medium">{detail}</p>
          <p className="font-display text-platinum lg:text-xl font-light">{position}</p>

          <div className="absolute bg-xanthous rounded-2xl py-1 px-4 drop-shadow-lg bottom-4">
            <p className="font-display text-raisin-black lg:text-sm font-bold">{date}</p>
          </div>
        </div>
        <div className="relative basis-1/4 flex items-center justify-center">
          <hr className="w-full bg-hunyadi-yellow border-hunyadi-yellow h-1"></hr>
          <div className="absolute bg-jet size-8 border-4 border-hunyadi-yellow rounded-full  flex items-center justify-center">
            <FontAwesomeIcon icon={icon} className="text-platinum" />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="basis-1/6 flex justify-center relative h-full lg:hidden">
        <div className="w-1 bg-hunyadi-yellow h-full"></div>
        <div className="absolute bg-jet size-8 border-4 border-hunyadi-yellow rounded-full bottom-2/4 flex items-center justify-center">
          <FontAwesomeIcon icon={icon} className="text-platinum" />
        </div>
      </div>
      <div className="basis-5/6 py-2 lg:hidden flex items-center">
        <div className="h-4/6 w-full bg-onyx rounded-2xl drop-shadow-lg flex flex-col p-2">
          <div className="w-full flex flex-row justify-between">
            <div>
              <p className="font-display text-sunset text-sm sm:text-2xl font-bold">{name}</p>
              <p className="font-display text-platinum text-sm sm:text-xl font-medium">{detail}</p>
              <p className="font-display text-platinum text-sm sm:text-xl font-normal">{position}</p>
            </div>
            <div className="size-14 sm:size-24 bg-platinum rounded-2xl drop-shadow-lg flex items-center justify-center p-2">
              <img src={img} alt={name} className="size-auto"></img>
            </div>
          </div>
          <hr className="border-platinum w-full mt-auto" />
          <p className="font-display text-onyx text-xs  font-medium mt-auto bg-sunset w-fit py-0.5 px-1 rounded-xl self-center">{date}</p>
        </div>
      </div>
    </div>
  );
};

TimelineItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
};

export default TimelineItem;
