import { Link } from "react-router-dom";

const SocialShareV1 = () => {
    return (
        <>
            <li>
                <Link to="https://www.instagram.com/erenn.altay1/" target='_blank'>
                    <i className="fab fa-instagram" />
                </Link>
            </li>
            <li>
                <Link to="https://www.linkedin.com/in/eren-altay-b85512234/" target='_blank'>
                    <i className="fab fa-linkedin-in" />
                </Link>
            </li>
            
        </>
    );
};

export default SocialShareV1;