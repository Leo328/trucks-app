import React from "react";
import "./Truck.css";

const Truck = ({ type, src, rating }) => (
  <div className="Truck">
    <h1>{type}</h1>
    <img src={src} alt={type} />
    <p>Awesomeness: {rating} out of 10.</p>
  </div>
);

export default Truck;
