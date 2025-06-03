import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Navbar2 from "./components/Navbar2.jsx";
import Home from "./pages/Home.jsx";
import CWC from "./pages/CWC.jsx"
import Footer from "./components/Footer.jsx"
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="relative w-screen h-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Memberinfo" element={<CWC/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
