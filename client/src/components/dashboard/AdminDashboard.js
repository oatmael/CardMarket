import React, { Component } from "react";
import { connect } from "react-redux";
class AdminDashboard extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4>
                  <b>Hey there,</b> {user.name}
                  <p className="flow-text grey-text text-darken-1">
                    This is the Admin Dashboard route.
                  </p>
                </h4>
              </div>
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
