import React from "react";
import { SectionSeparator } from "../../atoms/SectionSeparator";
import { CardSection } from "./sections/CardSection";
import { ArtistsIntroductionSection } from "./sections/ArtistsIntroductionSection";
import { HoppingTextSection } from "./sections/HoppingTextSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { ArtistsContainer } from "./styles";
import { NotANormaNewtorkSection } from "./sections/NotANormaNetworkSection";

const Artists = () => {
  return (
    <ArtistsContainer>
      <ArtistsIntroductionSection />
      <SectionSeparator />
      <NotANormaNewtorkSection />
      <SectionSeparator />
      <HowItWorksSection />
      <SectionSeparator />
      <CardSection />
      <SectionSeparator />
      <HoppingTextSection />
      <SectionSeparator />
    </ArtistsContainer>
  );
};

export { Artists };
