import React from "react";
import "../../index.css";
import { motion } from "framer-motion";

export const FadeUp = ({ delay }) => {
  return {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const resumeLink = () => {
  window.open(
    "https://docs.google.com/document/d/1DgN3pBVYnDYyVt8klFaqeKdl6gQqpHVSD9-qZtcbpww/edit?usp=sharing",
    "_blank"
  );
};

const Hero = () => {
  return (
    <section className="w-full light overflow-hidden relative  grid grid-cols-1 md:grid-cols-2 min-h-[80vh] px-6">
      {/* Brand Info */}
      <div className="flex flex-col justify-center py-14 md:py-0 relative z-20 overflow-hidden">
        <motion.h1
          variants={FadeUp({ delay: 0.6 })}
          initial="initial"
          animate="animate"
          className="text-4xl hero-head md:text-2xl text-center md:text-start lg:text-5xl text-white font-bold leading-snug overflow-hidden"
        >
          Full Stack <span className="text-secondary">JAVA DEVELOPER</span>{" "}
        </motion.h1>
        <motion.div
          variants={FadeUp({ delay: 0.8 })}
          initial="initial"
          animate="animate"
          className="flex justify-center md:justify-start overflow-hidden hero-but-div"
        >
          <button
            className="but-cont rounded-xl cursor-pointer font-bold "
            onClick={resumeLink}
          >
            Resume
          </button>
        </motion.div>
      </div>
      {/* Hero Image */}
      <div className="flex justify-center items-center">
        <motion.img
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 9 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          src="/simpho.jpg"
          alt="not found"
          className="w-[300px] md:w-[400px] max-h-[90vh] relative z-10 drop-shadow"
        />
      </div>
    </section>
  );
};

export default Hero;
