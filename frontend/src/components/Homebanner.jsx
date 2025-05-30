import React, { useState, useEffect } from "react";
import homebackground from "../assets/images/homebackground.png";
import ieeeiaslogo from "../assets/images/ieeeiaslogo.png";
import iemlogo from "../assets/images/iemlogo.png";
import ieeelogo2 from "../assets/images/ieeelogo2.png";
import Button from "../components/Button.jsx";
import clsx from "clsx"

function Homebanner() {
  const quotes = [
    "IEEE is the world's largest technical professional organization dedicated to advancing technology",
    "At IEEE IAS SBC, we don’t just learn technology, we apply it for a better tomorrow",
    "Join IEEE IAS SBC to connect, innovate, and lead the future of industrial applications",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000); // Change quote every 3 seconds
  }, [quotes.length]);
  return (
    <div
      id="banner"
      className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] object-cover  overflow-hidden flex justify-center items-center"
    >
      <img
        src={homebackground}
        className="absolute h-full w-full z-[0] object-cover "
      />
      <div className="relative oswald-text z-[1]  w-[80%] rounded-[15px] sm:w-[80%] md:w-[70%] h-auto max-h-[90%]  bg-white/50 shadow-[0px_0px_10px_10px_rgba(255,255,255,.5)] flex flex-col justify-around items-center box-border px-[3%] py-[3%]">
        <div className=" whitespace-nowrap bg-gradient-to-r from-lime-900 via-lime-700 to-green-900 text-transparent bg-clip-text text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] lg:text-[2.5rem] text-center  font-bold">
          <p className=" text-[0.9rem] text-black">Welcome to IEEE</p>
          Industrial Application Society{" "}
          <p className=" text-[0.7rem] text-zinc-700">
            Student's Branch Chapter | EE & EEE | IEM, Kolkata
          </p>
        </div>
        <div
          id="logo"
          className="w-full flex justify-center gap-[1rem] my-2 items-center scale-[0.8]"
        >
          <img src={ieeeiaslogo} className="h-[2.8rem]" />
          <img src={iemlogo} className="h-[3.2rem]" />
        </div>
        <p className=" text-center text-green-950 w-[80%] text-[0.7rem]  sm:text-[0.9rem] my-4 sm:my-6 italiana-regular  ">
          {quotes[currentIndex]}
        </p>
        <Button
          themecss="btn1 px-[10%]"
          click={() => {
            const section = document.getElementById("view");
            if (section) {
              section.scrollIntoView({ behavior: "smooth", block:"start" });
            }
          }}
          className={clsx("Navlink ")}
          Content="Explore"
        />
      </div>
    </div>
  );
}

export default Homebanner;
