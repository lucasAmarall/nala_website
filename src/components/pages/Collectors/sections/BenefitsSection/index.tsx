import React from "react";
import { Card } from "../../../../molecules/Card";
import { BenefitsContainer } from "./styles";

const icons = {
  tendency: require("../../../../../assets/tendency_icon.png"),
  graph: require("../../../../../assets/graph_icon.png"),
  user: require("../../../../../assets/user_icon.png"),
  face: require("../../../../../assets/face_icon.png"),
};

const BenefitsSection = () => {
  return (
    <BenefitsContainer>
      <Card
        icon={icons.tendency}
        description="How do you value the benefits of buying from an artist with 100,000 Instagram followers vs. an artist who sells consistently at auction vs. an artist who works with galleries? "
      />
      <Card
        icon={icons.graph}
        description={`Is a prolific and collectible artist a better investment than a higher-priced artist that only produces a few pieces? `}
      />
      <Card
        icon={icons.user}
        description="Should you buy art from an artist who some celebrity recently posted? "
        icon_size={{
          width: 51,
          height: 56,
        }}
      />
      <Card
        icon={icons.face}
        description="More importantly, is what you’re seeing a contemporary idea or a kitsch reproduction?"
      />
    </BenefitsContainer>
  );
};

export { BenefitsSection };
