import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import ServiceDetailsCard from "../../Component/ServiceDetailsCard";


const Service_Details = () => {
    const service_data = useLoaderData();
    const {id} = useParams();
    const [service, setService] = useState({});
    const [loading, setLoading] = useState(false);
    
    useEffect(()=> {
        setLoading(true);
        const matchedService = service_data.services.find(service => service.id == id);
        setService(matchedService);
        setLoading(false);
    }, [id, service_data])

    return (
        <div>
            <Navbar></Navbar>
            {
                loading ? <h2>Loading..</h2> : 
                <div>
                    <ServiceDetailsCard key={service.id} service={service} loading= {loading}></ServiceDetailsCard>
                </div>
            }
        </div>
    );
};

export default Service_Details;