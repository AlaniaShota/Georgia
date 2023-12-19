import { Header } from "../../Components";
import tourGuideImg from "../../assets/TourGuide/Georgia.jpeg";
import {
  Title,
  Description,
  Tour_Guide_Title,
  Tour_Guide_Description,
} from "./constants";
import { useEffect } from "react";
import { useGuideStore } from "../../Store/store";
import { Slide, GuideCard } from "./Components";

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
      <div className="lg:container sm:mx-8 lg:mx-0 ">
        <div className="flex flex-col justify-center items-center my-20">
          <h1 className="text-3xl font-bold  text-center px-40">
            {Tour_Guide_Title}
          </h1>
          <p className="text-BlackSecondColor text-lg my-5 text-center w-[740px] ">
            {Tour_Guide_Description}
          </p>
        </div>
        <Slide />
        <GuideCard guides={guides} />
      </div>
    </>
  );
};
