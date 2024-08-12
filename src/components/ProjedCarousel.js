import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ProjedCarousel = ({imgArr}) => {
  const [index, setIndex] = useState(0);


  const handlePreviewClick = (previewIndex) => {
    setIndex(previewIndex);
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % imgArr.length);
  };

  const handlePrevClick = () => {
    setIndex((prevIndex) => (prevIndex - 1 + imgArr.length) % imgArr.length);
  };

  const getPreviewImages = () => {
    const prevIndex = (index - 1 + imgArr.length) % imgArr.length;
    const nextIndex = (index + 1) % imgArr.length;
    return [prevIndex, index, nextIndex];
  };

  const previewImages = getPreviewImages();
  return (
    <div className="project__carousel h-full w-full flex flex-col">
      <div className="basis-4/6 flex items-center justify-center p-8">
        <img src={imgArr[index]} alt="main" />
      </div>
      <div className="basis-2/6 flex flex-row">
        <div className="basis-1/12 flex items-center justify-center" onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} className="text-platinum size-8 cursor-pointer hover:text-sunset hover:scale-110 active:text-platinum" />
        </div>
        <div className="basis-10/12 flex flex-row items-center justify-between gap-4">
          {previewImages.map((imgIndex) => (
            <img
              key={imgIndex}
              src={imgArr[imgIndex]}
              alt={`Preview ${imgIndex}`}
              className={`lg:w-36 xl:w-48 h-auto cursor-pointer ring-platinum hover:scale-110 hover:drop-shadow-lg duration-300 ${imgIndex === index ? "scale-110 drop-shadow-lg ring" : "ring-1"}`}
              onClick={() => handlePreviewClick(imgIndex)}
            />
          ))}
        </div>
        <div className="basis-1/12 flex items-center justify-center" onClick={handleNextClick}>
          <FontAwesomeIcon icon={faChevronRight} className="text-platinum size-8 cursor-pointer hover:text-sunset hover:scale-110 active:text-platinum" />
        </div>
      </div>
    </div>
  );
};

export default ProjedCarousel;
