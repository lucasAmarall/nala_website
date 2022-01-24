import React from "react";
import { SectionSeparator } from "../../atoms/SectionSeparator";
import { BenefitsSection } from "./sections/BenefitsSection";
import { GalleriesIntroductionSection } from "./sections/GalleriesIntroductionSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { NalaLearnsSection } from "./sections/NalaLearnsSection";
import { GalleriesContainer } from "./styles";

const Collectors = () => {
  return (
    <GalleriesContainer>
      <GalleriesIntroductionSection />
      <SectionSeparator />
      <BenefitsSection />
      <SectionSeparator />
      <HowItWorksSection />
      <SectionSeparator />
      <NalaLearnsSection />
      <SectionSeparator />
    </GalleriesContainer>
  );
};

export { Collectors };
