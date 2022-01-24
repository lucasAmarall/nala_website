import React, { ReactElement } from "react";
import { CardContainer, CardDescription, CardIcon } from "./styles";

interface ICardProps {
  description: string | Element | ReactElement;
  icon: string;
  icon_size?: {
    width: number;
    height: number;
  };
}

const Card: React.FC<ICardProps> = ({
  description,
  icon,
  icon_size = { width: 51, height: 51 },
}) => {
  return (
    <CardContainer>
      <CardIcon src={icon} style={{ ...icon_size }} />
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export { Card };
