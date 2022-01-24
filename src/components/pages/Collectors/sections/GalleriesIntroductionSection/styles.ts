import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";
import { MaxContainer } from "../../../../atoms/MaxContainer";
import { SubTitle } from "../../../../atoms/Typograh";

export const CollectorsIntroductionContainer = styled(MaxContainer)`
  display: flex;
`;

export const CollectorsIntroductionInfoContainer = styled.div`
  width: 471px;
  z-index: 1;
`;

export const CollectorsIntroductionTitle = styled.div`
  font-family: ${fonts.karla};
  color: ${colors.text.black};
  font-style: normal;
  font-weight: bold;
  font-size: 216px;
  margin-top: 156px;
  text-transform: uppercase;

  span {
    color: white;
  }
`;

export const CollectorsIntroductionSubtitle = styled(SubTitle)`
  margin-top: 131px;
`;

export const CollectorsIntroductionImageContainer = styled.div`
  min-width: 849px;
  height: 1049px;

  img {
    min-width: inherit;
    height: inherit;
  }
`;

export const EndingBar = styled.div`
  margin-top: 120px;
  height: 430px;
  width: 100%;
  position: relative;
  text-align: right;
  background-size: 100% 100%;
`;
