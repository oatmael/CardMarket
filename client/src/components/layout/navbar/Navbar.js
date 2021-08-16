import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import RegisterButton from "./RegisterButton";
import Searchbar from "./Searchbar";
import AdminDashboardButton from "./AdminDashboardButton";
import * as Constants from "../../../constants";
import DashboardButton from "./DashboardButton";
class Navbar extends Component {
  render() {
    let loginLogoutButton,
      registerButton,
      dashboardButton,
      adminDashboardButton;
    const { isAuthenticated, user } = this.props.auth;
    if (isAuthenticated) {
      dashboardButton = <DashboardButton />;
      loginLogoutButton = <LogoutButton />;
    } else {
      loginLogoutButton = <LoginButton />;
      registerButton = <RegisterButton />;
    }

    if (user.role === Constants.ROLES.ADMIN) {
      adminDashboardButton = <AdminDashboardButton />;
    }
    return (
      <nav className="navbar navbar-light fixed-top levitate px-5 py-3">
        <div className="container-fluid">
          <Link
            to="/"
            style={{
              fontFamily: "monospace",
            }}
            className="navbar-brand"
          >
            <i className="bi bi-box-seam"></i>
            CardMarket
          </Link>
          <Searchbar />
          <div className="row">
            {adminDashboardButton}
            {dashboardButton}
            {registerButton}
            {loginLogoutButton}
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Navbar);
