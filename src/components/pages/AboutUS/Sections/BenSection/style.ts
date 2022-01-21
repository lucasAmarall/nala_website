import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";
import { MaxContainer } from "../../../../atoms/MaxContainer";

export const BenSectionContainer = styled(MaxContainer)`
  display: flex;
  align-items: center;
  position: relative;
  height: 495px;
`;

export const BenSectionBiographyContainer = styled.p`
  font-family: ${fonts.lohit};
  color: ${colors.text.black};
  background: ${colors.background.gray};
  padding: 100px 75px;
  max-width: 736px;
  height: 495px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 40px;
`;

export const BenSectionImageContainer = styled.div`
  height: 838px;
`;

export const BenSectionImageContainerPicture = styled.img`
  width: 646px;
  height: 838px;
  width: inherit;
  height: inherit;

  position: absolute;
  right: 0;
  z-index: -1;
`;

export const BenSectionImageContainerTitle = styled.h1``;
