import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


function cwccard({ image, name, role, description,mail,linkedin }) {
  return (
    <div className="w-full relative sm:w-3/7 lg:w-2/7 bg-gradient-to-l flex flex-col items-center from-lime-100 via-white to-lime-100 h-auto box-border p-8 rounded-[7px]">
      <div className="w-[60%] overflow-hidden rounded-[50%] aspect-square flex justify-center border-solid border-[5px] border-lime-800 items-center ">
        <img src={image} alt="" />
      </div>
      
      <p className="mt-[5%] text-[2rem] sm:text-[1.3rem] font-bold">{name}</p>
      <p className="text-lime-800 font-[500] text-[1.3rem] sm:text-[0.8rem]">{role}</p>
      
      <p className="paratext text-center mt-3 sm:text-[0.7rem]">{description}</p>
      <div className="flex my-3 gap-3 ">
        <a href={`mailto:${mail}`} className="iconanimate rounded-l-full rounded-r-full border-solid border-lime-700 text-lime-700  border-[2px] p-2"><SiGmail /></a>
        <a href={linkedin} className="iconanimate rounded-l-full rounded-r-full border-solid border-lime-700 text-lime-700 border-[2px] p-2"><FaLinkedin/></a>
      </div>
    </div>
  );
}

export default cwccard;
