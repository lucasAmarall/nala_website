import styled from "styled-components";
import { MaxContainer } from "../../../../atoms/MaxContainer";

export const BenefitsContainer = styled(MaxContainer)`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(2, 514px);
  grid-row-gap: 108px;
  grid-column-gap: 89px;
  padding: 0 100px;
`;
