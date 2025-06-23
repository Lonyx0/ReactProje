import { Link } from 'react-scroll';

interface DataType {
    closeMenu?: () => void;
}

const ScrollMenu: React.FC<DataType> = ({ closeMenu }) => {
    return (
        <>
            <li>
                <Link className="smooth-menu" to="services" offset={-50} onClick={closeMenu}>Hizmetlerim</Link>
            </li>
            <li>
                <Link className="smooth-menu" to="portfolio" offset={-50} onClick={closeMenu}>Portfolyo</Link>
            </li>
            <li>
                <Link className="smooth-menu" to="yetenek" offset={-50} onClick={closeMenu}>Yeteneklerim</Link>
            </li>
            <li>
                <Link className="smooth-menu" to="resume" offset={-50} onClick={closeMenu}>Deneyimler</Link>
            </li>
            <li>
                <Link className="smooth-menu" to="contact" offset={-50} onClick={closeMenu}>İletişim</Link>
            </li>
        </>
    );
};

export default ScrollMenu;