import { animate, motion } from "framer-motion";
import React from "react";
import Service from "./Service";
const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 150,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const ServiceCard = (props) => {
  return (
    <motion.div
      variants={SlideLeft(Service.delay)}
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: true }}
      className="service-card flex justify-center items-center"
    >
      <img src={props.img} className="w-[160px] lg:w-[120px]" alt="not found" />
    </motion.div>
  );
};

export default ServiceCard;
