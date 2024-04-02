import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner";
import Navbar from "../../Component/Navbar";
import TransformSlider from "../../Component/TransformSlider";
import HomeServiceBox from "../../Component/HomeServiceBox";


const Home = () => {
    const serviceData = useLoaderData();
    const services = serviceData.services;
    return (
        <div>
            <div id="navbar-banner-bg">
                <Navbar></Navbar>
                <Banner></Banner>
            </div >
            <div className="max-w-6xl mx-auto my-12">
                <div>
                    <TransformSlider></TransformSlider>
                </div>
                <div className="">
                    <h2 className="text-3xl text-center mb-8">Our Services</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 place-items-center">
                        {services.map(service => <HomeServiceBox key={service.id} service={service}></HomeServiceBox>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;