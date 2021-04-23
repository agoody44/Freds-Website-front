import Facebook from '../imgs/facebook.png';
import Insta from '../imgs/Insta.png';

export default function Social (props) {
    return (
    <div className="Social">
        <div className='Insta'>
            <img className="Facebook-Logo" src={Facebook} alt="Logo" />
            <img className="Insta-Logo" src={Insta} alt="Logo" />
        </div>
    </div>
    )
}
