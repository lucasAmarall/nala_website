import React from "react";

import {
  HowItWorksSectionContainer,
  HowItWorksTitle,
  HowItWorksDescription,
  HowItWorksDescriptionContainer,
  HowItWorksDescriptionImage,
} from "./styles";

const pictures = {
  phone: require("../../../../../assets/collectors_3.png"),
};
const HowItWorksSection = () => {
  return (
    <HowItWorksSectionContainer>
      <HowItWorksTitle>How it works</HowItWorksTitle>
      <HowItWorksDescriptionContainer>
        <HowItWorksDescription>
          Every time you open NALA, you will be shown a curated selection of
          images that meet your criteria. Swiping right to like an image (just
          like Tinder) or left if you don’t like an image keeps track of which
          works of art you liked and allows NALA to understand your personal
          preferences on a deeper level.
        </HowItWorksDescription>
        <HowItWorksDescriptionImage
          style={{ background: `url(${pictures.phone})` }}
        />
        <HowItWorksDescription>
          Letting NALA know what you don’t like is also essential since NALA
          learns from you! Swiping right on multiple pieces by the same artist
          earns a Match, and you will be able to start communicating directly
          with the artist or gallery while expanding your artistic circle.
        </HowItWorksDescription>
      </HowItWorksDescriptionContainer>
    </HowItWorksSectionContainer>
  );
};

export { HowItWorksSection };
