import FredLogo from '../imgs/FredLogo.png'

// /Users/agoody/Desktop/fred_project/client/src/imgs/FredLogo.png


export default function Header (props) {
    return (
    <header className="Header">
        <img id='logo' src={FredLogo} alt="Logo" />
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