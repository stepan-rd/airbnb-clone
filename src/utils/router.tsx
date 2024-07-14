import App from "@/App";
import { ErrorPage } from "@/pages/ErrorPage/ErrorPage";
import { HomePage } from "@/pages/HomePage/HomePage";
import RbnbDetailsPage from "@/pages/RbnbDetailsPage/RbnbDetailsPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/details/:rbnbId", element: <RbnbDetailsPage /> },
    ],
  },
]);
