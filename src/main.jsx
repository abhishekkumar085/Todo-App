import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
   {
    path:"*",
    element:<NotFound/>
   }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
