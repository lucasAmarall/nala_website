import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";
import { MaxContainer } from "../../../../atoms/MaxContainer";

export const JoinNalaNowSectionContainer = styled(MaxContainer)`
  display: flex;
  flex-direction: row;
`;

export const JoinNalaNowSectionImageContainer = styled.div`
  width: 681px;
  height: 823px;

  img {
    width: inherit;
    height: inherit;
  }
`;

export const JoinNalaNowSectionInfoContainer = styled.div`
  padding-left: 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const JoinNalaNowSectionTitle = styled.h1`
  font-family: ${fonts.karla};
  color: ${colors.text.black};
  font-weight: bold;
  font-size: 144px;
  line-height: 168px;
  position: relative;
  left: -128px;

  > span {
    display: block;
    span {
      color: white;
    }
  }

  .small {
    left: 128px;
    font-size: 96px;
    line-height: 64px;
    position: relative;
  }
`;

export const JoinNalaNowSectionDescription = styled.p`
  color: ${colors.text.black};
  font-family: ${fonts.lohit};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 40px;
  /*  letter-spacing: 0.05rem;*/
`;

export const JoinNalaNowSectionButtonContainer = styled.div`
  width: 200px;
  height: 53px;
  border: 1px solid ${colors.background.black};
`;
