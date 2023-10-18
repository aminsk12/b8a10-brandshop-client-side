import { Link, NavLink } from "react-router-dom";
import logo from '../../../../public/logo.png'
import User from "../../User/User";

const Navber = () => {
    return (
        <div className="">

            <div className="navbar bg-base-100 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/service"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                                }
                            >
                                Service
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                                }
                            >
                                About Us
                            </NavLink>
                        </ul>
                    </div>
                    <Link to="/"><img src={logo} className="sm:w-7  lg:w-24" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10 text-2xl font-bold">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/service"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                            }
                        >
                            Servic
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                            }
                        >
                            About Us
                        </NavLink>
                    </ul>
                </div>
                {/* avatar part  */}
                <div className="navbar-end">
                    <User></User>
                </div>
            </div>

        </div>
    );
};

export default Navber;