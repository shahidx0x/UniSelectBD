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
import UniversityInfoTab from "@/pages/dashboard/university/manages/UniversityInfoTab";
import CoursesManagment from "@/pages/dashboard/university/courses/CoursesManagment";
import ManageNoticeAndInfoes from "@/pages/dashboard/university/notice-and-infos/ManageNoticeAndInfoes";
import UniversityInformation from "@/pages/UniversityInformation";
import AdminLayout from "@/layouts/AdminLayout";

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
      {
        path: "/university/information",
        element: <UniversityInformation />,
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
        element: <UniversityInfoTab />,
      },
      {
        path: "manage/courses",
        element: <CoursesManagment />,
      },
      {
        path: "manage/notices-and-infos",
        element: <ManageNoticeAndInfoes />,
      },
    ],
  },
  {
    path: "/dashboard/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "manage/users",
        element: <UniversityInfoTab />,
      },
      {
        path: "manage/university",
        element: <CoursesManagment />,
      },
    ],
  },
]);
