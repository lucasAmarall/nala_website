import React from "react";
import { Logo } from "../../atoms/Logo";

import {
  FooContainer,
  FooterRow,
  FooterLogoContainer,
  FooterList,
  FooterItemList,
} from "./styles";

const Footer = () => {
  return (
    <FooterRow>
      <FooContainer>
        <FooterLogoContainer>
          <Logo />
        </FooterLogoContainer>
        <FooterList>
          <FooterItemList>email@nala.com</FooterItemList>
          <FooterItemList>+1 123 365 546</FooterItemList>
          <FooterItemList>address st. 124 - US</FooterItemList>
        </FooterList>
        <FooterList>
          <FooterItemList>email@nala.com</FooterItemList>
          <FooterItemList>+1 123 365 546</FooterItemList>
          <FooterItemList>address st. 124 - US</FooterItemList>
        </FooterList>
        <FooterList>
          <FooterItemList>NALA all rights reserved, 2021</FooterItemList>
        </FooterList>
      </FooContainer>
    </FooterRow>
  );
};

export { Footer };
