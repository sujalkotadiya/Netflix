import React, { useState, useEffect } from 'react';

// Sample images for the slider
const images = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/37bd3292496951.5e4cd02c9d61d.jpg",
    "https://johnsneaker.com/wp-content/uploads/2021/06/il_fullxfull.2372362535_fp33-scaled-1.jpg",
    "https://picfiles.alphacoders.com/357/thumb-1920-357869.jpg ",
    "https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/230536/onefinemorning-posterart.jpg",
    "https://vectorified.com/image/vector-movie-posters-32.jpg",
    "https://images.hindustantimes.com/img/2023/01/25/1600x900/pathaan_movie_review_1674631292696_1674631292838_1674631292838.jpeg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/37bd3292496951.5e4cd02c9d61d.jpg",
    "https://johnsneaker.com/wp-content/uploads/2021/06/il_fullxfull.2372362535_fp33-scaled-1.jpg",
    "https://picfiles.alphacoders.com/357/thumb-1920-357869.jpg ",
    "https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/230536/onefinemorning-posterart.jpg",
    "https://vectorified.com/image/vector-movie-posters-32.jpg",
    "https://images.hindustantimes.com/img/2023/01/25/1600x900/pathaan_movie_review_1674631292696_1674631292838_1674631292838.jpeg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/37bd3292496951.5e4cd02c9d61d.jpg",
    "https://johnsneaker.com/wp-content/uploads/2021/06/il_fullxfull.2372362535_fp33-scaled-1.jpg",
    "https://picfiles.alphacoders.com/357/thumb-1920-357869.jpg ",
    "https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/230536/onefinemorning-posterart.jpg",
    "https://vectorified.com/image/vector-movie-posters-32.jpg",
    "https://images.hindustantimes.com/img/2023/01/25/1600x900/pathaan_movie_review_1674631292696_1674631292838_1674631292838.jpeg",
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = images.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex < totalImages - 5) {
                return prevIndex + 1;
            }
            return prevIndex; // Stop at the last image
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex > 0) {
                return prevIndex - 1;
            }
            return prevIndex; // Stay at the first image
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex < totalImages - 5) {
                    return prevIndex + 1;
                }
                return prevIndex; // Stop at the last image
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [totalImages]);

    return (
        <div className="relative w-full h-64 overflow-hidden mt-[830px]">
            <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${(currentIndex * 100) / 5}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-1/5 flex-shrink-0">
                        <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors duration-200"
                onClick={prevSlide}
            >
                &#9664;
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors duration-200"
                onClick={nextSlide}
            >
                &#9654;
            </button>
        </div>
    );
};

export default Slider;
