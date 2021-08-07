import React, { Component } from "react";
import CardDetailImage from "./CardDetailImage";
import MTGDetail from "./content/MTGDetail";
import * as Constants from "../../../constants";
import YGODetail from "./content/YGODetail";
import PKMDetail from "./content/PKMDetail";
class CardDetail extends Component {
  render() {
    const { type } = this.props;
    let detailContent;
    switch (type) {
      case Constants.CARD_GAMES.MTG:
        detailContent = (
          <MTGDetail
            card={{
              name: "Joven's Ferrets",
              rulestext:
                "Whenever Joven's Ferrets attacks, it gets +0/+2 until end of turn.\nAt end of combat, tap all creatures that blocked Joven's Ferrets this turn. They don't untap during their controller's next untap step.",
              typeline: "Creature - Ferret",
              power: 1,
              toughness: 1,
            }}
          />
        );
        break;
      case Constants.CARD_GAMES.YGO:
        detailContent = <YGODetail />;
        break;
      case Constants.CARD_GAMES.PKM:
        detailContent = <PKMDetail />;
        break;
      default:
        detailContent = <MTGDetail />;
        break;
    }
    return (
      <div className="card card-detail">
        <div className="row">
          <div className="col-7">
            <CardDetailImage image="https://c1.scryfall.com/file/scryfall-cards/large/front/3/7/3765ab78-a645-4e4f-9f83-5a6bc762b8d0.jpg?1562868083" />
          </div>
          <div className="col-5">{detailContent}</div>
        </div>
      </div>
    );
  }
}

export default CardDetail;
