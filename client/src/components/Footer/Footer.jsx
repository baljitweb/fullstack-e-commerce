import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Payment from "../../assets/payments.png"

const Footer = () => {
    return <footer>
        <div className="footer-content">
            <div className="col"><div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali</div></div>
            <div className="col"><div className="title">Contact</div>
                <div className="c-item"><FaLocationArrow />23 oakway Crawley</div>
                <div className="c-item"><FaMobileAlt />Phone: +44 123456789</div>
                <div className="c-item"><FaEnvelope />Email: xyz@specturm.com</div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">HeadPhones</span>
                <span className="text">Smart Phones</span>
                <span className="text">Projectors</span>
                <span className="text">Earbuds</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About Phones</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    xyz solutions copyright 2023
                </div>
                <img src={Payment} alt=" "/>
            </div>
        </div>
    </footer>
};

export default Footer;
