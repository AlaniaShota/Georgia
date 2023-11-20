import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home/Home'
import Location from './Pages/Location/Location'
import Hotel from './Pages/Hotel/Hotel'
import TraditionalFood from './Pages/TraditionalFood/TraditionalFood'
import Gid from './Pages/Gid/Gid'

import './App.css'
const router = createBrowserRouter([
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
        path: 'gid',
        element: <Gid />
      },
    ]
  }
])

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
