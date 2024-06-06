import Sidebar from "@/components/Sidebar";
import { AdminNavbar } from "@/shared/AdminNavbar";

import { Outlet } from "react-router-dom";

function UserDashbordLayout() {
  return (
    <div className="">
      <div className="bg-indigo-500">
        <AdminNavbar />
      </div>
      <div className="flex gap-5">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default UserDashbordLayout;
