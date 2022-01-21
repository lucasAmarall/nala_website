import {
  BenSectionBiographyContainer,
  BenSectionContainer,
  BenSectionImageContainer,
  BenSectionImageContainerPicture,
} from "./style";

const pictures = {
  ben: require("../../../../../assets/about_us_2.png"),
};

const BenSection = () => {
  return (
    <BenSectionContainer>
      <BenSectionBiographyContainer>
        Although he has a degree in Computer Science & Data Econometrics from
        M.I.T., Gulak’s passion has always been art. Over the years, he has been
        a painter, collector & agent, giving him a multi-faceted vantage point
        on the industry. Inspired by seeing talented artists unable to break
        into the global market, Gulak built NALA to help open the market to all
        artists.
      </BenSectionBiographyContainer>
      <BenSectionImageContainer>
        <BenSectionImageContainerPicture
          src={pictures.ben}
          alt="Benjamin Gulak"
        />
      </BenSectionImageContainer>
    </BenSectionContainer>
  );
};

export { BenSection };
