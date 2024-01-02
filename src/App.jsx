import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

import "./Server/server";
import "./App.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
