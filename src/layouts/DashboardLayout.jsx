import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      {/* sidebar */}
      <div className="relative md:flex min-h-screen ">
        <Sidebar></Sidebar>
      </div>
      {/* outlet, dynamic content */}
      <div className="flex-1 md:ml-64">
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
