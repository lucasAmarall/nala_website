import styled from "styled-components";
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/fonts";

export const MenuContainer = styled.header`
  width: 135px;
`;

export const MenuTitle = styled.h1`
  font-size: 0.00000001rem;
  display: inline-block;
  margin-bottom: 165px;
`;

export const MenuOption = styled.a`
  font-family: ${fonts.karla};
  color: ${colors.text.black};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: right;
  text-transform: uppercase;
  margin-bottom: 43px;
  text-decoration: none;
  display: inline-block;
`;
