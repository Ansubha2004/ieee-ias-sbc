import React, { useState, useRef, useEffect } from "react";
import images from "../utils/homegallery";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

function Homegallery() {

    const [index,setIndex]=useState(0);

    const scrollleft=()=>{
        setIndex((prev)=>{
            return (prev-1+images.length)%images.length;
        })
    }

    const scrollright=()=>{
        setIndex((prev)=>{
            return (prev+1)%images.length;
        })
    }

  return (
    <div className="full flex md:flex-row flex-col justify-around items-center ">
      <FiArrowLeftCircle onClick={scrollleft} size={70} className="arrowbutton md:block hidden" />
      <div className="w-full relative  p-[10px] sm:p-[30px] sm:w-[80%] mt-[30px] bg-gradient-to-l from-lime-800 via-slate-50 to-lime-800  rounded-[20px] aspect-[16/11]  ">
        <div className="h-full  min-w-full whitespace-nowrap overflow-hidden flex rounded-[10px] gap-5 bg-transparent">
          <img
            id={index}
            src={images[index]}
            className="h-full min-w-full"
            alt=""
          />
        </div>
      </div>
      <FiArrowRightCircle onClick={scrollright} size={70} className="arrowbutton md:block hidden" />
      <div className="md:hidden  flex justify-center gap-[5%] mt-[15px] w-full">
        <FiArrowLeftCircle onClick={scrollleft} size={30} className="arrowbutton " />
        <FiArrowRightCircle onClick={scrollright} size={30} className="arrowbutton " />
      </div>
    </div>
  );
}

export default Homegallery;
