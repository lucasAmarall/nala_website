import styled from "styled-components";
import { fonts } from "../../../constants/fonts";

export const ButtonContainer = styled.a`
  display: inline-flex;
  width: 100%;
  height: 100%;
  cursor: pointer;

  border: 1px solid;
  text-align: center;
  align-items: center;
  justify-content: center;

  font-family: ${fonts.roboto};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
`;
