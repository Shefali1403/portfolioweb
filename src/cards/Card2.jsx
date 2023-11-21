import React from "react";
const Card2 = (prop) => {
  const gitlink = () => {
    if (prop.link) {
      window.open(prop.link, "_blank");
    }
  };
  const projlink = () => {
    window.open(prop.plink, "_blank");
  };
  return (
    <>
      <div className={prop.className}>
        <h1>
          <b>{prop.title}</b>
        </h1>
        <p>{prop.content}</p>
        <div className="tech">
          <p>
            <b>{prop.tech1}</b>
          </p>
          <p>
            <b>{prop.tech2}</b>
          </p>
        </div>
        <div className="code">
          <div className="git">
            <p>
              <b>Code</b>
            </p>
            <i class="fa-brands fa-github giticon" onClick={gitlink}></i>
          </div>
          <div className="link">
            <p>
              <b>Live Demo</b>
            </p>
            <i class="fa-solid fa-link giticon" onClick={projlink}></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card2;
