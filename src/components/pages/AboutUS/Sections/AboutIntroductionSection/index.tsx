import React from "react";

import {
  AboutUSHeadImage,
  AboutUSHeadContainer,
  AboutUSHeadDescription,
} from "./styles";

const pictures = {
  head: require("../../../../../assets/about_us_1.png"),
};

const AboutIntroductionSection = () => {
  return (
    <AboutUSHeadContainer as="section">
      <AboutUSHeadImage src={pictures.head} />
      <h1>about us</h1>
      <AboutUSHeadDescription>
        Similar to the gap NALA is bridging between the creative arts and data
        science, our team is comprised of art enthusiasts and computer
        scientists. Our founder is both a painter and M.I.T. Computer & Data
        Scientist. The majority of our team have backgrounds in either
        Artificial Intelligence or Data Science, while our Community Manager has
        over a decade of experience running one of London's premier Street Art
        Galleries. Our team shares a passion for helping create new connections
        with people and our multidisciplinary skill set enabled us to build
        something truly unique and powerful.{" "}
      </AboutUSHeadDescription>
    </AboutUSHeadContainer>
  );
};

export { AboutIntroductionSection };
