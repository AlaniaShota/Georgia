import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Pages/Home/Home";
import Location from "../Pages/Location/Location";
import Hotel from "../Pages/Hotel/Hotel";
import TraditionalFood from "../Pages/TraditionalFood/TraditionalFood";
import TourGuide from "../Pages/Gid/Gid";
import DetailFood from "../Pages/TraditionalFood/Components/DetailFood";
import TraditionalFoodLibery from "../Pages/TraditionalFood/Components/TraditionalFoodLibery";

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
    ],
  },
]);
