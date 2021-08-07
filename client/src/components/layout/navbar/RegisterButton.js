import React, { Component } from "react";
import { Link } from "react-router-dom";
class RegisterButton extends Component {
  render() {
    return (
      <div className="col-auto">
        <Link
          to="/register"
          style={{
            width: "140px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
          }}
          className="navbar-button btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Register
        </Link>
      </div>
    );
  }
}
export default RegisterButton;
