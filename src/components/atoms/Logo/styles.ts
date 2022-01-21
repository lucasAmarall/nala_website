import styled from "styled-components";

export enum ELogoContainerSizes {
  normal = 100,
  small = 89,
}

export interface ILogoPropsContainer {
  size?: ELogoContainerSizes;
}

export const LogoContainer = styled.img<ILogoPropsContainer>`
  width: ${({ size = ELogoContainerSizes.normal }) => size}px;
`;
