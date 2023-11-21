import React from "react";
const Footer = () => {
  const linkdinclick = () => {
    const linkD = "https://www.linkedin.com/in/shefali3/";
    window.open(linkD, "_blank");
  };
  const gitclick = () => {
    const linkG = "https://github.com/Shefali1403";
    window.open(linkG, "_blank");
  };
  return (
    <>
      <div className="footer-cont">
        <div className="footer-content">
          <p>
            <b>Copyright &copy;2023.All rights are reserved</b>
          </p>
        </div>
        <div className="footer-link">
          <i class="fa-brands fa-linkedin" onClick={linkdinclick}></i>
          <i class="fa-brands fa-github footerlink" onClick={gitclick}></i>
        </div>
      </div>
    </>
  );
};
export default Footer;
