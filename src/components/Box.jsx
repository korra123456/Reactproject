import React from "react";

const Box = ({ id, imgSrc, title, description }) => {
  return (
    <div id={id} className="box">
      <img src={imgSrc} alt={title} />
      <div className={`minitext${id.split("-")[1]}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Box;