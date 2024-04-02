import { useContext } from "react";
import { EventContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";


const GitGoogleLogin = () => {
    const { googleLogin, githubLogin } = useContext(EventContext);
    const navigate = useNavigate();
    const location = useLocation();
    const attemptedUrl = location.state;

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user);
                toast("Google Login successful", {
                    autoClose: 2000
                });
                setTimeout(() => {
                    navigate(attemptedUrl ? attemptedUrl : '/');
                }, 2200);
            })
            .catch((error) => {
                console.error(error.message);
                toast(`${error.message.slice(11)}`, {
                    autoClose: 2000
                });
            })
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then((result) => {
                console.log(result.user);
                toast("Github Login successful", {
                    autoClose: 2000
                });
                setTimeout(() => {
                    navigate(attemptedUrl ? attemptedUrl : '/');
                }, 2200);
            })
            .catch((error) => {
                console.error(error.message);
                toast(`${error.message.slice(11)}`, {
                    autoClose: 2000
                });
            })
    }
    return (
        <div className="mb-8">
            <div className="rounded-md md:w-2/3 lg:w-1/2 w-11/12 mx-auto p-4 border-slate-500">
                <div className="flex items-center gap-4 mb-4">
                    <div className="border border-slate-400 w-full"></div>
                    <h2 className="border"></h2>
                    <div className="border border-slate-400 w-full"></div>
                </div>
                <div>
                    <button onClick={handleGoogleLogin} className="btn btn-outline btn-success w-full mb-4">
                        Login with google
                    </button>
                    <button onClick={handleGithubLogin} className="btn btn-outline btn-info w-full">
                        Login with github
                    </button>
                    <ToastContainer></ToastContainer>
                </div>

            </div>
        </div>
    );
};

export default GitGoogleLogin;