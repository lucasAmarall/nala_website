import styled from "styled-components";
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/fonts";

export const Title = styled.h1`
  font-family: ${fonts.karla};
  color: ${colors.text.black};
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 84px;
  text-align: center;
`;

export const SmallTitle = styled.h1`
  font-family: ${fonts.karla};
  color: ${colors.text.black};
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
`;

export const SubTitle = styled.h2`
  color: ${colors.text.blue};
  font-family: ${fonts.lohit};
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 52px;
  letter-spacing: 0.05rem;
`;

export const SubTitleSmall = styled.h2`
  font-family: ${fonts.lohit};
  color: ${colors.text.black};
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 52px;
`;
