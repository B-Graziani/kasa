import "../../assets/scss/Layout/Header.scss";
import "../../assets/scss/Layout/main.scss";
import logo from '../../assets/Images/logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="header-container row">
            <div className="logo">
                <img src={logo} alt="logo kasa" />
            </div>
            <div className="header-links">
                <nav>
                    <Link className="red" to="/home">Accueil</Link>
                    <Link className="red" to="/about">A Propos</Link>
                </nav>
            </div>
        </div>
    )
}