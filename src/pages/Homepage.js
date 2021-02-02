import ImageSlider from "../slider/ImageSlider";
import { SliderData } from "../slider/SliderData";

export default function HomePage (props) {

    return (
        <main className='Page' id='back'>
        <br/>
            <div className='welcome'>
                <p>Hi my name is Fred I am a general contractor in Essex Ma.</p>
            </div>
            <ImageSlider slides={SliderData} />;
        </main>
    )
}
