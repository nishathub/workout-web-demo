

const ServiceDetailsCard = ({ service, loading }) => {
    const { features, expectation, name, image, price } = service;
    return (
        <div>
            {loading ? <h2>Loading</h2> :
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                    <div className=""></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl p-8 hero-overlay bg-opacity-90">
                            <div className="mb-8 text-5xl font-bold flex flex-col gap-4 lg:flex-row justify-between items-center">
                                <h1 className=" text-left">{name}</h1>
                                <p className="text-accent">{price}</p>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-4 text-left">
                                <div>
                                    <p className="font-bold mb-4 text-xl">Features</p>
                                    <div className="flex flex-col gap-1">
                                        {features?.map(feature => <h2 key={feature}>{feature}</h2>)}
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold mb-4 text-xl">Goals</p>
                                    <div className="flex flex-col gap-1">
                                        {expectation?.map(feature => <h2 key={feature}>{feature}</h2>)}
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-accent mt-8">Get Started</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ServiceDetailsCard;