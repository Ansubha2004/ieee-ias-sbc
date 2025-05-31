import React from "react";
import images from "../utils/homegallery";

function Homegallery() {
  return (
    <>
      <div className="w-full  p-[10px] sm:p-[30px] sm:w-[80%] mt-[30px] bg-gradient-to-bl from-lime-800 via-slate-50 to-lime-800  rounded-[20px] aspect-[16/11]  overflow-hidden ">
        <div className="h-full min-w-full whitespace-nowrap overflow-x-auto flex rounded-[10px] gap-5 bg-transparent">
          {images.map((image, index) => (
            <img key={index} id={index} src={image} className="h-full min-w-full" alt="" />
          ))}
        </div>
      </div>
    </>
  );
}

export default Homegallery;
