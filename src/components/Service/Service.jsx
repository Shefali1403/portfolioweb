import React from "react";
import ServiceData from "./ServiceData";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
const Service = () => {
  return (
    <>
      <div className="service-sec light flex flex-col justify-between items-center w-full h-full ">
        {/* Heading  */}
        <div className="heading flex justify-start items-center w-full h-20 ">
          <h1 className="text-3xl lg:text-5xl overflow-hidden font-bold ">
            Tech Stack
          </h1>
        </div>
        {/* stack images  */}
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
          className="service-tech-sec light w-full flex flex-wrap justify-center items-center gap-7"
        >
          {ServiceData.map((elem) => (
            <ServiceCard key={elem.id} img={elem.img} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Service;
