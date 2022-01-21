import React from "react";
import { MaxContainer } from "../../../../atoms/MaxContainer";

const pictures = {
  favorite: require("../../../../../assets/inside_nala_3.png"),
};

const YourFavoriteSection = () => {
  return (
    <MaxContainer>
      <img
        src={pictures.favorite}
        alt="kkkkk"
        style={{ width: "100%", height: 372, marginBottom: 52 }}
      />
    </MaxContainer>
  );
};

export { YourFavoriteSection };
