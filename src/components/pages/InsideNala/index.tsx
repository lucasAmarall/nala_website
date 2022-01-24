import React from "react";
import { SectionSeparator } from "../../atoms/SectionSeparator";
import { InsideNalaIntroductionSection } from "./sections/InsideNalaIntroductionSection";
import { YourFavoriteSection } from "./sections/YourFavoriteSection";
import { InsideNalaSection } from "./styles";

const InsiseNala = () => {
  return (
    <InsideNalaSection as="section">
      <InsideNalaIntroductionSection />
      <SectionSeparator />
      <YourFavoriteSection />
    </InsideNalaSection>
  );
};

export { InsiseNala };
