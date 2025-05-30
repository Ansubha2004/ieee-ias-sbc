import React from "react";
import Homebanner from "../components/Homebanner.jsx";
import Button from "../components/Button.jsx";
import Banner1 from "../components/Banner1.jsx"

function Home() {
  return (
    <div className="relative  min-h-[calc(100vh-90px)] z-[1]">
      <Homebanner />
      <div
        id="view"
        className="w-full h-auto scroll-mt-[60px] sm:scroll-mt-[90px]"
      >
        <div className="w-full h-auto px-[5%] py-[20px] sm:py-[30px] flex sm:flex-row flex-col-reverse sm:gap-0 gap-7 ">
          <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" className="sm:w-[50%] object-top w-full " />
          <div className="w-full flex flex-col items-center sm:block sm:w-1/2 h-auto sm:pl-[3%]">
            <p className="heading">
              What is it all about?
            </p>
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
      <div  className="w-full text-center px-[5%]">
        <p className="heading">Why to join?</p>
        <p className="subheading text-[0.8rem] sm:text-normal">Joining IEEE-IAS at IEM unlocks a world of innovation, networking, and career growth</p>
        <br />
      </div>
    </div>
  );
}

export default Home;
