import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const User = () => {

    const { user, logOut } = useAuth();

    return (
        <div>
            user?.email ? <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user.photoURL} alt={user.displayName} />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                    </li>
                    <li>
                        <button className="btn btn-sm  btn-ghost"
                            onClick={logOut}
                        >Logout</button>

                    </li>
                    <li>
                        <Link to="/">
                            <button className="btn btn-sm  btn-ghost"

                            >Logout</button>
                        </Link>

                    </li>
                </ul>
            </div>
            :
            <Link to='/login'>
                <button className="btn btn-sm  btn-ghost">Login</button>
            </Link>

        </div>
    );
};

export default User;