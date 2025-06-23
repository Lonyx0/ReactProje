import ReactWOW from "react-wow"
import partner1Light from "../../assets/img/kursunlogo.png"
import partner2Light from "../../assets/img/sabitlogo.png"
import partner3Light from "../../assets/img/pointlogo.png"


const PartnerV2 = () => {
    return (
        <>
            <div className="partner-style-one-area text-center default-padding bottom-less overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Partnerler</h4>
                                <h2 className="title">İş Yaptıpım Şirketler</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-full">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="partner-style-one-items">

                                {/* Single Item */}
                                <ReactWOW animation="fadeInLeft">
                                    <div className="partner-style-one-item">
                                        <img src={partner1Light} alt="Image Not Found" />
                                    </div>
                                </ReactWOW>

                                {/* Single Item */}
                                <ReactWOW animation="fadeInLeft">
                                    <div className="partner-style-one-item">
                                        <img src={partner2Light} alt="Image Not Found" />
                                    </div>
                                </ReactWOW>

                                {/* Single Item */}
                                <ReactWOW animation="fadeInLeft">
                                    <div className="partner-style-one-item">
                                        <img src={partner3Light} alt="Image Not Found" />
                                    </div>
                                </ReactWOW>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerV2;