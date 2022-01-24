import { ERoutes } from "../../../../../constants/routes";
import { Button } from "../../../../atoms/Button";
import { SmallTitle } from "../../../../atoms/Typograh";
import {
  TechnologyBehindSectionContainer,
  TechnologyBehindSectionVideoContainer,
  TechnologyBehindSectionDescription,
  TechnologyBehindSectionButtonContainer,
} from "./styles";

const TechnologyBehindSection = () => {
  return (
    <TechnologyBehindSectionContainer as="section">
      <TechnologyBehindSectionVideoContainer>
        <iframe
          width="1320"
          height="746"
          src="https://www.youtube.com/embed/ScMzIvxBSi4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </TechnologyBehindSectionVideoContainer>
      <SmallTitle>Technology behind NALA</SmallTitle>
      <TechnologyBehindSectionDescription>
        The heart of NALA (Networked Artistic Learning Algorithm) is our
        recommender engine. NALA sifts through millions of potential matches and
        returns the optimized pairings of artists to collectors and galleries,
        streamlining the discovery process.
      </TechnologyBehindSectionDescription>
      <TechnologyBehindSectionButtonContainer>
        <Button
          colorSchema="black"
          onClick={() => {
            window.location.href = ERoutes.inside_nala;
          }}
        >
          Know more
        </Button>
      </TechnologyBehindSectionButtonContainer>
    </TechnologyBehindSectionContainer>
  );
};

export { TechnologyBehindSection };
