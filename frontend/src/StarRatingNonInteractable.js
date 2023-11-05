// Non-interactable Stars rating system which represents rating values 1-5
import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ initialRating }) => {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <FaStar
              className="star"
              color={ratingValue <= initialRating ? "#ffc107" : "#e4e9e4"}
              size={15}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
