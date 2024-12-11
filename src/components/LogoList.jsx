import React from "react";
import Logo from "./Logo";

const LogoList = () => {
  const logosData = [
    { id: "logo2-1", imgSrc: "/images/logo 1.jpg", altText: "logo1" },
    { id: "logo2-2", imgSrc: "/images/logo 2.jpg", altText: "logo 2" },
    { id: "logo2-3", imgSrc: "/images/logo 3.jpg", altText: "logo 3" },
    { id: "logo2-4", imgSrc: "/images/logo 4.jpg", altText: "logo 4" },
    { id: "logo2-5", imgSrc: "/images/logo 5.png", altText: "logo 5" },
    { id: "logo2-6", imgSrc: "/images/logo 6.jpg", altText: "logo 6" },
  ];

  return (
    <div className="logotop">
      {logosData.map((logo) => (
        <Logo key={logo.id} id={logo.id} imgSrc={logo.imgSrc} altText={logo.altText} />
      ))}
    </div>
  );
};

export default LogoList;
