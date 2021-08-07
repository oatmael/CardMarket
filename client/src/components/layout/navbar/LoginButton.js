import React, { Component } from "react";
import { Link } from "react-router-dom";
class LoginButton extends Component {
  render() {
    return (
      <div className="col-auto">
        <Link to="/login" className="navbar-button btn btn-large">
          Log In
        </Link>
      </div>
    );
  }
}
export default LoginButton;
