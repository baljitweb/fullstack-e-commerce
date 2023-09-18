import "./Newsletter.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">newsletter</span>
            <span className="big-text">Sign up for latest updates and offers</span>
            <div className="form">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
            <div className="text">Wil be used in accordnce with out privacy policy</div>
            <div className="social-icons">
                <ul>
                    <li className="icon"><FaFacebookF size={14} /></li>
                    <li className="icon"><FaTwitter size={14} /></li>
                    <li className="icon"><FaInstagram size={14} /></li>
                    <li className="icon"><FaLinkedinIn size={14} /></li>
                </ul>
            </div>
        </div>
    </div>;
};

export default Newsletter;
