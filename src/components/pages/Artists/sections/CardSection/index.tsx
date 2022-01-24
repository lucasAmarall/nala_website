import { Card } from "../../../../molecules/Card";
import { CardSectionContainer } from "./styles";

const icons = {
  upload: require("../../../../../assets/upload_icon.png"),
  bars: require("../../../../../assets/bars_icon.png"),
};
const CardSection = () => {
  return (
    <CardSectionContainer>
      <Card
        icon={icons.upload}
        icon_size={{
          width: 69,
          height: 46,
        }}
        description="Machine Learning is well suited to processing vast amounts of data, finding the key connections, and teasing out the driving factors. However, we don't just leave it to Artificial Intelligence; we combine data science with years of hands-on industry knowledge to condition NALA into a personalized art recommender. "
      />
      <Card
        icon={icons.bars}
        icon_size={{
          width: 69,
          height: 46,
        }}
        description="When a new artist or collector joins the platform, we can immediately start making suggestions based on where they fit into the industry. As users navigate the app, NALA learns their personal preferences and begins customizing their recommendations taking everything into account. "
      />
      s
    </CardSectionContainer>
  );
};

export { CardSection };
