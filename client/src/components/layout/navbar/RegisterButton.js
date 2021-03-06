import classNames from "classnames";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class RegisterButton extends Component {
  render() {
    const { location } = this.props;
    let currentRoute = location.pathname === "/register" ? true : false;
    return (
      <div className="col-auto">
        <Link
          to="/register"
          className={classNames("navbar-button btn btn-large", {
            active: currentRoute,
          })}
        >
          Register
        </Link>
      </div>
    );
  }
}
export default withRouter(RegisterButton);
