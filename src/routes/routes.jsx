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
import ManageUsers from "@/pages/dashboard/admin/ManageUsers";
import ManageUniversity from "@/pages/dashboard/admin/ManageUniversity";
import ManageWebsite from "@/pages/dashboard/admin/ManageWebsite";
import ManageFeedBack from "@/pages/dashboard/admin/ManageFeedBack";
import ManageAdminsAndRole from "@/pages/dashboard/admin/ManageAdminsAndRole";
import UniversitySignupRequest from "@/pages/UniversitySignupRequest";
import RegistrationSelect from "@/pages/RegistrationSelect";
import PrivateRoute from "./PrivateRoute";

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
        path: "/registration/user",
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
      {
        path: "/university/registration/request",
        element: <UniversitySignupRequest />,
      },
      {
        path: "/registration",
        element: <RegistrationSelect />,
      },
    ],
  },
  {
    path: "/dashboard/users",
    element: (
      <PrivateRoute allowedRoles={["user"]}>
        <UserDashbordLayout />
      </PrivateRoute>
    ),
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
    element: (
      <PrivateRoute allowedRoles={["university-admin"]}>
        <UniversityManagmentLayout />
      </PrivateRoute>
    ),
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
    element: (
      <PrivateRoute allowedRoles={["admin"]}>
        <AdminLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "manage/users",
        element: <ManageUsers />,
      },
      {
        path: "manage/university",
        element: <ManageUniversity />,
      },
      {
        path: "manage/website",
        element: <ManageWebsite />,
      },
      {
        path: "manage/feedback",
        element: <ManageFeedBack />,
      },
      {
        path: "manage/admins/and/role",
        element: <ManageAdminsAndRole />,
      },
    ],
  },
]);
