import React from "react";
import { Fade, Zoom } from "react-reveal";
import ReactStars from "react-rating-stars-component";
import "./Review.css";
 
const Review = (props) => {
  const { displayName, photoURL, reviewdes, review } = props.review;
 
  return (    <div className="container mt-3 pt-3 py-4 rounded shadow text-justify ">
  <div className="d-flex">
    <img className="img-fluid img-review "  src={photoURL} alt="" />
    <Fade top>
      <h3 className="ps-3 mt-2 fw-bold"> {displayName}</h3>
    </Fade>
  </div>
  <Fade bottom>
    <p className="my-3 ">
      {" "}
      <span className="fw-bold">Review: </span>{" "}
      <span className="review-text">{reviewdes}</span>{" "}
    </p>
  </Fade>

  <span className="fw-bold">Ratings: ({review})</span>
  <Zoom>
    <ReactStars count={5} value={review} size={26} activeColor="#f15735" />
  </Zoom>
</div>
);
};

export default Review;