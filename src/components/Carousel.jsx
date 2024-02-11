import React from 'react'
import React, { useEffect, useState } from 'react';
import Image1 from "../images/slideshow_1.jpg";
import Image2 from "../images/slideshow_1.jpg";
import Image3 from "../images/slideshow_1.jpg";

const AddEvent = (props) => {
    const cardsArray = [
        {
            image: Image1,
            text: "",
        },
        {
            image: Image2,
            text: "",
        },
        {
            image: Image3,
            text: "",
        },
    ];
    
    const [currentImage, setCurrentImage] = useState('');
    const [currentText, setCurrentText] = useState('');



    return (
        <div className="slideshow">
            <div className="images">
                <img src = {currentImage} />
            </div>
            <div className='slide-text'>
                {currentText}
            </div>
            <button className="left"> &lt;</button>
            <button className="right"> &gt;</button>
        </div>
    );
}

export default Carousel;