import React from "react";
import { Button } from "../../../../atoms/Button";

import {
  MatchmakerSectionContainer,
  MatchmakerSectionImageContainer,
  MatchmakerSectionInfoContainer,
  MatchmakerSectionTitle,
  MatchmakerSectionDescription,
  MatchmakerSectionButtonContainer,
  MatchmakerSectionDownloadLabel,
  MatchmakerSectionButtonIcon,
  MatchmakerSectionButtonText,
} from "./styles";

const assets = {
  home_big_art: require("../../../../../assets/home_big_art.png"),
  apple_icon: require("../../../../../assets/apple_icon.png"),
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
        <MatchmakerSectionButtonContainer>
          <Button colorSchema="light">
            <MatchmakerSectionButtonIcon
              style={{ backgroundImage: `url(${assets.apple_icon})` }}
            />
            <MatchmakerSectionButtonText>
              Get started
            </MatchmakerSectionButtonText>
          </Button>
        </MatchmakerSectionButtonContainer>
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
