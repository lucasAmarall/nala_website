import React from "react";
import { SectionSeparator } from "../../atoms/SectionSeparator";
import { CardSection } from "./sections/CardSection";
import { GalleriesIntroductionSection } from "./sections/GalleriesIntroductionSection";
import { HoppingTextSection } from "./sections/HoppingTextSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { GalleriesContainer } from "./styles";

const Galleries = () => {
  return (
    <GalleriesContainer>
      <GalleriesIntroductionSection />
      <SectionSeparator />
      <HowItWorksSection />
      <SectionSeparator />
      <HoppingTextSection />
      <SectionSeparator />
      <CardSection />
      <SectionSeparator />
    </GalleriesContainer>
  );
};

export { Galleries };
