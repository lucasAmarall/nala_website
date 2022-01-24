import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";
import { MaxContainer } from "../../../../atoms/MaxContainer";

export const HowItWorksSectionContainer = styled(MaxContainer)`
  text-align: center;
`;

export const HowItWorksTitle = styled.h1`
  font-family: ${fonts.karla};
  color: ${colors.text.black};
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  display: inline-block;
  margin-bottom: 60px;
`;

export const HowItWorksDescription = styled.p`
  font-family: ${fonts.lohit};
  color: ${colors.text.black};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  max-width: 643px;
  line-height: 40px;
  text-align: left;
  margin: 0 auto;
`;
