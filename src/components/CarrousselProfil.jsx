import React, { useState } from "react";

export const CarrousselProfil = ({ data }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carroussel-container">
            <button onClick={prevImage}>Previous</button>
            <img src={data[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
            <button onClick={nextImage}>Next</button>
        </div>
    )
}