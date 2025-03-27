import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import Project from "./components/Projects/Project";
import Footer from "./components/Footer/Footer";
import ParticleBg from "./components/ParticleBg";

const App = () => {
  return (
    <>
      <div className="relative w-full h-full animated-bg">
        <ParticleBg />
        <Navbar />
        <Hero />
        <Service />
        <Project />
        <Footer />
      </div>
    </>
  );
};

export default App;
