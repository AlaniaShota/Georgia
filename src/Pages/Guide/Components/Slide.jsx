import { SliderLibrary } from "../../../Components/SliderLibrary/SliderLibrary";
import swiperImgFirst from "../../../assets/location/da-skhva-progresuli-qartveli-mefeebi-mefe-erekle-m-8.webp";
import swiperImgSecond from "../../../assets/location/winery-khareba-gnta.webp";
import swiperImgThird from "../../../assets/location/shutterstock-1230176938.webp";

import {
  History_Title,
  History_Description,
  Civilization_Title,
  Civilization_Description,
  Ushguli_Title,
  Ushguli_Description,
} from "../constants";

export const Slide = () => {
  const data = [
    {
      id: 1,
      title: History_Title,
      description: History_Description,
      img: swiperImgFirst,
    },
    {
      id: 2,
      title: Civilization_Title,
      description: Civilization_Description,
      img: swiperImgSecond,
    },
    {
      id: 3,
      title: Ushguli_Title,
      description: Ushguli_Description,
      img: swiperImgThird,
    },
  ];

  return <SliderLibrary data={data} />;
};
