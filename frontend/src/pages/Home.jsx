import React from "react";
import Homebanner from "../components/Homebanner.jsx";
import Button from "../components/Button.jsx";
import Banner1 from "../components/Banner1.jsx";
import { SiTicktick } from "react-icons/si";
import ieeeiaspic from "../assets/images/ieeeiaspic.png";
import Homeevents from "../components/Homeevents.jsx";
import Socialhandle from "../components/Socialhandle.jsx";
import Homegallery from "../components/Homegallery.jsx";

function Home() {
  const Points = [
    {
      head: "Global Exposure",
      body: "Connect with IEEE professionals, researchers, and students worldwide",
    },
    {
      head: "Skill Development",
      body: "Access workshops, coding contests, hackathons, and technical talks",
    },
    {
      head: "Academic & Research Support",
      body: " Publish papers, attend conferences, and engage in funded projects",
    },
    {
      head: "Leadership Opportunities",
      body: "Take up roles in event management, technical teams, and outreach",
    },
  ];

  return (
    <div className="relative  min-h-[calc(100vh-90px)] z-[1]">
      <Homebanner />
      <div
        id="view"
        className="w-full h-auto scroll-mt-[60px] sm:scroll-mt-[90px]"
      >
        <div className="w-full h-auto px-[5%] py-[20px] sm:py-[30px] flex sm:flex-row flex-col-reverse sm:gap-0 gap-7 ">
          <img
            src={ieeeiaspic}
            alt=""
            className="sm:w-[50%] object-top w-full "
          />
          <div className="w-full flex flex-col items-center sm:block sm:w-1/2 h-auto sm:pl-[3%]">
            <p className="heading">What is it all about?</p>
            <p className="subheading ">
              IEEE IAS Students Chapter - IEM, Kolkata
            </p>
            <br />
            <p className="paratext">
              The IEEE Industry Applications Society (IAS) is a global technical
              society of the IEEE that aims to advance the theory and practice
              of electrical and electronic engineering in the development,
              design, manufacture, and application of electrical systems,
              apparatus, devices, and controls. It serves both academics and
              industry, bridging the gap between innovation and implementation.
              <br />
              The IEEE IAS Student Branch Chapter at IEM provides students with
              a platform to explore industrial technologies beyond textbooks. We
              promote hands-on learning, technical workshops, and collaboration
              on interdisciplinary projects. Our members have the opportunity to
              showcase their work on national and international stages through
              IEEE-led competitions, conferences, and paper presentations.
            </p>
            <br />
            <Button
              Content="Join IEEE IAS"
              themecss="btn1 px-[7%]"
              click={() => {
                window.open(
                  "https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMIA034",
                  "_blank"
                );
              }}
            />
          </div>
        </div>
      </div>
      <Banner1 />
      <br className="sm:hidden" />
      <div className="box-border px-[5%] pb-[3%]">
        <p className="heading text-[2.2rem] text-center  leading-9">
          IEMS's IEEE-IAS Events & Announcements
        </p>
        <p className="subheading mt-1 text-[0.8rem] sm:text-[1rem] text-center ">
          What’s New, What’s Next – Events at a Glance
        </p>
        <br />
        <Homeevents />
        <br />
      </div>
      <Socialhandle />
      <br />
      <div className="box-border flex flex-col items-center px-[5%] pb-[3%]">
        <p className="heading text-[2.2rem] text-center  leading-9">
          Gallery of Experiences
        </p>
        <p className="subheading mt-1 text-[0.8rem] sm:text-[1rem] text-center ">
        Frames of Fellowship, Fun, and Future
        </p>
        <Homegallery />
      </div>
      <br />
      <Socialhandle />
      <br />
      <div className="w-full text-center px-[5%] mb-[40px] sm:mb-[70px]">
        <p className="heading">Why to join?</p>
        <p className="subheading text-[0.8rem] sm:text-[1rem] sm:text-normal">
          Joining IEEE-IAS at IEM unlocks a world of innovation, networking, and
          career growth
        </p>
        <br />
        <div className="w-full h-auto flex flex-col sm:grid grid-cols-2 gap-4 sm:gap-6">
          {Points.map((point, index) => (
            <div
              key={index}
              className="w-full bg-zinc-100 rounded-[10px] h-auto max-h-[100px] flex justify-between p-[3%] items-center shadow-[2px_2px_5px_0px_rgba(0,0,0,0.5)] hover:scale-[1.01] transition-all"
            >
              <SiTicktick size={60} className="text-lime-700" />
              <div className="w-full pl-3 flex flex-col items-start">
                <p className="text-[1.2rem] font-[700]">{point.head}</p>
                <p className="paratext  text-left text-[0.9rem] sm:text-[0.8rem]">
                  {point.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
