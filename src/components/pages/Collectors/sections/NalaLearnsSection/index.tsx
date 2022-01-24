import {
  NalaLearnsContainer,
  NalaLearnsImageContainer,
  NalaLearnsInfoContainer,
} from "./styles";

const pictures = {
  main: require("../../../../../assets/collector_4.png"),
};

const NalaLearnsSection = () => {
  return (
    <NalaLearnsContainer>
      <NalaLearnsImageContainer>
        <img src={pictures.main} alt="" />
      </NalaLearnsImageContainer>

      <NalaLearnsInfoContainer>
        <p>
          NALA learns your personal preferences as you navigate the app and
          begins customizing its recommendations. Similar to how streaming
          services know the type of movies and shows you’d like to watch, NALA
          curates a personalized list of artists that match your style and
          tastes. Our goal is to help collectors expand their collections by
          introducing them to new artists who match their criteria while being a
          new discovery. The parallel to this would be scrolling through
          streaming services and coming across a hidden gem in your top
          recommendations that you would never have found otherwise. The world
          is full of amazing artists, and we hope to help you find your next
          favorite.
        </p>
      </NalaLearnsInfoContainer>
    </NalaLearnsContainer>
  );
};

export { NalaLearnsSection };
