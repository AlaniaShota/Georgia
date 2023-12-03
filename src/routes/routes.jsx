import { createBrowserRouter } from "react-router-dom";
import { Layout, ScrollToTop } from "../Components";
import {
  Home,
  DeliciousPage,
  HeritagePage,
  LanguagePage,
  NationalBalletPage,
  SeasonsPage,
  TravelAndCreatePage,
  UniqueFolkPage,
  UniqueNaturePage,
  TourGuide,
  Hotel,
  Location,
  TraditionalFood,
} from "../index";
import {
  DetailFood,
  TraditionalFoodLibery,
} from "../Pages/TraditionalFood/Components/index";

export const router = createBrowserRouter([
  {
    element: (
      <>
        <Layout />,
        <ScrollToTop />
      </>
    ),

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "location",
        element: <Location />,
      },
      {
        path: "hotel",
        element: <Hotel />,
      },
      {
        path: "traditional-food",
        element: <TraditionalFood />,
      },
      {
        path: "library",
        element: <TraditionalFoodLibery />,
      },

      {
        path: "library/:id",
        element: <DetailFood />,
      },
      {
        path: "gid",
        element: <TourGuide />,
      },
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
]);
