import { NotANormalNetworkBar, NotANormalNetworkText } from "./styles";

const pictures = {
  bg: require("../../../../../assets/artists_2.png"),
};

const NotANormaNewtorkSection = () => {
  return (
    <>
      <NotANormalNetworkText>
        NALA is not another social media platform. There is no requirement for
        engaging or building followers or even posting regularly. There are no
        posts or feed to curate. The only criteria to make sales happen is to
        sign up with the app, fill out your profile and upload some artwork
        images. NALA does all the rest.
      </NotANormalNetworkText>
      <NotANormalNetworkBar
        style={{ backgroundImage: `url(${pictures.bg})` }}
      />
    </>
  );
};

export { NotANormaNewtorkSection };
