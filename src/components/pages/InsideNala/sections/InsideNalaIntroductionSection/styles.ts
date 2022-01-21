import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";
import { MaxContainer } from "../../../../atoms/MaxContainer";
import { SubTitleSmall } from "../../../../atoms/Typograh";

export const InsideNalaIntroductionContainer = styled(MaxContainer)``;

export const InsideNalaIntroductionHeaderContainer = styled.div`
  display: flex;
`;

export const InsideNalaIntroductionHeaderImageContainer = styled.div`
  width: 634px;
  height: 895px;

  img {
    width: inherit;
    height: inherit;
  }
`;

export const InsideNalaIntroductionHeaderInfoContainer = styled.div`
  margin-left: 53px;
`;

export const InsideNalaIntroductionHeaderInfoTitle = styled.h1`
  font-family: ${fonts.karla};
  color: ${colors.text.black};
  font-style: normal;
  font-weight: bold;
  font-size: 144px;
  line-height: 144px;
  margin-bottom: 75px;

  span {
    font-size: 190px;
    line-height: 80.9px;
  }
`;

export const InsideNalaIntroductionHeaderInfoSubTitle = styled.h2`
  font-family: ${fonts.karla};
  color: ${colors.text.black};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 52px;
  margin-bottom: 110px;
`;

export const InsideNalaIntroductionHeaderInfoIntroduction = styled(
  SubTitleSmall
)``;

export const InsideNalaIntroductionExplanationGrid = styled.p`
  font-family: ${fonts.karla};
  color: ${colors.text.black};
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 52px;
  margin-bottom: 120px;

  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  grid-column-gap: 54px;
  grid-row-gap: 120px;

  span {
    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 3;
    }
    &:nth-child(2) {
      grid-area: 1 / 4 / 2 / 6;
    }
    &:nth-child(3) {
      grid-area: 2 / 1 / 3 / 6;
    }
  }
`;

export const TextImage = styled.img`
  margin: 0 auto;
  width: 1012px;
  height: 616px;
  display: block;
  margin-bottom: 123px;
`;

export const NalaAimsText = styled.p`
  color: ${colors.text.black};
  font-family: ${fonts.lohit};
  background: ${colors.background.gray};
  padding: 45px 33px;
  width: 619px;
  height: 330px;
  margin: 0 auto;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 40px;
`;
