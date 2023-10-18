import { Outlet } from "react-router-dom";
import Navber from "../Component/Header/Navber/Navber.jsx";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default Root;