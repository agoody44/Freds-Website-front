import Insta2 from '../imgs/insta2.png';
import Facebook from '../imgs/facebook.png';

function Social (props) {
    return (
    <div className="Social">

        <div className='Insta'>
            <img id='facebook' src={Facebook} alt="Logo" />
            <img id='insta' src={Insta2} alt="Logo" />
        </div>

    </div>
    )
}

export default Social;