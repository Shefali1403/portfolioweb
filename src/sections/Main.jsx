import React from "react";
const Main = () => {
  const Linkevent = () => {
    const linkurl = "https://www.linkedin.com/in/shefali3/";
    window.open(linkurl, "_blank");
  };
  const Gitevent = () => {
    const giturl = "https://github.com/Shefali1403";
    window.open(giturl, "_blank");
  };
  return (
    <>
      <div className="main-cont">
        <div className="heading">
          <h1>I'm a Frontend</h1>
          <h1>Developer</h1>
        </div>
        <div className="content">
          <p>
            I'm a Passionate Web developer with expertise in Front-end
            development.I'm capable of designing and developing
          </p>
          <p style={{ position: "relative", bottom: "21%" }}>
            responsive, seamless and intuitive UI for a better User-friendly
            experiences.
          </p>
        </div>
        <div className="links">
          <i class="fa-brands fa-twitter font"></i>
          <i class="fa-brands fa-linkedin font" onClick={Linkevent}></i>
          <i class="fa-solid fa-envelope font"></i>
          <i class="fa-brands fa-github font" onClick={Gitevent}></i>
        </div>
        <div className="but">
          <button onClick={Linkevent}>Contact me</button>
        </div>
      </div>
    </>
  );
};
export default Main;
