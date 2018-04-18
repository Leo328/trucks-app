import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./TruckApp.css";
import TruckList from "./TruckList";
import NewTruckForm from "./NewTruckForm";

class TruckApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trucks: [
        {
          type: "Cement Truck",
          src:
            "https://d2uhsaoc6ysewq.cloudfront.net/17085/Mixer--Ready-Mix--Concrete-Trucks-Peterbilt-357-9652555.jpg",
          rating: 10
        },
        {
          type: "Vacuum Truck",
          src: "https://i.ytimg.com/vi/8-o4b7Mu810/maxresdefault.jpg",
          rating: 8
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newTruck) {
    this.setState(prevState => ({
      trucks: [newTruck, ...prevState.trucks]
    }));
  }

  render() {
    return (
      <div className="TruckApp">
        <nav>
          <Link to="/new">New Truck</Link>
          <Link to="/">All Trucks</Link>
        </nav>
        <Switch>
          <Route
            path="/new"
            render={routeProps => <NewTruckForm handleAdd={this.handleAdd} />}
          />
          <Route
            path="/"
            exact
            render={routeProps => (
              <TruckList truckData={this.state.trucks} {...routeProps} />
            )}
          />
          {/* Option 1: 404 if no matching path found */}
          {/* <Route component={() => <div>404, not a valid url!!!</div>} /> */}

          {/* Option 2: Redirect to TruckList */}
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default TruckApp;
