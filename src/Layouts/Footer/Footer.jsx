import "../../assets/scss/Layout/Footer.scss";
import "../../assets/scss/Layout/main.scss";
import logo from '../../assets/Images/logo-footer.png';

export const Footer = () => {
    return (
        <div className="footer-container column p-2">
            <div className="logo">
                <img src={logo} alt="logo kasa" />
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}