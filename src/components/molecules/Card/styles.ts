import styled from "styled-components";
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/fonts";

export const CardContainer = styled.div``;

export const CardIcon = styled.img`
  margin-bottom: 30px;
  margin-left: 32px;
`;

export const CardDescription = styled.p`
  font-family: ${fonts.lohit};
  background-color: ${colors.background.gray};
  color: ${colors.text.black};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 40px;
  padding: 30px 33px 40px;
  letter-spacing: 0.05rem;
`;
