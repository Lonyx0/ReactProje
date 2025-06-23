import { Link } from "react-router-dom";
import logo from "../../assets/img/logoEren.png"

const FooterV1 = () => {
    return (
        <>
            <footer className="default-padding bg-cover" style={{ backgroundImage: 'url(assets/img/shape/1.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="footer-items text-center">
                                <Link to="/" className="footer-logot"><img src={logo} alt="Image Not Found" /></Link>
                                <ul className="foter-menu">
                                    <li><Link to="/">Anasayfa</Link></li>
                                    <li><Link to="/service">Servisler</Link></li>
                                    <li><Link to="/contact">İletişim</Link></li>
                                </ul>
                                <p>Copyright  &copy; {(new Date().getFullYear())} ErenAltay. Tüm Hakları Saklıdır</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;