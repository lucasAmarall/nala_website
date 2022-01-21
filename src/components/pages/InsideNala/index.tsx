import React from "react";
import { SectionSeparator } from "../../atoms/SectionSeparator";
import { Footer } from "../../molecules/Footer";
import { InsideNalaIntroductionSection } from "./sections/InsideNalaIntroductionSection";
import { YourFavoriteSection } from "./sections/YourFavoriteSection";
import { InsideNalaSection } from "./styles";

const InsiseNala = () => {
  return (
    <InsideNalaSection as="section">
      <InsideNalaIntroductionSection />
      <SectionSeparator />
      <YourFavoriteSection />
      <Footer />
    </InsideNalaSection>
  );
};

export { InsiseNala };
