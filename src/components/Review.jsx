import React from "react";

const Review = ({ quotesImg, ratingImg, text, emojiImg, name, role }) => {
  return (
    <div className="recention">
      <img id="quotes" src={quotesImg} alt="quotes" />
      <img id="rating" src={ratingImg} alt="rating" />
      <p className="review-text">{text}</p>
      <div className="emoji-text">
        <img id="emoji" src={emojiImg} alt={name} />
        <div className="reviewer">
          <h4>{name}</h4>
          <p className="role">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
