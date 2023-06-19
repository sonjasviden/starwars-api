import { Outlet } from "react-router-dom";
import Navbar from "./Navigation";

const Layout = () => {
    return (
        <>
            <div>
                <Navbar />
                <Outlet />
            </div>
        </>
    );
};

export default Layout;