import React, { useState } from "react";
import Socialbanner from "../components/Socialbanner.jsx";
import Joinposter from "../components/Joinposter.jsx";
import Contactheader from "../components/Contactheader.jsx";
import Button from "../components/Button.jsx";
import axios from "axios";

function Contact() {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const shallowcopy = { ...formdata };
    shallowcopy[name] = value;
    setformdata(shallowcopy);
  };

  const handlesubmit =async (e) => {
    e.preventDefault();
    const { name, email, message } = formdata;
    if (!name.trim() || !email.trim() || !message.trim()) {
      //   errormessage("Kindly fill all the credentials");

      console.log("Kindliy fill all the credentials");
      setformdata(reset);
    }
    try {
        const response=await axios.post("http://localhost:4000/formapi/form",formdata,{
            headers:{
                "Content-Type":"application/json"
            },
            credentials:true
        })
        const {success,message,error}=response.data;
        if (success) {
            console.log("Data posted successfully");
            // successmessage("Thanks for contacting! Will reach out to you soon ");
            // ✅ Reset form data here
            setformdata(reset);
          }
          if (error) {
            // errormessage("Glitch occured");
            console.log("Error occured while data posting");
          }
    } catch (err) {
      console.log("API fetch error", err);
    }
  };

  const reset = {
    name: "",
    email: "",
    message: "",
  };

  return (
    <>
      <Contactheader />
      <div className="relative  min-h-[calc(100vh-240px)] flex flex-col justify-start  items-center z-[1] box-border px-[5%]  sm:px-[2%]">
        < div className="w-full h-auto flex sm:flex-row flex-col justify-between items-start gap-4">
          <Joinposter />
          <Socialbanner additionalcss="sm:hidden" />
          <div className="h-auto box-border py-8 px-5 sm:px-15  w-full rounded-[10px] bg-gradient-to-r from-gray-300 via-slate-50 to-gray-300 ">
            <p className="text-center heading">Get in Touch</p>
            <p className="subheading text-center">Your Queries Matter</p>
            <br />
            <form
              onSubmit={handlesubmit}
              className="  flex flex-col items-center gap-3"
            >
              <div className="w-full flex sm:flex-row flex-col gap-2">
                <input
                  type="text"
                  onChange={handlechange}
                  className="inputbox"
                  name="name"
                  placeholder="Enter Name"
                  required
                  value={formdata.name}
                />
                <input
                  type="text"
                  onChange={handlechange}
                  className="inputbox"
                  name="email"
                  required
                  placeholder="Enter Mail Id"
                  value={formdata.email}
                />
              </div>
              <textarea
                className="inputbox resize-none h-[150px]"
                onChange={handlechange}
                placeholder="Type message"
                required
                name="message"
                value={formdata.message}
              ></textarea>

              <Button
                type="submit"
                themecss="btn1 w-full sm:mt-2 mt-8 flex justify-center items-center"
                Content="Submit"
              />
            </form>
          </div>
          <Socialbanner additionalcss="sm:flex hidden" />
        </div>
      </div>
      <p className="subheading text-center font-[400] italic text-[1.1rem] sm:mt-0 mt-7 sm:text-[1.6rem]">If already a member of IEEE-IAS, <a href="" className="bg-gradient-to-r from-lime-600 to-green-800 text-transparent bg-clip-text font-[900]">Click Here</a></p>
      <br />
    </>
  );
}

export default Contact;
