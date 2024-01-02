import { Header, Section } from "../../Components";
import tourGuideImg from "../../assets/TourGuide/Georgia.jpeg";
import {
  Title,
  Description,
  Tour_Guide_Title,
  Tour_Guide_Description,
} from "./constants";
import { useEffect } from "react";
import { useGuideStore } from "../../Store/store";
import { Slide, GuideCard, Comments } from "./Components";

export const TourGuide = () => {
  const { guides = [] } = useGuideStore((state) => state.guides);
  const fetchGuide = useGuideStore((state) => state.fetchGuide);

  useEffect(() => {
    fetchGuide();
  }, [fetchGuide]);

  return (
    <>
      <Header
        titlePage={"Tour Guide"}
        titleText={Title}
        descriptionText={Description}
        img={tourGuideImg}
      />
      <div className="m-auto w-10/12">
        <Section
          title={Tour_Guide_Title}
          firstDescription={Tour_Guide_Description}
        />
        <Slide />
        <GuideCard guides={guides} />
        <Comments />
      </div>
    </>
  );
};
