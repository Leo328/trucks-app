import React from "react";
import Truck from "./Truck";
import "./TruckList.css";

const TruckList = ({ truckData }) => (
  <div className="TruckList">
    {truckData.map((d, i) => (
      <Truck key={i} type={d.type} rating={d.rating} src={d.src} />
    ))}
  </div>
);

export default TruckList;
