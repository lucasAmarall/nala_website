import React from "react";
import { ERoutes } from "../../../constants/routes";
import { Logo } from "../../atoms/Logo";

import { MenuContainer, MenuTitle, MenuOption } from "./styles";

const Menu = () => {
  return (
    <MenuContainer>
      <MenuTitle>
        NALA <Logo />
      </MenuTitle>
      <nav>
        <ul>
          <li>
            <MenuOption href={ERoutes.home}>Home</MenuOption>
          </li>
          <li>
            <MenuOption href={ERoutes.about}>About</MenuOption>
          </li>
          <li>
            <MenuOption href={ERoutes.artists}>Artists</MenuOption>
          </li>
          <li>
            <MenuOption href={ERoutes.galleries}>Galleries</MenuOption>
          </li>
          <li>
            <MenuOption href={ERoutes.collectors}>Collectors</MenuOption>
          </li>
          <li>
            <MenuOption href={ERoutes.home}>Technology</MenuOption>
          </li>
          <li>
            <MenuOption href={ERoutes.inside_nala}>Inside NALA</MenuOption>
          </li>
          <li>
            <MenuOption href={ERoutes.about}>Team</MenuOption>
          </li>
        </ul>
      </nav>
    </MenuContainer>
  );
};

export { Menu };
