import { Link } from "react-router-dom";

const NotFoundContent = () => {
    return (
        <>
            <div className="error-page-area default-padding-bottom pt-260 pt-md-180 pt-xs-140 text-center">
                <div className="shape-left" style={{ background: 'url(/assets/img/shape/44-left.png)' }} />
                <div className="shape-right" style={{ background: 'url(/assets/img/shape/44-right.png)' }} />
                <div className="container">
                    <div className="error-box">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1>404</h1>
                                <h2>Üzgünüm Sayfayı Bulamadım</h2>
                                <p>
                                    Sanırım yanlış bir yere geldiniz. Aradığınız sayfa artık mevcut değil veya taşınmış olabilir.
                                </p>
                                <Link className="btn mt-20 btn-md btn-theme" to="/">Anasayfaya Dön</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundContent;