import React, { Component } from "react";
import "./NewTruckForm.css";

class NewTruckForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      src: "",
      rating: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state);
    this.setState({ type: "", src: "", rating: "" });
  }

  render() {
    return (
      <form className="NewTruckForm" onSubmit={this.handleSubmit}>
        <div className="input-area">
          <label htmlFor="type">Type</label>
          <input
            name="type"
            id="type"
            placeholder="What type of truck is this?"
            onChange={this.handleChange}
            value={this.state.type}
          />
        </div>
        <div className="input-area">
          <label htmlFor="src">Image </label>
          <input
            name="src"
            id="src"
            placeholder="What does this truck look like?"
            onChange={this.handleChange}
            value={this.state.src}
          />
        </div>
        <div className="input-area">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            name="rating"
            id="rating"
            placeholder="From 0 to 10, how awesome is this truck?"
            onChange={this.handleChange}
            value={this.state.rating}
            min="0"
            max="10"
            step="1"
          />
        </div>
        <input type="submit" value="Add this truck!" />
      </form>
    );
  }
}

export default NewTruckForm;
