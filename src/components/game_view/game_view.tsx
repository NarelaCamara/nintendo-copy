import React from "react";
import ESRB_Rating from "../esrb_rating/esrb_rating";
import CardGame from "../card_game/card_game";
import DescriptionGame from "../description_game/description_game";
import SupportedPlayModesGame from "../supported_play_modes_game/supported_play_modes_game";
import CharacteristicsGame from "../characteristics_game/characteristics_game";
import RecentlyViewed from "../recently_viewed/recently_viewed";

const GameView = () => {
  return (
    <div>
      <CardGame />
      <DescriptionGame />
      <div>
        <ESRB_Rating />
        <SupportedPlayModesGame />
      </div>
      <CharacteristicsGame />
      <RecentlyViewed />
    </div>
  );
};

export default GameView;
