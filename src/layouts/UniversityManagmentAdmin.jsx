import UniversityManagerSidebar from "@/components/UniversityManagerSidebar";
import { AdminNavbar } from "@/shared/AdminNavbar";

import { Outlet } from "react-router-dom";

function UniversityManagmentLayout() {
  return (
    <div className="">
      <div className="bg-indigo-500">
        <AdminNavbar />
      </div>
      <div className="flex gap-5">
        <UniversityManagerSidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default UniversityManagmentLayout;
