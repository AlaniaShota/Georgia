import { createBrowserRouter } from "react-router-dom";
import { Layout, ScrollToTop } from "../Components";
import {
  Home,
  TourGuide,
  Hotel,
  Location,
  TraditionalFood,
  Detail,
  Plane,
} from "../index";
import {
  DeliciousPage,
  HeritagePage,
  LanguagePage,
  NationalBalletPage,
  SeasonsPage,
  TravelAndCreatePage,
  UniqueFolkPage,
  UniqueNaturePage,
} from "../Pages/Home/index";
import {
  AjaraPage,
  GuriaPage,
  ImeretiPage,
  KakhetiPage,
  KvemoKartliPage,
  MtskhetaMtianetiPage,
  RachaLechkhumiKvemoSvanetiPage,
  SamegreloZemoSvanetiPage,
  SamtskheJavakhetiPage,
  ShidaKartliPage,
  TbilisiPage,
} from "../Pages/Location/index";
import { TraditionalFoodLibery } from "../Pages/TraditionalFood/Components/index";
import { GuidePortfolio } from "../Pages/Guide/Components";

export const router = createBrowserRouter([
  {
    element: (
      <>
        <Layout />
        <ScrollToTop />
      </>
    ),

    children: [
      {
        path: "/",
        // element: <Home />,
        children: [
          { index: "/", element: <Home /> },
          { path: "language", element: <LanguagePage /> },
          { path: "delicious", element: <DeliciousPage /> },
          { path: "heritage", element: <HeritagePage /> },
          { path: "national-ballet", element: <NationalBalletPage /> },
          { path: "unique-folk", element: <UniqueFolkPage /> },
          { path: "seasons", element: <SeasonsPage /> },
          { path: "travel-and-create", element: <TravelAndCreatePage /> },
          { path: "unique-nature", element: <UniqueNaturePage /> },
        ],
      },
      {
        path: "location",
        children: [
          {
            index: "location",
            element: <Location />,
          },
          {
            path: "ajara",
            element: <AjaraPage />,
          },
          {
            path: "guria",
            element: <GuriaPage />,
          },
          {
            path: "imereti",
            element: <ImeretiPage />,
          },
          {
            path: "kakheti",
            element: <KakhetiPage />,
          },
          {
            path: "kvemo-kartli",
            element: <KvemoKartliPage />,
          },
          {
            path: "mtskheta-mtianeti",
            element: <MtskhetaMtianetiPage />,
          },
          {
            path: "racha-lechkumi-kvemo-svaneti",
            element: <RachaLechkhumiKvemoSvanetiPage />,
          },
          {
            path: "samegrelo-zemo-svaneti",
            element: <SamegreloZemoSvanetiPage />,
          },
          {
            path: "samtskhe-javakheti",
            element: <SamtskheJavakhetiPage />,
          },
          {
            path: "shida-kartli",
            element: <ShidaKartliPage />,
          },
          {
            path: "tbilisi",
            element: <TbilisiPage />,
          },
        ],
      },
      {
        path: "hotel",
        element: <Hotel />,
      },
      { path: "hotel/:id", element: <Detail /> },
      {
        path: "traditional-food",
        element: <TraditionalFood />,
      },
      {
        path: "library",
        element: <TraditionalFoodLibery />,
      },
      {
        path: "tour-guide",
        element: <TourGuide />,
      },
      {
        path: "tour-guide/:id",
        element: <GuidePortfolio />,
      },
      { path: "plane", element: <Plane /> },
    ],
  },
]);
