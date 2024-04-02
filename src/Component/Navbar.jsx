import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { EventContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logoutUser, loading } = useContext(EventContext);
    const navigate = useNavigate();
    console.log(user);

    const handleLogout = e => {
        e.preventDefault();
        logoutUser()
            .then(() => {
                console.log('Log out successful');
                navigate('/Login');
            })
            .catch((error) => console.error(error.message))

    }

    const links =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/Service'}>Service</NavLink></li>
            <li><NavLink to={'/Blog'}>Blog</NavLink></li>
            {
                user &&
                <>
                    <li className="text-slate-200"><NavLink to={'/Community'}>Community</NavLink></li>
                    <li className="text-slate-200"><NavLink to={'/Performance'}>Performance</NavLink></li>
                </>
            }
        </>
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Endure</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="flex items-center gap-4">
                            {
                                user &&

                                <div className="flex items-center gap-2">
                                    <p className="font-bold text-end hidden sm:flex">{user.displayName}</p>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL ? user.photoURL : "https://static.thenounproject.com/png/363640-200.png"} />
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                user ?
                                    <a onClick={handleLogout} className="btn btn-accent font-bold">Logout</a>
                                    :
                                    <Link to={'/Login'} className="btn btn-accent font-bold">Log-in</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;