import { Card } from "../../../Components/Card/index";
import { Why_Guides_Title, Why_Guides_Description } from "../constants";

export const GuideCard = ({ guides }) => {
  return (
    <>
      <Card
        title={Why_Guides_Title}
        description={Why_Guides_Description}
        data={guides}
      />
    </>
  );
};
