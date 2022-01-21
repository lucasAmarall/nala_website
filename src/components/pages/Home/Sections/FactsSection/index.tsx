import React from "react";
import { Title } from "../../../../atoms/Typograh";
import {
  FactsAboutSectionContainer,
  FactsAboutSectionCardsContainer,
  FactsAboutSectionCard,
  FactsAboutSectionCardPicture,
  FactsAboutSectionCardTitle,
  FactsAboutSectionCardDescription,
} from "./styles";

const cardIcons = {
  1: require("../../../../../assets/facts_icon_1.png"),
  2: require("../../../../../assets/facts_icon_2.png"),
  3: require("../../../../../assets/facts_icon_3.png"),
  4: require("../../../../../assets/facts_icon_4.png"),
  5: require("../../../../../assets/facts_icon_5.png"),
};

const FactsSection = () => {
  return (
    <FactsAboutSectionContainer as="section">
      <Title>Facts about NALA</Title>
      <FactsAboutSectionCardsContainer>
        <FactsAboutSectionCard>
          <FactsAboutSectionCardPicture src={cardIcons[1]} />
          <FactsAboutSectionCardTitle>
            <span>100M Art</span>
            <br />
            <span>Data Points</span>
          </FactsAboutSectionCardTitle>
          <FactsAboutSectionCardDescription>
            Collected over the years to make our engine the best in the industry
          </FactsAboutSectionCardDescription>
        </FactsAboutSectionCard>
        <FactsAboutSectionCard>
          <FactsAboutSectionCardPicture src={cardIcons[2]} />
          <FactsAboutSectionCardTitle>
            <span>Full of possibilities</span>
          </FactsAboutSectionCardTitle>
          <FactsAboutSectionCardDescription>
            More than 400.000 Artists and Galleries available worldwide
          </FactsAboutSectionCardDescription>
        </FactsAboutSectionCard>
        <FactsAboutSectionCard>
          <FactsAboutSectionCardPicture src={cardIcons[3]} />
          <FactsAboutSectionCardTitle
            style={{ marginBottom: 38, marginTop: 46 }}
          >
            <span>We support</span>
            <br />
            <span>Artists</span>
          </FactsAboutSectionCardTitle>
          <FactsAboutSectionCardDescription>
            100% Supports artists from unrepresentative areas and unprivileged
            backgrounds
          </FactsAboutSectionCardDescription>
        </FactsAboutSectionCard>
        <FactsAboutSectionCard>
          <FactsAboutSectionCardPicture src={cardIcons[4]} />
          <FactsAboutSectionCardTitle>
            <span>Keep growing</span>
            <br />
            <span>everyday</span>
          </FactsAboutSectionCardTitle>
          <FactsAboutSectionCardDescription>
            Ongoing updates in NALA’s database
          </FactsAboutSectionCardDescription>
        </FactsAboutSectionCard>
        <FactsAboutSectionCard>
          <FactsAboutSectionCardPicture src={cardIcons[5]} />
          <FactsAboutSectionCardTitle>
            <span>Buying directly </span>
            <br />
            <span>from artists</span>
          </FactsAboutSectionCardTitle>
          <FactsAboutSectionCardDescription>
            NALA doesn’t charge comission fees
          </FactsAboutSectionCardDescription>
        </FactsAboutSectionCard>
      </FactsAboutSectionCardsContainer>
    </FactsAboutSectionContainer>
  );
};

export { FactsSection };
