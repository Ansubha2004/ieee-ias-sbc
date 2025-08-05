import React from "react";
import event from "../assets/upcomingevents/aiappmakingevent.jpeg";
import Button from "../components/Button.jsx";
import Events from "../data/events.json";

function Homeevents() {
  return (
    <div className="w-full flex md:flex-row flex-col-reverse sm:gap-10 gap-0 justify-around">
      <div
        id="recents"
        className="w-full md:w-[45%] flex flex-col  items-center sm:items-start justify-between rounded-[10px] "
      >
        <br className="sm:hidden" />
        <p className="subheading  text-[1.5rem] mb-[24px]">
          Recent Highlights
        </p>
        <div className="flex flex-col w-full items-start gap-7 ">
          {Events.slice(1).map((event, index) => (
            <div key={index}>
              <a className="text-lime-800 font-[700] hover:underline" href={event.link}>{event.name}</a>
              <div className="paratext  w-full flex text-[0.8rem] gap-1">
                <p>{event.date}</p>
                <p>|</p>
                <p>{event.venue}</p>
                <p>|</p>
                <p>{event.Description}</p>
              </div>
            </div>
          ))}
        </div>
        <Button themecss="btn1 mt-[40px]" Content="Explore More Events" />
      </div>
      <div
        id="upcoming"
        className="w-full md:w-[45%] flex flex-col items-center rounded-[15px]  p-[1.5rem] bg-zinc-200 h-auto"
      >
        <div className="font-[700] mb-2 text-[1.5rem] sm:text-[1.2rem]">
          Upcoming Event
        </div>
        <img src={event} className="w-full aspect-[16/11]" />
        <Button themecss="btn3 mt-5" Content="Registration is Live" />
      </div>
    </div>
  );
}

export default Homeevents;
