import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";
import UserDashbordLayout from "../layouts/UserDashbordLayout";
import { Universities } from "@/pages/Universities";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/universities",
        element: <Universities />,
      },
    ],
  },
  {
    path: "/dashbord/user",
    element: <UserDashbordLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "profile",
      },
    ],
  },
]);
