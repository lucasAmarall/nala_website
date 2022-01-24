import {
  BenSectionBiographyContainer,
  BenSectionContainer,
  BenSectionImageContainer,
  BenSectionImageContainerPicture,
  BenSectionImageContainerTitle,
  BenSectionImageContainerFounder,
  BenSectionImageContainerTestimonial,
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
        <BenSectionImageContainerTitle>
          Benjamin Gulak
        </BenSectionImageContainerTitle>
        <BenSectionImageContainerFounder>
          Founder
        </BenSectionImageContainerFounder>
        <BenSectionImageContainerTestimonial>
          “I never understood why in a world with so much creativity, you can
          walk into galleries in almost any major city and see the same artists
          on the walls. The idea of art is supposed to be individualism, and yet
          sometimes the market seems anything but. With the commercialism of
          creativity, we’ve limited ourselves and our ability to find new
          talent.”
        </BenSectionImageContainerTestimonial>
      </BenSectionImageContainer>
    </BenSectionContainer>
  );
};

export { BenSection };
