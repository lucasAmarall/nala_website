import React from "react";
import { SectionSeparator } from "../../atoms/SectionSeparator";
import { AboutIntroductionSection } from "./Sections/AboutIntroductionSection";
import { BenSection } from "./Sections/BenSection";
import { AboutUSContainer } from "./styles";

const AboutUS = () => {
  return (
    <AboutUSContainer>
      <AboutIntroductionSection />
      <SectionSeparator />
      <BenSection />
      <SectionSeparator />
    </AboutUSContainer>
  );
};

export { AboutUS };
