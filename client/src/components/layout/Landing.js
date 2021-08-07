import React, { Component } from "react";
import CardDetail from "./cardlisting/CardDetail";
import * as Constants from "../../constants";
class Landing extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 center-align">
            <div className="col-12 mb-5">
              <h2 className="float-end">This is the landing page</h2>
            </div>

            <div className="row">
              <div className="col-auto">
                <CardDetail type={Constants.CARD_GAMES.MTG} />
              </div>
              <div className="col-auto">
                <div className="card card-detail"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
