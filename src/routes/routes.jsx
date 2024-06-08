import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";
import UserDashbordLayout from "../layouts/UserDashbordLayout";
import { Universities } from "@/pages/Universities";
import Profile from "@/pages/dashboard/users/Profile";
import WishList from "@/pages/dashboard/users/WishList";
import UniversityManagmentLayout from "@/layouts/UniversityManagmentAdmin";
import UniversityInformationManagment from "@/pages/dashboard/university/UniversityInformationManagment";

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
    path: "/dashboard/users",
    element: <UserDashbordLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
    ],
  },
  {
    path: "/dashboard/admin/university",
    element: <UniversityManagmentLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "manage/university-info",
        element: <UniversityInformationManagment />,
      },
    ],
  },
]);
