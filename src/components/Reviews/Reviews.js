import React, { useEffect, useState } from "react";
import Review from "./Review/Review";
import first from "./first.jpg";
import second from "./second.jpg";
import third from "./third.jpg";
import fourth from "./fourth.jpg";

const Reviews = () => {
  
  let [review,setReview] = useState([]);
  // review =  array.freeze(review);
  // console.log(review);

  useEffect(() => {
    fetch('http://localhost:5000/showReview')
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      setReview(data)});
  },[])
 
  return (
    <div style={ { backgroundColor: "#F6F6F6" }}>
      <div className="text-center">
        <h1 style={{ color: "dodgerblue" }}> Reviews </h1>
      </div>
      <div className="row ">
        {
        review.map(data => <Review reviewData={data}  key={data._id}   />)
        }
      </div>
    </div>
  );
};

export default Reviews;
