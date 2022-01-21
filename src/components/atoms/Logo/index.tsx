import React from "react";
import { ILogoPropsContainer } from "./styles";

const logoImage = require("../../../assets/logox100.png");

const Logo: React.FC<ILogoPropsContainer> = (props) => {
  return <img src={logoImage} alt="NALA website logo" {...props} />;
};

export { Logo };
