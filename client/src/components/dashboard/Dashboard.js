import React, { Component } from "react";
import { connect } from "react-redux";
class Dashboard extends Component {
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
                    You are logged in
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

export default connect(mapStateToProps)(Dashboard);
