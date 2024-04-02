import { useNavigate } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {image, id, name, description, price, details_button} = service;
    const navigate = useNavigate();

    const handleServiceCardButton = () => {
        console.log(id);
       navigate(`/Service-details/${id}`);

    }
    return (
        <div className="max-w-lg lg:max-w-full">
            <div>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col md:">
                        <img src={image} className=" rounded-lg" />
                        <div>
                            <h1 className="text-3xl font-bold">{name}</h1>
                            <p className="py-6">{description}</p>
                            <p className="mb-4"><span className="text-4xl font-bold my-4">{price}</span> per month</p>
                            <button onClick={handleServiceCardButton} className="btn btn-primary">{details_button}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;