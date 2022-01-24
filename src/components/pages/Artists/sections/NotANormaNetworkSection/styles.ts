import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";

export const NotANormalNetworkText = styled.p`
  font-family: ${fonts.lohit};
  color: ${colors.text.black};
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  max-width: 643px;
  margin: 0 auto;
  line-height: 52px;
`;

export const NotANormalNetworkBar = styled.div`
  height: 430px;
  width: 100%;
  padding: 160px 330px;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 120px;
`;
