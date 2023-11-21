import React from "react";
import myprofile from "../myprofile.jpg";
import { MDBBtn } from "mdb-react-ui-kit";
const About = () => {
  const handledownload = () => {
    const pdfurl = process.env.PUBLIC_URL + "resumelatest.pdf";
    window.open(pdfurl, "_blank");
  };
  const linkdin = () => {
    const Linkdi = "https://www.linkedin.com/in/shefali3/";
    window.open(Linkdi, "_blank");
  };
  return (
    <>
      <div className="about-cont">
        <div className="head">
          <b>ABOUT ME</b>
        </div>
        <div className="image">
          <img src={myprofile} alt="notfound" />
        </div>
        <div className="name">
          <h3>I'm Shefali Bisht</h3>
        </div>
        <div className="buttons">
          <MDBBtn className="btn1" onClick={linkdin}>
            <b>Hire me</b>
          </MDBBtn>
          <MDBBtn className="btn2" onClick={handledownload}>
            <b>Download My CV</b>
          </MDBBtn>
        </div>
      </div>
    </>
  );
};
export default About;
