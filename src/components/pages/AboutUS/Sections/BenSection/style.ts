import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";
import { MaxContainer } from "../../../../atoms/MaxContainer";

export const BenSectionContainer = styled(MaxContainer)`
  display: flex;
  align-items: center;
  position: relative;
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

export const BenSectionImageContainerTitle = styled.h1`
  font-family: ${fonts.lohit};
  color: ${colors.text.white};
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  position: absolute;
  line-height: 52px;
  top: 107px;
  right: 185px;
  z-index: 1;
`;

export const BenSectionImageContainerFounder = styled.span`
  font-family: ${fonts.lohit};
  color: ${colors.text.white};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 35px;
  position: absolute;
  line-height: 52px;
  width: 429px;
  display: inline-block;
  top: 179px;
  right: 105px;
  text-align: center;
  z-index: 1;
`;

export const BenSectionImageContainerTestimonial = styled.p`
  font-family: ${fonts.lohit};
  color: ${colors.text.white};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 35px;
  max-width: 435px;
  text-align: center;
  position: absolute;
  top: 280px;
  right: 103px;
  text-align: center;
  z-index: 1;
`;
