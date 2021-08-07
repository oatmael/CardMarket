import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { withRouter } from "react-router-dom";
class LogoutButton extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  };
  render() {
    return (
      <div className="col-auto">
        <button
          onClick={this.onLogoutClick}
          className="navbar-button btn btn-large"
        >
          Logout
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(
  withRouter(LogoutButton)
);
