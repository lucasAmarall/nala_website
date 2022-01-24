import {
  CollectorsIntroductionContainer,
  CollectorsIntroductionInfoContainer,
  CollectorsIntroductionTitle,
  CollectorsIntroductionSubtitle,
  CollectorsIntroductionImageContainer,
  EndingBar,
} from "./styles";

const pictures = {
  head: require("../../../../../assets/collector_1.png"),
  bar: require("../../../../../assets/collector_2.png"),
};
const GalleriesIntroductionSection = () => {
  return (
    <>
      <CollectorsIntroductionContainer as="section">
        <CollectorsIntroductionInfoContainer>
          <CollectorsIntroductionTitle>
            coll<span>ectors</span>
          </CollectorsIntroductionTitle>
          <CollectorsIntroductionSubtitle>
            Our goal is to help declutter the market and bring clarity to a
            rapidly changing industry. By harnessing the power of Artificial
            Intelligence and Data Science, we can shed light on an inherently
            complex market.
          </CollectorsIntroductionSubtitle>
        </CollectorsIntroductionInfoContainer>
        <CollectorsIntroductionImageContainer>
          <img src={pictures.head} alt="" />
        </CollectorsIntroductionImageContainer>
      </CollectorsIntroductionContainer>
      <EndingBar style={{ backgroundImage: `url(${pictures.bar})` }} />
    </>
  );
};

export { GalleriesIntroductionSection };
