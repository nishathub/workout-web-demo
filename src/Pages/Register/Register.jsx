import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import { useContext, useState } from "react";
import { EventContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GitGoogleLogin from "../../Component/GitGoogleLogin/GitGoogleLogin";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { createUser, updateUser, user } = useContext(EventContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        // get form data
        const form = new FormData(e.currentTarget);
        const registerName = form.get('name');
        const registerPhotoUrl = form.get('photoUrl');
        const registerEmail = form.get('email');
        const registerPassword = form.get('password');
        // check input before authenticate
        const hasCapital = /[A-Z]/;
        const hasSpecial = /[~!@#$%^&*()_+-]/
        if (registerPassword.length < 6) {
            return setErrorMessage('password must be at least 6 characters')
        } else if (!hasCapital.test(registerPassword)) {
            return setErrorMessage('password must contain at least one Capital letter')
        } else if (!hasSpecial.test(registerPassword)) {
            return setErrorMessage('password must contain at least one $pecial character (@$%..)')
        }
        createUser(registerEmail, registerPassword)
            .then((result) => {
                console.log(result.user);
                // update user name and photo
                updateUser(registerName, registerPhotoUrl)
                    .then(() => console.log('user updated'))
                    .catch((error) => setErrorMessage(error.message.slice(11)))

                toast("Account Created!", {
                    autoClose: 2000
                });
                setTimeout(() => {
                    navigate('/');
                }, 2200);
            })
            .catch((error) => setErrorMessage(error.message.slice(11)))

    }
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div className="max-w-6xl mx-auto">
                    <div className="mt-20">
                        <div>
                            <div className=" shrink-0 bg-base-200 rounded-md md:w-2/3 lg:w-1/2 w-11/12 mx-auto p-4">
                                <h2 className="text-2xl font-bold text-center">Register here</h2>
                                <form onSubmit={handleRegister} className="card-body">
                                    <div className="form-control">
                                        <input type="text" name="name" placeholder="Name" className="input" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name="photoUrl" placeholder="PhotoUrl" className="input" />
                                    </div>
                                    <div className="form-control">
                                        <input type="email" name="email" placeholder="Email" className="input " required />
                                    </div>
                                    <div className="form-control">
                                        <input type="password" name="password" placeholder="Password" className="input " required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <span className="text-red-400">{user ? 'already logged in' : ''}</span>
                                        <button disabled ={user ? true : false} className="btn btn-accent">Create Account</button>
                                        <ToastContainer />
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-lg">Already have an account? <Link to={'/Login'} className="text-accent font-bold">Log-in</Link></p>
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
        </div>
    );
};

export default Register;