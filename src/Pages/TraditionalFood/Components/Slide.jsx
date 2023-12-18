import swiperImgFifth from "../../../assets/traditional-food-img/georgia-traditional-food-image5.jpg";
import swiperImgSixth from "../../../assets/traditional-food-img/georgia-traditional-food-image6.jpg";
import swiperImgSeventh from "../../../assets/traditional-food-img/georgia-traditional-food-image7.jpg";
import swiperImgEighth from "../../../assets/traditional-food-img/georgia-traditional-food-image8.jpg";
import swiperImgNinth from "../../../assets/traditional-food-img/georgia-traditional-food-image9.jpg";
import swiperImgEleventh from "../../../assets/traditional-food-img/georgia-traditional-food-image11.jpg";

import {
  Supra_Title,
  Supra_Description,
  Culinary_Title,
  Culinary_Description,
  Heritage_Title,
  Heritage_Description,
  Legacy_Title,
  Legacy_Description,
  Antiquity_Title,
  Antiquity_Description,
  Discovering_Title,
  Discovering_Description,
} from "../constants";
import { SliderLibrary } from "../../../Components/SliderLibrary/SliderLibrary";

export const Slide = () => {
  const data = [
    {
      id: 1,
      title: Supra_Title,
      description: Supra_Description,
      img: swiperImgFifth,
    },
    {
      id: 2,
      title: Culinary_Title,
      description: Culinary_Description,
      img: swiperImgSixth,
    },
    {
      id: 3,
      title: Heritage_Title,
      description: Heritage_Description,
      img: swiperImgSeventh,
    },
    {
      id: 4,
      title: Legacy_Title,
      description: Legacy_Description,
      img: swiperImgEighth,
    },
    {
      id: 5,
      title: Antiquity_Title,
      description: Antiquity_Description,
      img: swiperImgNinth,
    },
    {
      id: 6,
      title: Discovering_Title,
      description: Discovering_Description,
      img: swiperImgEleventh,
    },
  ];

  return <SliderLibrary data={data} />;
};
