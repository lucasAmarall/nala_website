import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";
import { MaxContainer } from "../../../../atoms/MaxContainer";

export const WhyToJoinSectionContainer = styled(MaxContainer)``;

export const WhyToJoinSectionTitle = styled.h1``;

export const WhyToJoinSectionSubTitleContainer = styled.div`
  max-width: 604px;
  margin: 0 auto;
  margin-top: 26px;
  margin-bottom: 80px;
`;

export const WhyToJoinSectionIllustrationsContainer = styled.ul`
  width: 100%;
  display: flex;
`;

export const WhyToJoinSectionIllustrationContainer = styled.li`
  width: 33.33%;
  max-width: 405px;
  margin-right: 66px;

  &:last-child {
    margin-right: 0px;
  }
`;

export const WhyToJoinSectionIllustrationPicture = styled.img`
  height: 395px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 80px;
`;

export const WhyToJoinSectionIllustrationTitleContainer = styled.p`
  color: ${colors.text.white};
  background: ${colors.background.black};
  font-family: ${fonts.manjari};
  width: 314px;
  margin: 0 auto;
  font-weight: bold;
  line-height: 80px;
  text-align: center;
  font-size: 36px;
`;

export const WhyToJoinSectionIllustrationInfoContainer = styled.div`
  background-color: ${colors.background.gray};
  padding: 66px 51px;
  height: 705px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    color: ${colors.text.blue};
    font-family: ${fonts.manjari};
    font-weight: bold;
    font-size: 18px;
    line-height: 40px;

    span {
      display: block;
      position: relative;

      &:before {
        content: "";
        width: 5px;
        height: 5px;
        display: block;
        background-color: ${colors.background.blue};
        border-radius: 5px;
        position: absolute;
        top: 14px;
        left: -11px;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 199px;
  height: 60px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #1a1a1a;
  margin: 34px auto 0;
`;
