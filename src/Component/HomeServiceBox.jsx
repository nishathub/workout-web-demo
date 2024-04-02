import { Link } from "react-router-dom";


const HomeServiceBox = ({ service }) => {
    const { name, image, price, description, id } = service;
    return (
        <div className="w-fit"> 
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="text">{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/Service-details/${id}`} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeServiceBox;