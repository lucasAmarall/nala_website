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
        When a user sets up their account, we take their preferences and add
        their profile to our database. In addition to the questions that users
        fill out, we have built the world's largest art database and use this
        data to "flesh out" user profiles. Our database captures over 20
        additional unique data points from the public domain.
        <br />
        <br />
        We consider the number of pieces currently available on the market,
        auction records, market movements, market trends, gallery partnerships,
        art fair attendance, and shows. We also understand that not all artists
        are represented by galleries. So we analyze auction records, social
        media trends, hashtags, and analytics taking these other forms of market
        exposure into account.
      </HowItWorksDescription>
    </HowItWorksSectionContainer>
  );
};

export { HowItWorksSection };
