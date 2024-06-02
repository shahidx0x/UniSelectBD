import { Outlet } from "react-router-dom";
import { Navbar } from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#f2faff]">
      <div className="bg-deep-purple-accent-400">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
