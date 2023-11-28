import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Pages/Home/Home";
import Location from "../Pages/Location/Location";
import Hotel from "../Pages/Hotel/Hotel";
import TraditionalFood from "../Pages/TraditionalFood/TraditionalFood";
import TourGuide from "../Pages/Gid/Gid";
import DetailFood from "../Pages/TraditionalFood/Components/DetailFood";
import TraditionalFoodLibery from "../Pages/TraditionalFood/Components/TraditionalFoodLibery";
import LanguagePage from "../Pages/SinglePage/LanguagePage";
import HeritagePage from "../Pages/SinglePage/HeritagePage";
import NationalBalletPage from "../Pages/SinglePage/NationalBalletPage";
import UniqueFolkPage from "../Pages/SinglePage/UniqueFolkPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
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
      { path: "heritage", element: <HeritagePage /> },
      { path: "national-ballet", element: <NationalBalletPage /> },
      { path: "unique-folk", element: <UniqueFolkPage /> },
    ],
  },
]);