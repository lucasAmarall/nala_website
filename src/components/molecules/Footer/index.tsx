import React from "react";
import { Logo } from "../../atoms/Logo";

import {
  FooterContainer,
  FooterRow,
  FooterLogoContainer,
  FooterList,
  FooterItemList,
} from "./styles";

const Footer = () => {
  return (
    <FooterRow>
      <FooterContainer>
        <FooterLogoContainer>
          <Logo />
        </FooterLogoContainer>
        <FooterList>
          <FooterItemList>contact@NALA.art</FooterItemList>
          <FooterItemList>303 3rd st, Cambridge, MA, 02142</FooterItemList>
          {/* <FooterItemList>address st. 124 - US</FooterItemList> */}
        </FooterList>
        {/* <FooterList>
          <FooterItemList>email@nala.com</FooterItemList>
          <FooterItemList>+1 123 365 546</FooterItemList>
          <FooterItemList>address st. 124 - US</FooterItemList>
        </FooterList> */}
        <FooterList>
          <FooterItemList>NALA all rights reserved, 2021</FooterItemList>
        </FooterList>
      </FooterContainer>
    </FooterRow>
  );
};

export { Footer };
