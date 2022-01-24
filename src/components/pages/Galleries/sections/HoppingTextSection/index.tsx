import { HoppingTextContainer } from "./styles";

const pictures = {
  bg: require("../../../../../assets/galleries_2.png"),
};

const HoppingTextSection = () => {
  return (
    <HoppingTextContainer style={{ backgroundImage: `url(${pictures.bg})` }}>
      <p>
        Instead of hoping to find the needle in the proverbial haystack by using
        data science and Artificial Intelligence to narrow the field showing the
        types of artwork they are most likely to genuinely enjoy.{" "}
      </p>
    </HoppingTextContainer>
  );
};

export { HoppingTextSection };
