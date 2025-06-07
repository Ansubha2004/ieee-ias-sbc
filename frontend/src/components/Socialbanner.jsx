import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ieeeiaslogo from "../assets/images/ieeeiaslogo.png";
import { FaLocationDot } from "react-icons/fa6";
import clsx from "clsx"


function Socialbanner({additionalcss}) {
  return (
    <div className={clsx("min-w-full sm:min-w-[20%] h-auto border-dashed border-[2px] box-border p-8 sm:p-5 border-lime-800 flex flex-col gap-3",additionalcss)}>
      <p className="text-center font-bold text-[2.5rem] sm:text-[1.2rem] text-transparent bg-clip-text bg-gradient-to-r from-lime-700 via-lime-500 to-lime-700">
        Reach Out to us
      </p>
      <div className="flex justify-center gap-3 sm:gap-0 sm:justify-evenly">
        <a
          href="https://www.linkedin.com/company/ieee-ias-iem/posts/?feedView=all"
          className="iconanimate icon"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://www.instagram.com/ieeeias_iemsb/"
          className="iconanimate icon"
        >
          <FaInstagram size={25} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61574869886468"
          className="iconanimate icon"
        >
          <FaFacebook size={25} />
        </a>
      </div>

      <img src={ieeeiaslogo} className="object-contain h-[90px] sm:h-[55px] my-7 sm:my-2" />

      <div className="w-full flex flex-col gap-2">
        <a href="mailto:ieeeias.iem@gmail.com" className="flex items-center gap-2">
          {" "}
          <span className="iconanimate icon1">
            <SiGmail size={17} />
          </span>
          <p className="paratext text-[1.3rem] sm:text-[0.7rem]">ieeeias.iem@gmail.com</p>
        </a>
        <a href="https://www.google.com/maps/place/IEM+Kolkata/@22.5726925,88.4347986,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027514cd20d659:0x4b66eefc1cb3ed78!8m2!3d22.5726925!4d88.4373735!16s%2Fg%2F11fcv9lb9h?entry=ttu&g_ep=EgoyMDI1MDYwMS4wIKXMDSoASAFQAw%3D%3D" className="flex items-center gap-2">
          {" "}
          <span className="iconanimate icon1">
            <FaLocationDot size={17} />
          </span>
          <p className="paratext text-left text-[1.3rem] sm:text-[0.7rem]">IEM, Salt Lake, Kolkata</p>
        </a>
      </div>
    </div>
  );
}

export default Socialbanner;
