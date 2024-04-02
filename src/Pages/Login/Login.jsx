import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import { useContext, useEffect, useState } from "react";
import { EventContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GitGoogleLogin from "../../Component/GitGoogleLogin/GitGoogleLogin";

const Login = () => {
    const location = useLocation();
    const attemptedUrl = location.state;
    const navigate = useNavigate();
    const { loginUser } = useContext(EventContext);
    const [errorMessage, setErrorMessage] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMessage('');
        const form = new FormData(e.currentTarget)
        const LoginEmail = form.get('email');
        const LoginPassword = form.get('password');

        // check password before authentication
        loginUser(LoginEmail, LoginPassword)
            .then((result) => {
                console.log(result.user.displayName);
                toast(`${result.user.displayName} logged in`, {
                    autoClose: 2500
                });
                setTimeout(() => {
                    navigate(attemptedUrl ? attemptedUrl : '/');
                }, 3000);
                
                
            })
            .catch((error) => setErrorMessage(error.message.slice(11)))
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto">
                <div className="mt-20">
                    <div>
                        <div className=" shrink-0 bg-base-200 rounded-md md:w-2/3 lg:w-1/2 w-11/12 mx-auto p-4">
                            <h2 className="text-2xl font-bold text-center">Login here</h2>
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <input type="email" name="email" placeholder="Email" className="input " required />
                                </div>
                                <div className="form-control">
                                    <input type="password" name="password" placeholder="Password" className="input " required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-accent">Login</button>
                                    <ToastContainer />
                                </div>
                                <div className="mt-4">
                                    <p className="text-lg">Don't have an account? <Link to={'/Register'} className="text-accent font-bold">Register</Link></p>
                                </div>
                                <div className="mt-4 text-center text-red-500">
                                    <p>{errorMessage}</p>
                                </div>
                            </form>
                        </div>
                        <GitGoogleLogin></GitGoogleLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;