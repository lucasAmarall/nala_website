import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";
import { MaxContainer } from "../../../../atoms/MaxContainer";

export const FactsAboutSectionContainer = styled(MaxContainer)``;

export const FactsAboutSectionCardsContainer = styled.div`
  display: flex;
  margin-top: 135px;
  cursor: pointer;

  &:hover > div:not(hover) {
    opacity: 0.5;
  }

  &:hover > div:hover {
    opacity: 1;
  }
`;

export const FactsAboutSectionCard = styled.div`
  background: linear-gradient(180deg, #5770f3 0%, #61b0ec 100%);
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  width: 248px;
  height: 396px;
  margin-left: 15px;
  transition: 0.15s all ease-in-out;
  padding: 55px 39px 67px 31px;

  &:first-child {
    margin-left: 0px;
  }

  &:last-child {
    margin-right: 0px;
  }

  &:hover {
    z-index: 1;
    transform: scaleX(1.187) scaley(1.179);
  }
`;

export const FactsAboutSectionCardPicture = styled.img`
  margin: 0 auto;
  display: block;
`;

export const FactsAboutSectionCardTitle = styled.p`
  font-family: ${fonts.manjari};
  color: ${colors.text.white};
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-top: 56px;
  margin-bottom: 45px;

  span {
    white-space: nowrap;
  }
`;

export const FactsAboutSectionCardDescription = styled.p`
  font-family: ${fonts.manjari};
  color: ${colors.text.white};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;
