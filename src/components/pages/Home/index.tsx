import React from "react";
import { HomeContainer } from "./styles";
import { MatchmakerSection } from "./Sections/MatchmakerSection";
import { LastTimeSection } from "./Sections/LastTimeSection";
import { FactsSection } from "./Sections/FactsSection";
import { WhyToJoinSection } from "./Sections/WhyToJoinSection";
import { Footer } from "../../molecules/Footer";
import { TechnologyBehindSection } from "./Sections/TechnologyBehindSection";
import { JoinNalaNowSection } from "./Sections/JoinNalaNowSection";
import { SectionSeparator } from "../../atoms/SectionSeparator";

const Home = () => {
  return (
    <HomeContainer>
      <MatchmakerSection />
      <SectionSeparator />
      <LastTimeSection />
      <SectionSeparator />
      <FactsSection />
      <SectionSeparator />
      <WhyToJoinSection />
      <SectionSeparator />
      <TechnologyBehindSection />
      <SectionSeparator />
      <JoinNalaNowSection />
      <SectionSeparator />
      <Footer />
    </HomeContainer>
  );
};

export { Home };
