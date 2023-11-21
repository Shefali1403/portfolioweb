import React from "react";
import Contactbox from "../cards/Contactbox";
const Contact = () => {
  return (
    <>
      <div className="contact-cont">
        <div className="contact-title">
          <p>
            <b>Contact</b>
          </p>
          <h2>
            <b>Don't be shy! Hit me up! 👇</b>
          </h2>
        </div>
        <div className="contact-card">
          <Contactbox
            logo={<i class="fa-solid fa-location-dot"></i>}
            head1="Location"
            head2="New Delhi"
          />
          <Contactbox
            logo={<i class="fa-solid fa-envelope"></i>}
            head1="Mail"
            head2="bishtshefali3@gmail.com"
          />
        </div>
      </div>
    </>
  );
};
export default Contact;
