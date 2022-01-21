import React from "react";

import {
  LastTimeSectionImagesContainer,
  LastTimeSectionContainerHead,
  LastTimeSectionContainer,
  LastTimeSectionInfoContainer,
  LastTimeSectionInfoContainerDescription,
  LastTimeSectionInfoContainerTitle,
  LastTimeSectionContainerTestimonialContainer,
  LastTimeSectionContainerTestimonial,
  LastTimeSectionContainerTestimonialAuthor,
} from "./styles";

const images = {
  first: require("../../../../../assets/last_time_1.png"),
  second: require("../../../../../assets/last_time_2.png"),
};

const LastTimeSection = () => {
  return (
    <LastTimeSectionContainer as="section">
      <LastTimeSectionContainerHead>
        <LastTimeSectionImagesContainer>
          <img src={images.first} alt="piece of art" />
          <img src={images.second} alt="piece of art" />
        </LastTimeSectionImagesContainer>
        <LastTimeSectionInfoContainer>
          <LastTimeSectionInfoContainerTitle>
            When was the last time you
            <br />
            received an art recommendation
            <br />
            email and liked the art?
          </LastTimeSectionInfoContainerTitle>
          <LastTimeSectionInfoContainerDescription>
            NALA (Networked Artistic Learning Algorithm) is an Artificial
            <br />
            Intelligence platform developed entirely in-house.
            <br />
            Driven by a passion for creativity and a technical team based out of
            <br />
            M.I.T. in Boston, MA, NALA is the first true AI-powered Art platform
            <br />
            bridging the gap between data science and artistic expression.
            <br />
            <br />
            <span>
              The NALA team has created a unique system that redefines
              <br />
              connections between creators and enthusiasts. Behind the science
              <br />
              of matchmaking lies a deep understanding of the desires of both
              <br />
              parties. NALA accomplishes this by combining data science with
              <br />
              Artificial Intelligence and decades of hands-on industry
              experience.
            </span>
          </LastTimeSectionInfoContainerDescription>
        </LastTimeSectionInfoContainer>
      </LastTimeSectionContainerHead>
      <LastTimeSectionContainerTestimonialContainer>
        <LastTimeSectionContainerTestimonial>
          “I never understood why in a world with so much creativity, you can
          walk into galleries in almost any major city and see the same artists
          on the walls. Art is supposed to be about individualism, and yet
          sometimes the market seems anything but. With the commercialism of
          creativity, we have limited ourselves and our ability to find new
          artists."
        </LastTimeSectionContainerTestimonial>
        <LastTimeSectionContainerTestimonialAuthor>
          Ben Gulak - Founder
        </LastTimeSectionContainerTestimonialAuthor>
      </LastTimeSectionContainerTestimonialContainer>
    </LastTimeSectionContainer>
  );
};

export { LastTimeSection };
