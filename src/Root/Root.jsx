import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";


const Root = () => {
    return (
        <div className="relative">
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;