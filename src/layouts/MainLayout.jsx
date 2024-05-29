import Home from "../pages/Home";
import { Navbar } from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default MainLayout;
