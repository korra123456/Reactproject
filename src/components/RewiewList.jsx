// import React from "react";
// import Review from "./Review";

// const ReviewList = () => {
//   const reviewsData = [
//     {
//       quotesImg: "/images/quotes.jpg",
//       ratingImg: "/images/rating.jpg",
//       text: "Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.",
//       emojiImg: "/images/tjejemoji.jpg",
//       name: "Fannie Summers",
//       role: "Designer",
//     },
//     {
//       quotesImg: "/images/quotes.jpg",
//       ratingImg: "/images/rating2.jpg",
//       text: "Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.",
//       emojiImg: "/images/killeemoji.png",
//       name: "Albert Flores",
//       role: "Developer",
//     },
//   ];

//   return (
//     <div className="recentioner">
//       {reviewsData.map((review, index) => (
//         <Review
//           key={index}
//           quotesImg={review.quotesImg}
//           ratingImg={review.ratingImg}
//           text={review.text}
//           emojiImg={review.emojiImg}
//           name={review.name}
//           role={review.role}
//         />
//       ))}
//     </div>
//   );
// };

// export default ReviewList;


import React, { useState, useEffect } from "react";
import Review from "./Review";

const ReviewList = () => {
  const [reviewsData, setReviewsData] = useState([]); // State för att lagra API-data
  const [loading, setLoading] = useState(true); // Laddningsindikator
  const [error, setError] = useState(null); // Felhantering

  // Hämta data från API vid första renderingen
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("https://win24-assignment.azurewebsites.net/api/testimonials");
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        const data = await response.json();

        // Mappa API-data till komponentens format
        const formattedData = data.map((item) => ({
          quotesImg: "/images/quotes.jpg", // Statisk bild för quotes
          ratingImg: "/images/rating.jpg", // Statisk bild för rating
          text: item.comment,
          emojiImg: item.avatarUrl,
          name: item.author,
          role: item.jobRole,
        }));

        setReviewsData(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Stäng av laddningsindikatorn
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="recentioner">
      {reviewsData.map((review, index) => (
        <Review
          key={index}
          quotesImg={review.quotesImg}
          ratingImg={review.ratingImg}
          text={review.text}
          emojiImg={review.emojiImg}
          name={review.name}
          role={review.role}
        />
      ))}
    </div>
  );
};

export default ReviewList;
