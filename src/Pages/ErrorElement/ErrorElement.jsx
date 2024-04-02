import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="text-center mt-12 text-3xl">
            <h2>Page Not found</h2>
            <Link className="text-accent" to={'/'}>Home</Link>
        </div>
    );
};

export default ErrorElement;