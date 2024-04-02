
import ServiceCard from "../../Component/ServiceCard";
import Navbar from "../../Component/Navbar";
import Banner from "../../Component/Banner";
import { useLoaderData } from "react-router-dom";

const Service = () => {
    const serviceData = useLoaderData();
    const services = serviceData.services;

    return (
        <div>
            <div id="navbar-banner-bg">
                <Navbar></Navbar>
                <Banner></Banner>
            </div >
            <div className="my-12 p-4 max-w-6xl mx-auto">

                <h2 className="text-center text-3xl font-bold mb-4">Our Services</h2>
                <div className="grid lg:grid-cols-2 gap-4 justify-center">
                    {
                        services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;