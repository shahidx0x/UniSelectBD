import AdminSidebar from "@/components/AdminSidebar";
import { AdminNavbar } from "@/shared/AdminNavbar";

import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <div className="bg-indigo-500">
        <AdminNavbar />
      </div>
      <div className="flex gap-5">
        <AdminSidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
