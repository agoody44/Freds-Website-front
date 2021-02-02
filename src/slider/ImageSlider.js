import React from 'react'
import { SliderData } from './SliderData';

const ImageSlider = () => {
    return (
    <>
        {SliderData.map((slide, idx) => {
            return <img src={slide.image} alt='construction image' />;
        })}
    </>
    );
};

export default ImageSlider;
