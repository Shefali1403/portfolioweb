import React from "react";
import ProjectCardData from "./ProjectCardData";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <>
      <div className="light w-full  project-sec flex flex-col">
        {/* Heading  */}
        <div className="proj-head flex justify-start items-center w-full h-30">
          <h1 className="text-4xl font-bold md:text-5xl overflow-hidden  ">
            Projects
          </h1>
        </div>
        {/* Projects display  */}
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="project-card-sec w-full grid grid-cols-2 gap-10 "
        >
          {ProjectCardData.map((val) => (
            <ProjectCard
              key={val.id}
              img={val.img}
              heading={val.heading}
              para={val.para}
              stack={val.stack}
              link={val.link}
              linkName={val.linkName}
              but={val.but}
              demoLink={val.demoLink}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Project;
