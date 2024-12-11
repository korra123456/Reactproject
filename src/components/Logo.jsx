import React from "react";

const Logo = ({ id, imgSrc, altText }) => {
  return (
    <div id={id} className="logo2">
      <img src={imgSrc} alt={altText} />
    </div>
  );
};

export default Logo;
