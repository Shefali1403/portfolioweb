import React from "react";
const Navbar = () => {
  return (
    <>
      <div className="navbar-cont">
        <div className="logo">
          <h1>Self me </h1>
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="sidepart">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </>
  );
};
export default Navbar;
