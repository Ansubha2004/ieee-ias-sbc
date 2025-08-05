import React,{useEffect} from 'react'
import greenbg from "../assets/images/greenbg.png";
import EventBanner from '../components/EventBanner.jsx';
import Eventdetails from '../components/Eventdetails.jsx';
import events from "../data/events.json";
import eventimages from '../utils/eventposter.jsx';
import { useLocation } from 'react-router-dom';


function Events() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // slight delay ensures layout is ready
      }
    }
  }, [location]);

  return (
    <div id="eventbanner"  className="relative  min-h-[calc(100vh-7.6rem)] flex flex-col items-center scroll-mt-[100px] lg:scroll-mt-[140px]  z-[1]  box-border  ">
      <div className="relative w-full flex justify-center   h-auto">
        <img src={greenbg} className="absolute w-full h-[400px] z-[0]" alt="" />
        <EventBanner />
      </div>
      
      <div id="view" className="scroll-mt-[108px] lg:scroll-mt-[90px] px-[5%] py-[20px] sm:py-[40px]">
        <p className="heading text-center">Events & Activity Highlights</p>
        <p className="subheading text-center">Explore our diverse range of events and activities</p>
        <br className="hidden sm:block"/>
        <div className="w-full  flex flex-wrap justify-evenly space-y-10 mt-5">
          {events.slice(0,events.length-1).reverse().map((event, index) => (
            <Eventdetails
              key={index}
              image={eventimages[index+1]}
              name={event.name}
              description={event.Description}
              venue={event.venue}
              date={event.date}
              gallery={event.gallery}
              details={event.details}
              link={event.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events