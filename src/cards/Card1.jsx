import React from "react";
const Card1 = (prop) => {
  return (
    <>
      <div className="card1-cont" id={prop.id}>
        <img src={prop.img} alt="notfound" />
      </div>
    </>
  );
};
export default Card1;
