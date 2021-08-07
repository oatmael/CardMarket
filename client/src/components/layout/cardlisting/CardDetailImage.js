import React, { Component } from "react";
class CardDetailImage extends Component {
  render() {
    const image = this.props.image || "";
    return (
      <figure className="card-detail-image">
        <img src={image} alt="" />
      </figure>
    );
  }
}

export default CardDetailImage;
