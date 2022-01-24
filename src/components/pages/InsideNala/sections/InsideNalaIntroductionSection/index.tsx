import React from "react";
import { SectionSeparator } from "../../../../atoms/SectionSeparator";
import {
  InsideNalaIntroductionContainer,
  InsideNalaIntroductionHeaderContainer,
  InsideNalaIntroductionHeaderImageContainer,
  InsideNalaIntroductionHeaderInfoContainer,
  InsideNalaIntroductionHeaderInfoIntroduction,
  InsideNalaIntroductionHeaderInfoSubTitle,
  InsideNalaIntroductionHeaderInfoTitle,
  InsideNalaIntroductionExplanationGrid,
  TextImage,
  NalaAimsText,
} from "./styles";

const pictures = {
  head: require("../../../../../assets/inside_nala_1.png"),
  text: require("../../../../../assets/inside_nala_2.png"),
};

const InsideNalaIntroductionSection = () => {
  return (
    <InsideNalaIntroductionContainer>
      <InsideNalaIntroductionHeaderContainer>
        <InsideNalaIntroductionHeaderImageContainer>
          <img src={pictures.head} alt="NALA" />
        </InsideNalaIntroductionHeaderImageContainer>
        <InsideNalaIntroductionHeaderInfoContainer>
          <InsideNalaIntroductionHeaderInfoTitle>
            INSIDE <span>NALA</span>
          </InsideNalaIntroductionHeaderInfoTitle>
          <InsideNalaIntroductionHeaderInfoSubTitle>
            Our goal is to help declutter <br />
            the market and bring clarity to a rapidly changing industry
          </InsideNalaIntroductionHeaderInfoSubTitle>
          <InsideNalaIntroductionHeaderInfoIntroduction>
            By harnessing the power of Artificial Intelligence and Data Science,
            we can shed light on an inherently complex
            <br />
            industry. We hope to help galleries and collectors find new artists
            that fit in with their collections and be suitable investments while
            helping artists get discovered.
          </InsideNalaIntroductionHeaderInfoIntroduction>
        </InsideNalaIntroductionHeaderInfoContainer>
      </InsideNalaIntroductionHeaderContainer>
      <SectionSeparator />
      <InsideNalaIntroductionExplanationGrid>
        <span>
          NALA (Networked Artistic Learning Algorithm) is an Artificial
          Intelligence platform developed entirely in-house. Driven by a passion
          for creativity and a technical team based out of M.I.T. in Boston, MA,
          NALA is the first true AI-powered Art platform bridging the gap
          between data science and artistic expression. NALA generates unique
          and personalized art suggestions for collectors and galleries, similar
          to how streaming services can make movie and song suggestions for
          users. This means that instead of having to sift through thousands of
          images online to find a new artist, NALA can connect likely matches
          allowing for more engaging and profound connections by showing people
          what they’re hoping to find.
        </span>
        <span>
          NALA doesn’t simply apply search filters and allow users to search for
          artwork based on price and genre. Instead, NALA taps into our database
          of publicly available records. White Stripe Innovations, the company
          behind Nala, has been harvesting virtually all publicly available data
          on the art market over the past year, compiling a massive internal
          database on Artists, Galleries, and Auction records. Similar to how
          Google does deep dives of the internet, reading and compiling the
          data, NALA has been collecting, organizing, and collating everything
          related to art. As users sign up for our platform, we cross-reference
          their information against our internal records to flesh out their
          profile and provide exciting matches.
        </span>
        <span>
          For example, when an artist signs up for an account on NALA, in
          addition to the profile questionnaire users answer when setting up
          their account, our algorithm captures over 20 additional unique data
          points from the public domain to create a fuller understanding of
          where an artist fits into the global market. We consider the number of
          pieces currently available on the market, auction records, market
          movements, market trends, gallery partnerships, art fair attendance,
          etc. Machine Learning is well suited to making connections and teasing
          out driving factors vs. co-variates. As a new artist or collector
          joins the platform, we can immediately start making recommendations
          based on where they fit into our dataset. We also take into account
          that not all artists are currently represented by galleries. We also
          analyze auction records and social media trends for artists, bringing
          these other forms of market credibility into account, leveling the
          field, and allowing more artists to participate in the open market.
          For Galleries, we take past shows, art fair attendance, the average
          selling price of a gallery, most frequent artist sales, and even
          geolocation preferences for understanding their appreciation for local
          and global talent.
        </span>
      </InsideNalaIntroductionExplanationGrid>
      <TextImage src={pictures.text} alt="NALA picture" />
      <NalaAimsText>
        NALA aims to expand the market, allowing for more
        <br />
        connections between artists, galleries, and collectors
        <br />
        while simultaneously making intelligent, targeted matches
        <br />
        between these user groups allowing for unexpected and
        <br />
        new pairings between creators and collectors that might
        <br />
        never have found each other otherwise.
      </NalaAimsText>
    </InsideNalaIntroductionContainer>
  );
};

export { InsideNalaIntroductionSection };
