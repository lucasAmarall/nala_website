import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";
import { MaxContainer } from "../../../../atoms/MaxContainer";

export const AboutUSHeadContainer = styled(MaxContainer)`
  display: flex;
  align-items: flex-end;

  h1 {
    font-size: 0.00001rem;
    position: absolute;
    left: 999999999px;
  }
`;

export const AboutUSHeadImage = styled.img`
  margin-right: 42px;
`;

export const AboutUSHeadDescription = styled.p`
  font-family: ${fonts.lohit};
  color: ${colors.text.black};
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 52px;
  width: 557px;
`;
