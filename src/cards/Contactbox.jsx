import React from "react";
const Contactbox = (prop) => {
  return (
    <>
      <div className="contact-grid">
        <div className="logo">{prop.logo}</div>
        <div className="contact-content">
          <p>
            <b>{prop.head1}</b>
          </p>
          <p>{prop.head2}</p>
        </div>
      </div>
    </>
  );
};
export default Contactbox;
