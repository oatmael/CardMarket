import React, { Component } from "react";
class Error403 extends Component {
  render() {
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h1>403</h1>
                <h4>You can't access this.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error403;
