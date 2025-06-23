import about4 from "../../assets/img/kod1.jpg";
import shape12 from "/assets/img/shape/12.png";
import { Link } from "react-router-dom";

const FaqV2 = () => {
    return (
        <>
            <div className="faq-style-one-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="thumb-style-one">
                                <img src={about4} alt="Image Not Found" />
                                <div className="chat-card">
                                    <p>{`Aradığını Bulamıyor musun?`}</p>
                                    <h5>Mail ile hemen bana ulaş</h5>
                                    <Link to="mailto:eren60.altay@gmail.com" ><i className="fa regular fa-envelope" /></Link>
                                    <img src={shape12} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="faq-style-one-items">
                                <h4 className="sub-title">SSS</h4>
                                <h2>Sık Sorulan Sorular</h2>
                                <div className="accordion mt-30" id="faqAccordion">
                                    <div className="accordion-item accordion-style-one">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Fiyatlandırmalar nasıl?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p>
                                                    Net fiyatlandırma yapmıyorum. Projeye göre fiyatlandırma yapıyorum. Proje detaylarını bana mail atarsan sana en kısa sürede dönüş yaparım.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item accordion-style-one">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Projeler tahmini ne kadar sürer?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p>
                                                    Projelerin süresi, projenin kapsamına ve gereksinimlerine bağlı olarak değişir. Genellikle, küçük projeler birkaç hafta içinde tamamlanabilirken, daha büyük projeler birkaç ay sürebilir. Detayları konuşmak için benimle iletişime geçebilirsin.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqV2;