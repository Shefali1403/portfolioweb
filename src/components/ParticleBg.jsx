import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBg = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // Prevents full-page overlay
          background: {
            color: {
              value: "transparent", // Transparent so the gradient shows
            },
          },
          particles: {
            number: {
              value: 60, // Number of particles
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: ["#ff0000", "#ff7300", "#ffeb00", "#00ff00", "#0099ff"], // Multi-colored particles
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.7,
              random: true,
            },
            size: {
              value: 4,
              random: true,
            },
            move: {
              enable: true,
              speed: 1.5, // Slower, smoother movement
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble", // Hover effect (expands particles)
                },
                onClick: {
                  enable: true,
                  mode: "push", // More particles appear on click
                },
              },
              modes: {
                bubble: {
                  distance: 150,
                  size: 8,
                  duration: 1,
                  opacity: 1,
                },
                push: {
                  quantity: 4,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticleBg;
