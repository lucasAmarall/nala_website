import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";
import { MaxContainer } from "../../../../atoms/MaxContainer";
import { SubTitle } from "../../../../atoms/Typograh";

export const ArtistsIntroductionContainer = styled(MaxContainer)`
  display: flex;
`;

export const ArtistsIntroductionInfoContainer = styled.div`
  width: 707px;
  z-index: 1;
`;

export const ArtistsIntroductionTitle = styled.h1`
  font-family: ${fonts.karla};
  color: ${colors.text.black};

  font-style: normal;
  font-weight: bold;
  font-size: 235px;
  line-height: 81.9%;
  letter-spacing: -0.04em;
  margin-top: 156px;
  text-transform: uppercase;
  justify-content: flex-end;
  display: flex;

  span {
    color: white;
  }
`;

export const ArtistsIntroductionSubtitle = styled(SubTitle)`
  margin-top: 75px;
  margin-left: 60px;
`;

export const ArtistsIntroductionDescription = styled(SubTitle)`
  color: ${colors.text.black};
  background-color: ${colors.background.gray};
  width: 844px;
  min-width: 844px;
  display: inline-block;
  margin-top: 85px;
  padding: 45px 75px;
  letter-spacing: 0.05rem;
  position: relative;
  left: -137px;
`;

export const ArtistsIntroductionImageContainer = styled.div`
  width: 611px;
  min-width: 611px;
  height: 825px;

  img {
    width: inherit;
    min-width: inherit;
    height: inherit;
  }
`;
