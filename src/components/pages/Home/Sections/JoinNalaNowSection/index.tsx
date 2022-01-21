import React from "react";
import {
  JoinNalaNowSectionContainer,
  JoinNalaNowSectionImageContainer,
  JoinNalaNowSectionInfoContainer,
  JoinNalaNowSectionTitle,
  JoinNalaNowSectionDescription,
  JoinNalaNowSectionButtonContainer,
} from "./styles";

const image = require("../../../../../assets/join_nala_now_image.png");

const JoinNalaNowSection = () => {
  return (
    <JoinNalaNowSectionContainer as="section">
      <JoinNalaNowSectionImageContainer>
        <img src={image} alt="foo" />
      </JoinNalaNowSectionImageContainer>
      <JoinNalaNowSectionInfoContainer>
        <div>
          <JoinNalaNowSectionTitle>
            <span className="small">JOIN</span>
            <span>
              <span>N</span>ALA
            </span>
            <span>
              <span>N</span>OW
            </span>
          </JoinNalaNowSectionTitle>
          <JoinNalaNowSectionDescription>
            Using NALA is incredibly intuitive and fun. Every time you open the
            app, you'll be shown a customized curated list of artworks NALA
            believes will be a good fit for you. Swiping right to like an image
            (just like Tinder) or left if you don’t like an image keeps track of
            which works of art you enjoy and allows NALA to understand your
            personal preferences on a deeper level. Swiping right on multiple
            pieces by the same artist earns a Match, and you will be able to
            start communicating directly with the artist or gallery while
            expanding your artistic circle. Happy swiping!
          </JoinNalaNowSectionDescription>
        </div>
        <JoinNalaNowSectionButtonContainer />
      </JoinNalaNowSectionInfoContainer>
    </JoinNalaNowSectionContainer>
  );
};

export { JoinNalaNowSection };
