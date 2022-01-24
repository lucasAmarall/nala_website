import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";
import { MaxContainer } from "../../../../atoms/MaxContainer";
import { SubTitle } from "../../../../atoms/Typograh";

export const GalleriesIntroductionContainer = styled(MaxContainer)`
  display: flex;
`;

export const GalleriesIntroductionInfoContainer = styled.div`
  width: 471px;
  z-index: 1;
`;

export const GalleriesIntroductionTitle = styled.h1`
  font-family: ${fonts.karla};
  color: ${colors.text.black};
  font-style: normal;
  font-weight: bold;
  font-size: 265px;
  text-transform: uppercase;

  span {
    color: white;
  }
`;

export const GalleriesIntroductionSubtitle = styled(SubTitle)`
  margin-top: 87px;
`;

export const GalleriesIntroductionDescription = styled(SubTitle)`
  color: ${colors.text.black};
  background-color: ${colors.background.gray};
  width: 809px;
  display: inline-block;
  margin-top: 152px;
  padding: 45px 75px 116px;
  letter-spacing: 0.05rem;
`;

export const GalleriesIntroductionImageContainer = styled.div`
  min-width: 849px;
  height: 1049px;

  img {
    min-width: inherit;
    height: inherit;
  }
`;
