import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Components/Layout'
import Home from '../Pages/Home/Home'
import Location from '../Pages/Location/Location'
import Hotel from '../Pages/Hotel/Hotel'
import TraditionalFood from '../Pages/TraditionalFood/TraditionalFood'
import TourGuide from '../Pages/Gid/Gid'
import DetailFood from '../Pages/TraditionalFood/Components/DetailFood'
import Drink from '../Pages/Drink/Drink'

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'location',
                element: <Location />
            },
            {
                path: 'hotel',
                element: <Hotel />
            },
            {
                path: 'traditional-food',
                element: <TraditionalFood />
            },
            {
                path: "traditional-food/:id",
                element: <DetailFood />,
            },
            {
                path: "drink",
                element: <Drink />,
            },
            {
                path: 'gid',
                element: <TourGuide />
            },
        ]
    }
])