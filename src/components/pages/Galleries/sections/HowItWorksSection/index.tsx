import React from "react";

import {
  HowItWorksSectionContainer,
  HowItWorksTitle,
  HowItWorksDescription,
} from "./styles";

const HowItWorksSection = () => {
  return (
    <HowItWorksSectionContainer>
      <HowItWorksTitle>How it works</HowItWorksTitle>
      <HowItWorksDescription>
        Our system helps galleries find new artists that fit in with their
        collections and will be suitable investments for their clients. We are
        creating compelling and unique connections between creators and
        enthusiasts. For Galleries, we take past shows, art fair attendance, the
        average selling price of a gallery, most frequent artist sales, and even
        geolocation preferences for understanding their appreciation for local
        and global talent. We do not simply suggest the most popular artists in
        a given genre and dig deeper into the things that matter to us.
      </HowItWorksDescription>
    </HowItWorksSectionContainer>
  );
};

export { HowItWorksSection };
