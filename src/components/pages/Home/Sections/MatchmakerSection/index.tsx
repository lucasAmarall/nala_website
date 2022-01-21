import React from "react";

import {
  MatchmakerSectionContainer,
  MatchmakerSectionImageContainer,
  MatchmakerSectionInfoContainer,
  MatchmakerSectionTitle,
  MatchmakerSectionDescription,
  MatchmakerSectionButtonContainer,
  MatchmakerSectionDownloadLabel,
} from "./styles";

const assets = {
  home_big_art: require("../../../../../assets/home_big_art.png"),
};

const MatchmakerSection = () => {
  return (
    <MatchmakerSectionContainer as="section">
      <MatchmakerSectionInfoContainer>
        <MatchmakerSectionTitle>
          <span>NALA: </span>
          <span>THE GLOBAL</span>
          <span>ART</span>
          <span>MATCHMAKER</span>
        </MatchmakerSectionTitle>
        <MatchmakerSectionDescription>
          Artificial Intelligence powered by the world’s largest and most
          expansive art database.
        </MatchmakerSectionDescription>
        <MatchmakerSectionButtonContainer />
        <MatchmakerSectionDownloadLabel>
          NALA is free to download
        </MatchmakerSectionDownloadLabel>
      </MatchmakerSectionInfoContainer>
      <MatchmakerSectionImageContainer>
        <img src={assets.home_big_art} alt="piece of art" />
      </MatchmakerSectionImageContainer>
    </MatchmakerSectionContainer>
  );
};

export { MatchmakerSection };
