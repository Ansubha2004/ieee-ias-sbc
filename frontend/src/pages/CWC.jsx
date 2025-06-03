import React from "react";
import Sourav from "../assets/cwc/Sourav.jpeg";
import cwc from "../data/cwc.json";
import Socialcard from "../components/socialcard.jsx";
import Cwccard from "../components/cwccard.jsx";
import Sneha from "../assets/cwc/Sneha.jpeg";
import Avi from "../assets/cwc/Avi.jpeg";
import Asmit from "../assets/cwc/Asmit.jpeg";

function CWC() {
  const pp = [Sneha, Avi, Asmit];

  return (
    <div className="relative  min-h-[calc(100vh-90px)] flex flex-col items-center z-[1] box-border  px-[7%]">
      <br />
      <br />
      <div
        id="heading"
        className="w-full  sm:bg-gradient-to-r rounded-full from-lime-600 to-green-800 h-[10px] flex justify-center items-center"
      >
        <div className="bg-white ">
          <p className="heading sm:px-5 bg-gradient-to-r from-lime-600 to-green-800 text-transparent bg-clip-text  w-fit bg-white">
            IEEE IAS Members{" "}
          </p>
          <p className="subheading text-center sm:scale-[1] scale-[1.3]">
            Core Working Committee
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className=" w-full sm:w-[90%] h-auto sm:h-[60vh] lg:h-[65vh] rounded-[20px] p-1 bg-gradient-to-l  from-green-900 via-white to-green-900 flex items-center justify-center">
        <div className="w-full h-full rounded-[15px] p-5  gap-2 bg-gradient-to-br sm:bg-gradient-to-b from-lime-100 via-white to-lime-100 flex sm:flex-row flex-col-reverse justify-between box-border">
          {/* Left Section (can be populated later) */}
          <div className="w-full sm:w-[50%]  overflow-hidden h-full sm:text-left text-center flex flex-col justify-start ">
            <p className="heading text-[1.9rem] sm:mt-[24px] md:text-[2rem]  text-zinc-800">
              {cwc[0].name}
            </p>
            <p className="subheading  text-green-800">{cwc[0].role}</p>
            <br />
            <p className="paratext ">{cwc[0].description}</p>
            <br />
          </div>

          {/* Right Section (Profile) */}
          <div className=" w-full sm:w-auto h-[200px]  md:h-full flex flex-col justify-center relative items-center gap-4 overflow-hidden rounded-[10px]">
            {/* Circular Image Container */}
            <div className=" border-[5px] border-solid border-zinc-700 h-[90%] sm:h-[70%] lg:h-[90%] aspect-square rounded-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={Sourav}
                alt="Prof. Dr. Sourav Das"
                className="h-full w-auto scale-[1.7] -translate-x-4"
              />
            </div>

            <Socialcard
              mail={cwc[0].socialmedia[1].link}
              linkedin={cwc[0].socialmedia[0].link}
            />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div className="w-full  sm:bg-gradient-to-r rounded-full from-lime-600 to-green-800 h-[10px] flex justify-center items-center">
        <div className="bg-white ">
          <p className="heading sm:px-5 bg-gradient-to-r from-lime-600 to-green-800 text-transparent bg-clip-text  w-fit bg-white">
            CWC Students{" "}
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full flex sm:flex-row flex-col flex-wrap gap-5 justify-around">
        {cwc
          .filter((member) => member.id !== "1")
          .map((member) => (
            <Cwccard
              key={member.id}
              image={pp[member.id - 2]}
              name={member.name}
              role={member.role}
              description={member.description}
              linkedin={member.socialmedia[0].link}
              mail={member.socialmedia[1].link}
            />
          ))}
      </div>
      <br />
      <br />
      <p className="font-bold text-[0.7rem] bg-gradient-to-r from-green-800 via-lime-600 to-green-800 text-transparent bg-clip-text text-center sm:text-[1rem]">
        {" "}
        Together, the Core Working Committee of the IEEE IAS Student Branch
        Chapter at IEM Kolkata is committed to fostering innovation, leadership,
        and technical excellence—driving meaningful impact in the field of
        industrial applications.
      </p>

      <br />
      <br />
    </div>
  );
}

export default CWC;
