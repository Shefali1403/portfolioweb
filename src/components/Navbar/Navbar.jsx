import React from "react";
import { IoMdMenu } from "react-icons/io";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbarmenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Contact", path: "/contact" },
];
const linkdin = () => {
  window.open("https://www.linkedin.com/in/shefali3/", "_blank");
};
const github = () => {
  window.open("https://github.com/Shefali1403", "_blank");
};
const Navbar = () => {
  return (
    <nav className="w-full shadow-md">
      <div className="w-full flex items-center justify-between px-6 py-4 h-25">
        {/* Logo Section */}
        <div className="">
          <h1 className="font-bold text-2xl md:text-5xl overflow-hidden port">
            Portfolio
          </h1>
        </div>
        {/* Menu Section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {Navbarmenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="text-xl md:text-2xl  hover:text-secondary transition duration-200"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{ color: "#0A66C2" }}
              onClick={linkdin}
            />
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{ color: "black" }}
              onClick={github}
            />
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
