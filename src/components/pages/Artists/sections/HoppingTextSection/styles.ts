import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";

export const HoppingTextContainer = styled.div`
  height: 590px;
  width: 100%;
  padding: 160px 330px;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;

  p {
    font-family: ${fonts.lohit};
    color: ${colors.text.white};
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    max-width: 660px;
    display: inline-block;
    text-align: center;
    line-height: 54px;
    letter-spacing: 0.05rem;
  }
`;
