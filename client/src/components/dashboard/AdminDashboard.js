import React, { Component } from "react";
import { connect } from "react-redux";
import AdminMenu from "./AdminMenu";
class AdminDashboard extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <div className="row mx-5">
        <div className="col-2">
          <AdminMenu />
        </div>
        <div className="col-10">
          <div className="card">
            <div className="card-body">
              <h4>
                <b>Hey there,</b> {user.name}
                <p>This is the Admin Dashboard route.</p>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AdminDashboard);
