import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";
import { MaxContainer } from "../../../../atoms/MaxContainer";

export const TechnologyBehindSectionContainer = styled(MaxContainer)``;

export const TechnologyBehindSectionVideoContainer = styled.div`
  margin-bottom: 190px;
`;

export const TechnologyBehindSectionDescription = styled.p`
  font-family: ${fonts.manjari};
  color: ${colors.text.black};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 46px;
  max-width: 564px;
  margin: 20px auto 54px;
  display: block;
`;

export const TechnologyBehindSectionButtonContainer = styled.div`
  width: 200px;
  height: 53px;
  margin: 0 auto;
  background-color: ${colors.background.black};
`;
