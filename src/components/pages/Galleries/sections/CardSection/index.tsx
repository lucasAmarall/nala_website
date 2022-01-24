import { Card } from "../../../../molecules/Card";
import { CardSectionContainer } from "./styles";

const cloud_icon = require("../../../../../assets/cloud_icon.png");
const CardSection = () => {
  return (
    <CardSectionContainer>
      <Card
        icon={cloud_icon}
        icon_size={{
          width: 69,
          height: 46,
        }}
        description="Machine Learning is well suited to processing vast amounts of data, finding the key connections, and teasing out the driving decision-making factors allowing for highly personalized recommendations to collectors. Being able to show your artwork to the most likely buyers increases revenue. "
      />
    </CardSectionContainer>
  );
};

export { CardSection };
