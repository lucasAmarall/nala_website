import React from "react";
import { Title, SubTitle } from "../../../../atoms/Typograh";
import {
  WhyToJoinSectionContainer,
  WhyToJoinSectionSubTitleContainer,
  WhyToJoinSectionIllustrationsContainer,
  WhyToJoinSectionIllustrationContainer,
  WhyToJoinSectionIllustrationPicture,
  WhyToJoinSectionIllustrationTitleContainer,
  WhyToJoinSectionIllustrationInfoContainer,
  ButtonContainer,
} from "./styles";

const illustrationsImages = {
  1: require("../../../../../assets/why_picture_1.png"),
  2: require("../../../../../assets/why_picture_2.png"),
  3: require("../../../../../assets/why_picture_3.png"),
};

const WhyToJoinSection = () => {
  return (
    <WhyToJoinSectionContainer as="section">
      <Title>Why to join us</Title>
      <WhyToJoinSectionSubTitleContainer>
        <SubTitle>
          We support all kind of professionals in the art world and are prepared
          to deliver the best product that will make your life easier.
        </SubTitle>
      </WhyToJoinSectionSubTitleContainer>
      <WhyToJoinSectionIllustrationsContainer>
        <WhyToJoinSectionIllustrationContainer>
          <WhyToJoinSectionIllustrationPicture
            src={illustrationsImages["1"]}
            alt="illustration placeholder"
          />
          <WhyToJoinSectionIllustrationTitleContainer>
            Artists
          </WhyToJoinSectionIllustrationTitleContainer>
          <WhyToJoinSectionIllustrationInfoContainer>
            <p>
              {" "}
              <span>
                NALA is not another Social Media platform; there is no
                engagement, building followers, or requirement to post
                regularly;{" "}
              </span>
              <span>imply upload your art, and NALA does all the rest;</span>
              <span>
                NALA finds the collectors most likely to become your next buyer;
              </span>
              <span>
                Take part in one of the largest art databases in the world;
              </span>
              <span>Connect with Galleries that match your style.</span>
            </p>
            <ButtonContainer />
          </WhyToJoinSectionIllustrationInfoContainer>
        </WhyToJoinSectionIllustrationContainer>
        <WhyToJoinSectionIllustrationContainer>
          <WhyToJoinSectionIllustrationPicture
            src={illustrationsImages["2"]}
            alt="illustration placeholder"
          />
          <WhyToJoinSectionIllustrationTitleContainer>
            Galleries
          </WhyToJoinSectionIllustrationTitleContainer>
          <WhyToJoinSectionIllustrationInfoContainer>
            <p>
              {" "}
              <span>
                NALA finds the collectors that are most likely to become your
                next buyer;
              </span>
              <span>
                Join the first true AI-powered Art platform that finds art that
                fits your gallery;
              </span>
              <span>Enter the largest art database in the world;</span>
              <span>
                Sell your existing collection or upgrade with new pieces;
              </span>
              <span>Find new talents from all around the world.</span>
            </p>
            <ButtonContainer />
          </WhyToJoinSectionIllustrationInfoContainer>
        </WhyToJoinSectionIllustrationContainer>
        <WhyToJoinSectionIllustrationContainer>
          <WhyToJoinSectionIllustrationPicture
            src={illustrationsImages["3"]}
            alt="illustration placeholder"
          />
          <WhyToJoinSectionIllustrationTitleContainer>
            Collectors
          </WhyToJoinSectionIllustrationTitleContainer>
          <WhyToJoinSectionIllustrationInfoContainer>
            <p>
              <span>NALA brings clarity to a rapidly changing industry;</span>
              <span>Avoid double-dealing and market manipulation;</span>
              <span>
                Expand your horizons and be exposed to artists outside your
                usual circle;
              </span>
              <span>Invest based on data;</span>
              <span>Have fun searching for and collecting new art.</span>
            </p>
            <ButtonContainer />
          </WhyToJoinSectionIllustrationInfoContainer>
        </WhyToJoinSectionIllustrationContainer>
      </WhyToJoinSectionIllustrationsContainer>
    </WhyToJoinSectionContainer>
  );
};

export { WhyToJoinSection };
