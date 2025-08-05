import React from 'react'
import Button from "../components/Button.jsx";


function Eventdetails({ image, name, description, venue, date, gallery, details, link }) {
  return (
    <a href={link} className="w-full  hover:scale-[1.01] transition-all border-box p-1.5 md:w-[45%]   overflow-hidden   bg-gradient-to-l from-lime-800 via-slate-50 to-lime-800  flex flex-col">
        <div className="w-full h-full bg-white">
                <div className="">
                    <img src={image} className="w-full aspect-[16/11]" />
                </div>
                <div className="w-full px-5 py-3">
                    <p className="subheading leading-tight">{name}</p>
                    <div className="paratext  w-full flex text-[0.6rem]  gap-1 text-blue-800">
                        <p>{date}</p>
                        <p>|</p>
                        <p>{venue}</p>
                        <p>|</p>
                        <p>{description}</p>
                    </div>
                    <div className="w-full flex flex-col justify-around items-center mt-3">
                        
                        <Button themecss="btn1 my-[20px] " click={()=>window.open(gallery)} Content="View Gallery" />
                    </div>
                </div>

            </div>
    </a>
  )
}

export default Eventdetails;