import React from 'react'
import Button from '../components/Button.jsx'

function Banner1() {
  return (
    
      <div className="w-full bg-gradient-to-r from-zinc-900 to-lime-800 px-[5%] mb-[3%] py-5 bg-black flex justify-around items-center ">
        <p className="text-white sm:text-[1rem] lg:text-[1.3rem] text-[0.8rem] font-bold">Not an IEEE Member? <br className="sm:hidden"/> Join today to explore the Community </p>
        <Button themecss="btn2 sm:py-[1%] whitespace-nowrap" click={()=>(window.open("https://www.ieee.org/membership/join","_blank"))} Content="Join Now" />
      </div>
    
  )
}

export default Banner1
