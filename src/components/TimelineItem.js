import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const TimelineItem = ({ img, name, detail, position, date, type, orientation }) => {
  var icon = null;
  var leftElement = null;
  var rightElement = null;
  if (type === 1) {
    icon = faGraduationCap;
  } else {
    icon = faBriefcase;
  }

  if (orientation === 1) {
    leftElement = (
      <div className="h-full w-full bg-onyx rounded-2xl drop-shadow-lg flex flex-col lg:p-2">
        <p className="font-display text-hunyadi-yellow lg:text-base xl:text-lg font-bold">{name}</p>
        <p className="font-display text-platinum lg:text-sm font-medium">{detail}</p>
        <p className="font-display text-platinum lg:text-sm font-normal">{position}</p>
        <hr className="border-platinum w-full mt-auto" />
        <p className="font-display text-platinum lg:text-sm font-normal">{date}</p>
      </div>
    );
    rightElement = (
      <div className="h-full w-full bg-platinum rounded-2xl drop-shadow-lg flex items-center justify-center lg:p-2">
        <img src={img} alt={name} className="size-16 lg:size-24"></img>
      </div>
    );
  } else {
    leftElement = (
      <div className="h-full w-full bg-platinum rounded-2xl drop-shadow-lg flex items-center justify-center lg:p-2">
        <img src={img} alt={name} className="size-16 lg:size-24"></img>
      </div>
    );

    rightElement = (
      <div className="h-full w-full bg-onyx rounded-2xl drop-shadow-lg flex flex-col lg:p-2">
         <p className="font-display text-hunyadi-yellow lg:text-base xl:text-lg font-bold">{name}</p>
        <p className="font-display text-platinum lg:text-sm font-medium">{detail}</p>
        <p className="font-display text-platinum lg:text-sm font-normal">{position}</p>
        <hr className="border-platinum w-full mt-auto" />
        <p className="font-display text-platinum lg:text-sm font-normal">{date}</p>
      </div>
    );
  }

  return (
    <div className="timeline w-full flex flex-row h-full justify-center">
      {/* Desktop View */}
      <div className="hidden lg:flex basis-5/12 h-full w-full py-2">{leftElement}</div>
      <div className="hidden lg:flex basis-1/12 flex justify-center relative h-full">
        <div className="w-1 bg-hunyadi-yellow h-full"></div>
        <div className="absolute bg-jet size-8 border-4 border-hunyadi-yellow rounded-full bottom-2/4 flex items-center justify-center">
          <FontAwesomeIcon icon={icon} className="text-platinum" />
        </div>
      </div>
      <div className="hidden lg:flex basis-5/12 py-2">{rightElement}</div>

      {/* Mobile View */}
      <div className="basis-1/6 flex justify-center relative h-full lg:hidden">
        <div className="w-1 bg-hunyadi-yellow h-full"></div>
        <div className="absolute bg-jet size-8 border-4 border-hunyadi-yellow rounded-full bottom-2/4 flex items-center justify-center">
          <FontAwesomeIcon icon={icon} className="text-platinum" />
        </div>
      </div>
      <div className="basis-5/6 py-2 lg:hidden flex items-center">
        <div className="h-3/6 w-full bg-onyx rounded-2xl drop-shadow-lg flex flex-col p-4">
          <div className="w-full flex flex-row justify-between">
            <div>
              <p className="font-display text-hunyadi-yellow text-sm lg:text-base font-bold">{name}</p>
              <p className="font-display text-platinum text-sm font-medium">{detail}</p>
              <p className="font-display text-platinum text-sm font-normal">{position}</p>
            </div>
            <div className="size-14 bg-platinum rounded-2xl drop-shadow-lg flex items-center justify-center p-2">
              <img src={img} alt={name} className="size-auto"></img>
            </div>
          </div>
          <hr className="border-platinum w-full mt-auto" />
          <p className="font-display text-platinum text-sm font-normal">{date}</p>
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
  orientation: PropTypes.number.isRequired,
};

export default TimelineItem;
