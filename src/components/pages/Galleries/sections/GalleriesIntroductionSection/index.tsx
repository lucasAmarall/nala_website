import {
  GalleriesIntroductionContainer,
  GalleriesIntroductionInfoContainer,
  GalleriesIntroductionTitle,
  GalleriesIntroductionSubtitle,
  GalleriesIntroductionDescription,
  GalleriesIntroductionImageContainer,
} from "./styles";

const pictures = {
  head: require("../../../../../assets/galleries_1.png"),
};
const GalleriesIntroductionSection = () => {
  return (
    <GalleriesIntroductionContainer as="section">
      <GalleriesIntroductionInfoContainer>
        <GalleriesIntroductionTitle>
          Gal<span>leries</span>
        </GalleriesIntroductionTitle>
        <GalleriesIntroductionSubtitle>
          NALA uses artificial intelligence to assist Galleries by putting their
          artwork in front of the most likely collectors, dramatically
          increasing the chance of a sale while also increasing Gallery
          visibility to the Global marketplace.
        </GalleriesIntroductionSubtitle>
        <GalleriesIntroductionDescription as="p">
          We also utilize Artificial Intelligence to narrow the field and
          suggest artwork that will most likely fit your existing collection or
          style. This means that instead of having to sift through hundreds or
          even thousands of images online hoping to find a new artist, NALA can
          fast-track the process, making suggestions on artists who are most
          likely to mesh with your gallery and your collectors' styles.
        </GalleriesIntroductionDescription>
      </GalleriesIntroductionInfoContainer>
      <GalleriesIntroductionImageContainer>
        <img src={pictures.head} alt="" />
      </GalleriesIntroductionImageContainer>
    </GalleriesIntroductionContainer>
  );
};

export { GalleriesIntroductionSection };
