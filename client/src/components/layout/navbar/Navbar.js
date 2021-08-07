import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import RegisterButton from "./RegisterButton";
import Searchbar from "./Searchbar";
class Navbar extends Component {
  render() {
    let loginLogoutButton;
    let registerButton;
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      loginLogoutButton = <LogoutButton />;
    } else {
      loginLogoutButton = <LoginButton />;
      registerButton = <RegisterButton />;
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
          <div className="row">
            <Searchbar />
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
