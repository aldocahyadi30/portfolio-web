import React from "react";

const TechProject = ({ tech, isModal = false }) => {
  const url = `https://skillicons.dev/icons?i=${tech}`;
  var color = null;
  var name = null
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
      <div id="tech-square" className={`${isModal ? 'size-8' : 'size-5'}`}>
        <img src={url} alt="tech" className="rounded-full"></img>
      </div>
      <p className={`${isModal ? 'text-sm' : 'text-xs'} text-white font-medium mx-1`}>{name}</p>
    </div>
  );
};

export default TechProject;
