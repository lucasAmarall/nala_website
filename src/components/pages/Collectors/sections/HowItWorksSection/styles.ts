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
  margin-bottom: 132px;
`;

export const HowItWorksDescriptionContainer = styled.div`
  display: flex;
`;

export const HowItWorksDescriptionImage = styled.div`
  width: 342px;
  height: 342px;
`;

export const HowItWorksDescription = styled.p`
  font-family: ${fonts.lohit};
  color: ${colors.text.black};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  max-width: 400px;
  line-height: 40px;
  text-align: left;
  letter-spacing: 0.05rem;
  margin: 11px auto 0;
`;
