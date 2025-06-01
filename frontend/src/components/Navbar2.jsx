import React, { useState, useRef } from "react";
import ieeeiaslogo from "../assets/images/ieeeiaslogo.png";
import { NavLink } from "react-router-dom";
import { ImMenu3 } from "react-icons/im";
import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa";
import iemlogo from "../assets/images/iemlogo.png";

function Navbar2() {
  const [active, setactive] = useState(false);

  const navRef = useRef();

  const handlefocus = () => {
    navRef.current.style.transform = active ? "scaleY(1)" : "scaleY(-1)";
    setactive(!active);
  };
  const handleClick = (e) => {
    handlefocus();
  };
  return (
    <nav
      id="nav2"
      className="sticky top-0 bg-white  Navbar z-[2] shadow-[0px_2px_6px_0px_rgba(0,0,0,.2)]"
    >
      <img src={ieeeiaslogo} className="w-[7rem] h-[3.3rem] lg:h-[3.5rem] my-2" />
      <div
        id="desktopversion"
        className="sm:flex items-center text-center px-2  hidden md:gap-[1.5rem] lg:text-[1rem] md:text-[0.7rem] lg:gap-[2rem] font-bold text-green-800 "
      >
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "linkanimate" : "")}
        >
          HOME
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? "linkanimate" : "")}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/Events"
          className={({ isActive }) => (isActive ? "linkanimate" : "")}
        >
          EVENT SCHEDULES
        </NavLink>
        <NavLink
          to="/Memberinfo"
          className={({ isActive }) => (isActive ? "linkanimate" : "")}
        >
          CWC MEMBERS
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) => (isActive ? "linkanimate" : "")}
        >
          CONTACT
        </NavLink>
      </div>
      <img src={iemlogo} className="hidden sm:block  h-[3.3rem]  lg:h-[3.5rem] my-2" />
      <button
        ref={navRef}
        onClick={handlefocus}
        className={clsx(
          "sm:hidden active:text-green-700 active:scale-x-[0.9] scale-y-[-1]  transition-all duration-300 linear"
        )}
      >
        <ImMenu3 size={45} />
      </button>
      <div
        className={clsx(
          "sm:hidden absolute top-[4.3rem] right-0  w-3/5 bg-green-950 h-[calc(100vh-4.5rem)] flex flex-col items-end box-border py-5 text-white text-[1.1rem] font-bold   transition-transform ease-in-out duration-400",
          active ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="w-full ">
          <NavLink
            to="/"
            onClick={handleClick}
            className={({ isActive }) =>
              isActive ? "linkanimate2 navlinkmobile" : "navlinkmobile"
            }
          >
            <FaArrowRight size={10} className="mr-2" />
            HOME
          </NavLink>
          <NavLink
            to="/About"
            onClick={handleClick}
            className={({ isActive }) =>
              isActive ? "linkanimate2 navlinkmobile" : "navlinkmobile"
            }
          >
            <FaArrowRight size={10} className="mr-2" />
            ABOUT
          </NavLink>
          <NavLink
            onClick={handleClick}
            to="/Events"
            className={({ isActive }) =>
              isActive ? "linkanimate2 navlinkmobile" : "navlinkmobile"
            }
          >
            <FaArrowRight size={10} className="mr-2" />
            EVENT SCHEDULES
          </NavLink>
          <NavLink
            onClick={handleClick}
            to="/Memberinfo"
            className={({ isActive }) =>
              isActive ? "linkanimate2 navlinkmobile" : "navlinkmobile"
            }
          >
            <FaArrowRight size={10} className="mr-2" />
            CWC MEMBERS
          </NavLink>
          <NavLink
            onClick={handleClick}
            to="/Contact"
            className={({ isActive }) =>
              isActive ? "linkanimate2 navlinkmobile" : "navlinkmobile"
            }
          >
            <FaArrowRight size={10} className="mr-2" />
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
