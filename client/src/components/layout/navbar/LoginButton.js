import classNames from "classnames";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class LoginButton extends Component {
  render() {
    const { location } = this.props;
    let currentRoute = location.pathname === "/login" ? true : false;
    return (
      <div className="col-auto">
        <Link
          to="/login"
          className={classNames("navbar-button btn btn-large", {
            active: currentRoute,
          })}
        >
          Log In
        </Link>
      </div>
    );
  }
}
export default withRouter(LoginButton);
