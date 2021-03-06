import styled from "styled-components";
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/fonts";
import { MaxContainer } from "../../atoms/MaxContainer";

export const FooterRow = styled.footer`
  background: inherit;
  width: 100%;
  padding: 42px;
`;

export const FooterContainer = styled(MaxContainer)`
  display: flex;
  align-items: flex-end;
  margin: 0 auto;
`;

export const FooterLogoContainer = styled.div`
  margin-right: 121px;
`;

export const FooterList = styled.ul`
  list-style-type: none;
  margin-right: 88px;
  align-self: flex-end;
`;

export const FooterItemList = styled.li`
  font-family: ${fonts.roboto};
  color: ${colors.text.white};
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 11px;
`;
