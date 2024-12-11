import React from "react";
import Box from "./Box";

const IconText = () => {
  const boxesData = [
    {
      id: "box-1",
      imgSrc: "/images/icon1.jpg",
      title: "Easy Payments",
      description: "Id mollis consectetur congue egestas egestas suspendisse blandit justo.",
    },
    {
      id: "box-2",
      imgSrc: "/images/icon2.jpg",
      title: "Data Security",
      description: "Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.",
    },
    {
      id: "box-3",
      imgSrc: "/images/icon3.jpg",
      title: "Cost Statistics",
      description: "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.",
    },
    {
      id: "box-4",
      imgSrc: "/images/icon4.png",
      title: "Support 24/7",
      description: "A elementum, imperdiet enim, prentium etiam facilisi in aenean quam mauris.",
    },
    {
      id: "box-5",
      imgSrc: "/images/icon5.jpg",
      title: "Regular Cashback",
      description: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.",
    },
    {
      id: "box-6",
      imgSrc: "/images/icon6.jpg",
      title: "Top Standards",
      description: "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.",
    },
  ];

  return (
    <div className="icontext">
      {boxesData.map((box) => (
        <Box
          key={box.id}
          id={box.id}
          imgSrc={box.imgSrc}
          title={box.title}
          description={box.description}
        />
      ))}
    </div>
  );
};

export default IconText;
