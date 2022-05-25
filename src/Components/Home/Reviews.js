import React, { useEffect, useState } from 'react';

import Review from './Review';
import "./Reviews.css";
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
 
    useEffect(() => {
      fetch("http://localhost:5000/reviews")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);

    return (
        <div className="my-5 pt-5">
      <h2 className="text-center fw-bold fs-1 text-success mt-3">
        Client Review {reviews.length}
      </h2>
      <div className=" container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 my-3 pb-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
    );
};

export default Reviews;