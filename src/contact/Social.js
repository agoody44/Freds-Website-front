import Insta2 from '../imgs/insta2.png';
import Facebook from '../imgs/facebook.png';

export default function Social (props) {
    return (
    <div className="Social">
        <div className='Insta'>
            <img id='facebook' src={Facebook} alt="Logo" />
            <img id='insta2' src={Insta2} alt="Logo" />
        </div>
    </div>
    )
}
