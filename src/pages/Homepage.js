import ImageSlider from "../slider/ImageSlider";
import { SliderData } from "../slider/SliderData";

export default function HomePage (props) {

    return (
        <main className='Page' id='back'>
            <ImageSlider slides={SliderData} />;
        </main>
    )
}
