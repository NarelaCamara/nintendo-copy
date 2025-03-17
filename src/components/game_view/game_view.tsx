import React from "react";
import ESRB_Rating from "../esrb_rating/esrb_rating";
import CardGame from "../card_game/card_game";
import DescriptionGame from "../description_game/description_game";
import SupportedPlayModesGame from "../supported_play_modes_game/supported_play_modes_game";
import CharacteristicsGame from "../characteristics_game/characteristics_game";
import RecentlyViewed from "../recently_viewed/recently_viewed";

const GameView = () => {
  return (
    <div className="w-2/3 mx-auto max-w-screen-lg">
      <CardGame />
      <DescriptionGame />
      <div className="flex flex-row justify-around">
        <div className="p-4">
          <ESRB_Rating />
        </div>

        <div className="p-4">
          <SupportedPlayModesGame />
        </div>
      </div>
      <CharacteristicsGame />
      <RecentlyViewed />

      <p className="p-2">
        WARNING: If you have epilepsy or have had seizures or other unusual
        reactions to flashing lights or patterns, consult a doctor before
        playing video games. All users should read the Health and Safety
        Information available in the system settings before using this software.
      </p>
      <p className="p-2">
        Nintendo Switch Online membership (sold separately) and Nintendo Account
        required for online play. Not available in all countries. Internet
        access required for online features. Terms apply.
        nintendo.com/switch-online
      </p>
      <p className="p-2">
        Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
      </p>
    </div>
  );
};

export default GameView;
