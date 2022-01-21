import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";
import { MaxContainer } from "../../../../atoms/MaxContainer";

export const MatchmakerSectionContainer = styled(MaxContainer)`
  display: flex;
  flex-direction: row;
`;

export const MatchmakerSectionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
`;

export const MatchmakerSectionTitle = styled.h1`
  font-family: ${fonts.karla};
  font-weight: bold;
  font-size: 102px;
  color: ${colors.text.black};
  display: flex;
  flex-direction: column;
  margin-top: 129px;

  span {
    white-space: nowrap;
    position: relative;

    &:nth-child(1) {
      font-size: 144px;
    }

    &:nth-child(2) {
      left: 72px;
    }

    &:nth-child(3) {
      left: 146px;
    }
  }
`;

export const MatchmakerSectionDescription = styled.p`
  font-family: ${fonts.lohit};
  font-weight: normal;
  font-size: 22px;
  line-height: 52px;
  /*  letter-spacing: 0.05rem;*/

  display: block;
  margin-top: 27px;
  max-width: 512px;
  color: ${colors.text.blue};
`;

export const MatchmakerSectionImageContainer = styled.div`
  img {
    flex: 1;
  }
`;

export const MatchmakerSectionButtonContainer = styled.div`
  width: 200px;
  height: 60px;
  border: 1px solid #1a1a1a;
  background: #2e3a59;
  margin-top: 105px;
`;

export const MatchmakerSectionDownloadLabel = styled.div`
  margin-top: 20px;
  font-family: ${fonts.lohit};
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  /*  letter-spacing: 0.05rem;*/
  color: #2e3a59;
`;
