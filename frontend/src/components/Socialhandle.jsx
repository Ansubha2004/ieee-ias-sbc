import React from "react";
import Button from "./Button.jsx";
import Socialmedia from "./socialmedia.jsx"
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


function Socialhandle() {


  const socialMedia = [
    { comp: FaInstagram, href: "https://www.instagram.com/ieeeias_iemsb/" },
    { comp: FaFacebook, href: "https://www.facebook.com/profile.php?id=61574869886468" },
    {
      comp: FaLinkedin,
      href: "https://www.linkedin.com/company/ieee-ias-iem/posts/?feedView=all",
    },
    {
      comp: SiGmail,
      href: "mailto:ieeeias.iem@gmail.com",
    }
  ];


  return (
    <div className="w-full  bg-gradient-to-br from-zinc-900 to-lime-900 px-[5%]   py-7  flex justify-between items-center ">
      <p className="text-white sm:text-[1rem] text-left lg:text-[1.3rem] text-[0.8rem] font-bold">
        Follow IEM's IEEE IAS Students <br className="sm:hidden" /> Branch Chapter on Social Media
      </p>
      <div
          className="flex justify-center items-center  gap-2 sm:gap-5"
        >
          {socialMedia.map((Icon, index) => (
            <Socialmedia
              key={index}
              Component={Icon.comp}
              href={Icon.href}
            />
          ))}
        </div>
    </div>
  );
}

export default Socialhandle;
