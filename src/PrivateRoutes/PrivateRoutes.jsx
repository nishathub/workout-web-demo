import { useContext } from "react";
import { EventContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { loading, user } = useContext(EventContext);
    const location = useLocation();
    const attemptedUrl = location.pathname;
    if (loading) {
        return <h2 className="text-2xl text-center mt-12">Loading...</h2>
    }
    if (!user) {
        return <Navigate state={attemptedUrl} to={'/Login'}></Navigate>
    }
    return (
        <div>
            { user && children}
        </div>
    );
};

export default PrivateRoutes;