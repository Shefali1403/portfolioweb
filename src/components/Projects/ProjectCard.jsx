import React from "react";

const ProjectCard = (props) => {
  const demoProj = () => {
    if (props.demoLink) {
      window.open(props.demoLink, "_blank");
    } else {
      alert("Demo link is not available for this project.");
    }
  };

  return (
    <div className="project-card  bg-gray-300 flex flex-col flex-wrap justify-between rounded-2xl w-[80%] items-center overflow-hidden ">
      <img src={props.img} className="h-full" />
      <h1 className="text-l text-center md:text-2xl lg:text-3xl overflow-hidden font-bold port">
        {props.heading}
      </h1>
      <p className="text-l text-center text-black sm:text-sm md:text-xl overflow-hidden para-project">
        {props.para}
      </p>
      <div className="flex justify-between tech-stack-css">
        <h1 className="font-bold text-sm md:text-2xl   lg:text-3xl overflow-hidden">
          Tech Stack-
        </h1>
        <p className="text-l md:text-xl lg:text-2xl text-gray-500 overflow-hidden">
          {props.stack}
        </p>
      </div>

      {/* Anchor tag for another link */}
      <a
        href={props.link}
        className="anchor text-l md:text-2xl  overflow-hidden text-blue-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.link}
      </a>

      {/* Button to open demo link */}
      {props.demoLink ? (
        <button className="demo-but rounded-xl" onClick={demoProj}>
          {props.but}
        </button>
      ) : (
        <button
          className="demo-but rounded-xl opacity-50 cursor-not-allowed"
          disabled
        >
          Not Available
        </button>
      )}
    </div>
  );
};

export default ProjectCard;
