import React, { Component } from "react";
class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.search);
  };

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <form className="col d-flex" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button
            className="navbar-button btn"
            style={{ width: "auto" }}
            type="submit"
          >
            🔎
          </button>
        </div>
      </form>
    );
  }
}

export default Searchbar;
