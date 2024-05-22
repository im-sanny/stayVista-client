import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div>
            {/* sidebar */}
            <div className="min-h-screen ">sidebar</div>
            {/* outlet, dynamic content */}
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;