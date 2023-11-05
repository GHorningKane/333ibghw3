// Fully Functional Stars rating system with associated rating values 1-5
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ initialRating }) => {
  const [rating, setRating] = useState(initialRating);

  return ( 
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input 
              type="radio" 
              name="rating" 
              value={ratingValue} 
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star" 
              color={ratingValue <= rating ? "#ffc107" : "#e4e9e4"}
              size={15} 
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
