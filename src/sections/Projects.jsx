import React from "react";
import Card1 from "../cards/Card1";
import Card2 from "../cards/Card2";
const Projects = () => {
  return (
    <>
      <div className="projects-cont">
        <div className="project-heading">
          <h2>
            <b>Projects</b>
          </h2>
          <h1>
            <b>Each Project is a unique piece of Development 🍃</b>
          </h1>
        </div>
        <div className="project-grid">
          <Card1
            id="card1-1"
            img={process.env.PUBLIC_URL + "images/shefmart.png"}
          />
          <Card2
            className="card2-cont card2-1"
            title="shefmart"
            content="Shefmart is a ecommerce website with a seamless attractive user-interface designed using Bootstrap framework for a better user experience. "
            tech1="Bootstrap"
            tech2="React"
            link="https://github.com/Shefali1403/e-commerce"
            plink="https://shefmart.onrender.com/"
          />
          <Card2
            className="card2-cont card2-2"
            title="Instaclone"
            content="It is a Instagram Homepage clone with a Responsive design user must login with a valid username and password before using the app. The app has feature to like,comment and create a new post."
            tech1="Redux"
            tech2="React"
            link="https://github.com/Shefali1403/internassign"
            plink="https://shefali1403.github.io/internassign/"
          />
          <Card1
            id="card1-2"
            img={process.env.PUBLIC_URL + "images/instaclone.png"}
          />
          <Card1
            id="card1-3"
            img={process.env.PUBLIC_URL + "images/ecommerce.png"}
          />
          <Card2
            className="card2-cont card2-3"
            title="Fashion ecommerce"
            content="Supro is a ecommerce website with a Responsive User Interface making it a user-friendly website."
            tech1="CSS"
            tech2="React"
            link="https://github.com/Shefali1403/proj1"
            plink="https://projectecomerce.netlify.app"
          />
        </div>
      </div>
    </>
  );
};
export default Projects;
