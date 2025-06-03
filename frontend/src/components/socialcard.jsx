import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



function socialcard({mail,linkedin}) {
  return (
    <div className="absolute -bottom-2 sm:bottom-12 lg:bottom-1 w-auto sm:scale-[0.8] scale-[0.7]  flex gap-5 px-3 py-2 box-border text-green-900 bg-white/30 backdrop-blur-sm rounded-[10px] border-solid border-[3px] border-green-950  ">
      <a href={`mailto:${mail}`} className="iconanimate">
        <SiGmail size={40} />
      </a>
      <a href={linkedin} className="iconanimate">
        <FaLinkedin size={40} />
      </a>
    </div>
  );
}

export default socialcard;
