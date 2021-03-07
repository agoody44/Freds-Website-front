import Form from '../contact/Form.js';

function Footer (props) {
    return (
    <footer className="Footer">
        <div className='copyright'>
            <hr />
            <p>Copyright &copy; Coast Contracting {new Date().getFullYear()} All Rights Reserved</p>
        </div>
    </footer>
    )
}

export default Footer;