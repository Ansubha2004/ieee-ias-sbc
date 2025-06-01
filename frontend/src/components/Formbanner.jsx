import React from "react";
import Button from "../components/Button.jsx";

function Formbanner() {
  return (
    <div className="w-full bg-gradient-to-tr from-zinc-900 to-lime-800 px-[5%] mb-[3%] py-5 bg-black flex justify-around items-center ">
      <Button
        themecss="btn2 sm:py-[1%] whitespace-nowrap"
        click={() =>
          window.open("https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMIA034", "_blank")
        }
        Content="Register Now"
      />
      <p className="text-white text-right sm:text-[1rem] lg:text-[1.3rem] text-[0.8rem] font-bold">
        Haven't joined IEEE IAS yet? <br className="sm:hidden" /> Just a click away from membership{" "}
      </p>
      
    </div>
  );
}

export default Formbanner;
