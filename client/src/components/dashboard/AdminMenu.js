import classNames from "classnames";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class AdminMenu extends Component {
  currentRoute(route) {
    const { location } = this.props;
    return location.pathname === route;
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="list-group">
            <Link
              to="/admin"
              className={classNames("list-group-item", {
                active: this.currentRoute("/admin"),
              })}
            >
              Dashboard
            </Link>
            <Link
              to="/admin/users"
              className={classNames("list-group-item", {
                active: this.currentRoute("/admin/users"),
              })}
            >
              User Management
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AdminMenu);
