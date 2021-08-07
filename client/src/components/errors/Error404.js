import React, { Component } from "react";
class Error404 extends Component {
  render() {
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h1>404</h1>
                <h4>We can't find what you were looking for.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error404;
