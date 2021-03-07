import React, {useState} from 'react'
import { SliderData } from './SliderData';
import { FaArrowCircleRight,FaArrowCircleLeft } from 'react-icons/fa'; 

const ImageSlider = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1 )
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1 )
    }

    console.log(current);

    //if there is no data
    if(!Array.isArray(slides) || slides.length.length <= 0) {
        return null;
    }

    return (  

            <section className='slider'>
            <FaArrowCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowCircleRight className='right-arrow' onClick={nextSlide} />
                {SliderData.map((slide, idx) => {
                    return (
                        <div className={idx === current ? 'slide active' : 'slide'} key={idx}
                        >
                        {idx === current && (
                            <img src={slide.image} alt='construction' className='image' />
                        )}
                        </div>
                    );
                })}
            </section>
    );
};

export default ImageSlider;
