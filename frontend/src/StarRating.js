// import React, { useState } from 'react';
// import Star from './Star';

// const RatingStars = () => {
//     const [gradeIndex, setGradeIndex] = useState();
//     const GRADES = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];
//     const activeStar = {
//         fill: 'yellow'
//     };

//     const changeGradeIndex = ( index ) => {
//         setGradeIndex(index);
//     }

//     return (
//         <div className="container">
//             <h1 className="result">{ GRADES[gradeIndex] ? GRADES[gradeIndex] : 'You didn\'t review yet'}</h1>
//             <div className="stars">
//                 {
//                     GRADES.map((grade, index) => (
//                         <Star 
//                             index={index} 
//                             key={grade} 
//                             changeGradeIndex={changeGradeIndex}
//                             style={ gradeIndex > index ? activeStar : {}}
//                         />
//                     ))
//                 }
//             </div>
//         </div>
//     );
// }

// export default RatingStars;
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);

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
              color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
              size={.5} 
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
