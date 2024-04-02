import { useState, useEffect } from 'react';

const TransformSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    // Define image URLs and slide links
    const slides = [
        {
            id: 1,
            imageUrl: 'https://i.ibb.co/FYPR6bS/before-after-1.jpg',
            prevSlide: 5,
            nextSlide: 2
        },
        {
            id: 2,
            imageUrl: 'https://i.ibb.co/jHvWK10/before-after-2.jpg',
            prevSlide: 1,
            nextSlide: 3
        },
        {
            id: 3,
            imageUrl: 'https://i.ibb.co/fn4YRd1/before-after-3.jpg',
            prevSlide: 2,
            nextSlide: 4
        },
        {
            id: 4,
            imageUrl: 'https://i.ibb.co/ZJ8Jq7g/before-after-4.jpg',
            prevSlide: 3,
            nextSlide: 5
        },
        {
            id: 5,
            imageUrl: 'https://i.ibb.co/J2Zx5pV/before-after-5.jpg',
            prevSlide: 4,
            nextSlide: 1
        }
    ];

    // Function to switch to the next slide
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 5 ? 1 : currentSlide + 1);
    };

    useEffect(() => {
        // Set interval to switch slides every 2 seconds
        const interval = setInterval(nextSlide, 2000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="my-12">
            <div className="text-center text-3xl mb-8">
                <h4>See their transformation</h4>
            </div>
            <div style={{ height: '400px' }} className="carousel bg-black w-full">
                <div id={`slide${currentSlide}`} className="carousel-item relative w-full ">
                    <img src={slides[currentSlide - 1].imageUrl} className="w-fit mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={`#slide${slides[currentSlide - 1].prevSlide}`} className="btn btn-circle">❮</a>
                        <a href={`#slide${slides[currentSlide - 1].nextSlide}`} className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransformSlider;
