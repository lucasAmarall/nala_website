import { HoppingTextContainer } from "./styles";

const pictures = {
  bg: require("../../../../../assets/artists_3.png"),
};

const HoppingTextSection = () => {
  return (
    <HoppingTextContainer style={{ backgroundImage: `url(${pictures.bg})` }}>
      <p>
        The goal is to help artists enter the global
        <br /> market and find collectors who will be <br />
        interested in their work while enabling
        <br />
        collectors to feel secure knowing that the art
        <br />
        they buy is a good investment.
      </p>
    </HoppingTextContainer>
  );
};

export { HoppingTextSection };
