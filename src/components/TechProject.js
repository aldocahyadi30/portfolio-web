import React from "react";

const TechProject = ({ tech, size ='sm' }) => {
  const url = `https://skillicons.dev/icons?i=${tech}`;
  var color = null;
  var name = null
  var iconSize = null;
  var textSize = null;

  switch (size) {
    case "s":
      iconSize = "lg:size-3 xl:size-4";
      textSize = "lg:text-3xs xl:text-2xs";
      break;
    case "m":
      iconSize = "size-5 lg:size-4 xl:size-5";
      textSize = "text-xs lg:text-2xs xl:text-xs";
      break;
    case "l":
      iconSize = "lg:size-6 xl:size-8";
      textSize = "lg:text-xs xl:text-sm";
      break;
    default:
      iconSize = "lg:size-4 xl:size-5";
      textSize = "lg:text-2xs xl:text-xs";
      break;
  }

  switch (tech) {
    case "supabase":
      color = "bg-[#3ecf8e]";
      name = "Supabase";
      break;
    case "bootstrap":
      color = "bg-[#7952b3]";
        name = "Bootstrap";
      break;
    case "tailwind":
      color = "bg-[#06b6d4]";
      name = "Tailwind CSS";
      break;
    case "laravel":
      color = "bg-[#f33a2f]";
      name = "Laravel";
      break;
    case "react":
      color = "bg-[#61dafb]";
      name = "React JS";
      break;
    case "vue":
      color = "bg-[#41b883]";
        name = "Vue JS";
      break;
    case "flutter":
      color = "bg-[#02569b]";
        name = "Flutter";
      break;
    case "mysql":
      color = "bg-[#00758f]";
      name = "MySql";
      break;
    default:
      color = "bg-platinum";
      name = "";
      break;
  }
  return (
    <div className={`tech-project flex flex-row items-center justify-center ${color} rounded-full mr-1`}>
      <div id="tech-square" className={`${iconSize}`}>
        <img src={url} alt="tech" className="rounded-full"></img>
      </div>
      <p className={`${textSize} text-white font-medium mx-1`}>{name}</p>
    </div>
  );
};

export default TechProject;
