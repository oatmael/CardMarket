import classNames from "classnames";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class AdminDashboardButton extends Component {
  render() {
    const { location } = this.props;
    let currentRoute = location.pathname.includes("/admin");
    return (
      <div className="col-auto">
        <Link
          to="/admin"
          className={classNames("navbar-button btn btn-large", {
            active: currentRoute,
          })}
        >
          Admin
        </Link>
      </div>
    );
  }
}
export default withRouter(AdminDashboardButton);
