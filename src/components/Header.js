import FredLogo from '../imgs/FredLogo.png'
import profilepic from '../imgs/profilepic.png';

// /Users/agoody/Desktop/fred_project/client/src/imgs/FredLogo.png


export default function Header (props) {
    return (
    <header className="Header">
        <img id='logo' src={FredLogo} alt="Logo" />
        <div className='profilepic'>
            <img id='logo' src={profilepic} alt="Logo" width="200" height="200" />
        </div>
            <div>
                <nav>
                    <ul className='Nav'>
                        <li>
                        <h1>Coast Contracting</h1>
                        </li>
                    </ul>

                </nav>
            </div>
        </header>
    )
}