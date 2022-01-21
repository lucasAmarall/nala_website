import styled from "styled-components";
import { colors } from "../../../../../constants/colors";
import { fonts } from "../../../../../constants/fonts";
import { MaxContainer } from "../../../../atoms/MaxContainer";

export const LastTimeSectionContainer = styled(MaxContainer)`
  display: flex;
  flex-direction: column;
`;

export const LastTimeSectionContainerHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 200px;
`;

export const LastTimeSectionImagesContainer = styled.div`
  width: 42.5484%;
  position: relative;

  &:after {
    z-index: 0;
    content: "";
    position: absolute;
    width: 522px;
    height: 698px;
    background: ${colors.background.gray};
    top: 106px;
    left: 15px;
    z-index: 1;
  }

  img {
    position: absolute;
    width: 421px;
    height: 562px;

    &:first-child {
      top: 0;
      left: 0;
      z-index: 2;
    }

    &:last-child {
      z-index: 3;
      bottom: 0;
      right: 0;
    }
  }
`;

export const LastTimeSectionInfoContainer = styled.div`
  background: ${colors.background.gray};
  color: ${colors.text.black};
  font-family: ${fonts.manjari};
  font-weight: normal;
  font-size: 18px;
  line-height: 46px;
  max-width: 53%;
  padding: 121px 56px 107px 92px;
  height: 916px;
`;

export const LastTimeSectionInfoContainerTitle = styled.h1`
  font-family: ${fonts.karla};
  color: ${colors.text.black};
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 60px;
`;

export const LastTimeSectionInfoContainerDescription = styled.p`
  font-family: ${fonts.manjari};
  color: ${colors.text.black};
  font-weight: normal;
  font-size: 18px;
  line-height: 46px;
`;

export const LastTimeSectionContainerTestimonialContainer = styled.div`
  background: ${colors.background.gray};
  color: ${colors.text.black};
  font-family: ${fonts.manjari};
  width: 100%;
  padding: 56px 40px 46px 75px;
`;

export const LastTimeSectionContainerTestimonial = styled.p`
  color: ${colors.text.black};
  font-family: ${fonts.manjari};
  font-weight: bold;
  font-size: 18px;
  line-height: 46px;
  letter-spacing: 2px;
`;

export const LastTimeSectionContainerTestimonialAuthor = styled.span`
  color: ${colors.text.black};
  font-family: ${fonts.manjari};
  font-weight: normal;
  font-size: 18px;
  line-height: 46px;
  text-align: center;
  display: block;
  margin-top: 38px;
`;
