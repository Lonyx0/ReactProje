import { Link } from "react-router-dom";

const PromoV1 = () => {
    return (
        <>
            <div className="promot-box-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="promo-box-items text-center">
                                <h2>{`Merhaba👋Freelance için müsaitim`}</h2>
                                
                                <div className="button mt-40">
                                    <Link className="btn-style-regular" to="/contact"><span>Beraber iş yapalım </span> <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PromoV1;