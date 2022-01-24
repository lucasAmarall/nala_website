import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";
import { MaxContainer } from "../../../../atoms/MaxContainer";

export const NalaLearnsContainer = styled(MaxContainer)`
  display: flex;
  max-width: 1141px;
`;

export const NalaLearnsImageContainer = styled.div`
  width: 513px;
  height: 789px;

  img {
    width: inherit;
    height: inherit;
  }
`;

export const NalaLearnsInfoContainer = styled.div`
  background: ${colors.background.gray};
  padding: 100px 75px;
  p {
    font-family: ${fonts.lohit};
    color: ${colors.text.black};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 40px;
    letter-spacing: 0.05rem;;
  }
`;
