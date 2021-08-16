import classNames from "classnames";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class DashboardButton extends Component {
  render() {
    const { location } = this.props;
    let currentRoute = location.pathname === "/dashboard" ? true : false;
    return (
      <div className="col-auto">
        <Link
          to="/dashboard"
          className={classNames("navbar-button btn btn-block", {
            active: currentRoute,
          })}
        >
          Dashboard
        </Link>
      </div>
    );
  }
}
export default withRouter(DashboardButton);
