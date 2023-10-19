import { Outlet } from "react-router-dom";
import Navber from "../Component/Header/Navber/Navber.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "../Component/Pages/Footer/Footer.jsx";

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default Root;