import React, { Component } from "react";
class MTGDetail extends Component {
  render() {
    const { name, manacost, typeline, rulestext, power, toughness } =
      this.props.card;
    rulestext.split("\n");
    return (
      <div>
        <h4>{name}</h4>
        <hr />
        <div className="row mb-3">
          <i className="col-8">{typeline}</i>
          <span className="col-4">
            <b>{power}</b> / <b>{toughness}</b>
          </span>
        </div>
        {rulestext.split("\n").map((rules) => {
          return <p>{rules}</p>;
        })}
      </div>
    );
  }
}

export default MTGDetail;
