import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import TruckApp from "./TruckApp";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <TruckApp />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
