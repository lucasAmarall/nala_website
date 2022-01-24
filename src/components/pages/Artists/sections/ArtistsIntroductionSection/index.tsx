import {
  ArtistsIntroductionContainer,
  ArtistsIntroductionInfoContainer,
  ArtistsIntroductionTitle,
  ArtistsIntroductionSubtitle,
  ArtistsIntroductionDescription,
  ArtistsIntroductionImageContainer,
} from "./styles";

const pictures = {
  head: require("../../../../../assets/artist_1.png"),
};
const ArtistsIntroductionSection = () => {
  return (
    <ArtistsIntroductionContainer as="section">
      <ArtistsIntroductionImageContainer>
        <img src={pictures.head} alt="" />
      </ArtistsIntroductionImageContainer>
      <ArtistsIntroductionInfoContainer>
        <ArtistsIntroductionTitle>
          <span>A</span>rtists
        </ArtistsIntroductionTitle>
        <ArtistsIntroductionSubtitle>
          The world is filled with incredible creative talent. But,
          unfortunately, innumerable roadblocks prevent most artists from
          entering the global market or being discovered.
        </ArtistsIntroductionSubtitle>
        <ArtistsIntroductionDescription as="p">
          NALA helps artists get discovered by putting their artwork in front of
          the most likely collectors, dramatically increasing the chance of a
          sale instead of hoping that someone stumbles across their work by
          chance.
        </ArtistsIntroductionDescription>
      </ArtistsIntroductionInfoContainer>
    </ArtistsIntroductionContainer>
  );
};

export { ArtistsIntroductionSection };
