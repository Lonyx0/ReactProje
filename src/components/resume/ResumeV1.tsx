import ReactWOW from "react-wow";

interface DataType {
    sectionClass?: string;
}

const ResumeV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div id="resume" className={`timeline-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="time-line-style-one-box">
                        <div className="row guttex-xl">
                            <div className="col-lg-6">
                                <h2>Deneyimlerim</h2>
                                <div className="time-style-one-items">

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Cmos Teknoloji Stajyer Yazılım Mühendisi</h4>
                                                    <p>
                                                        Ümraniye, İstanbul
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2024</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Bu stajda ağırlıklı olarak web geliştirme alanında olmak üzere mobil uygulama geliştirme, UI UX  tasarımı ve oyun geliştirme konularında deneyim kazandım. Ayrıca, takım çalışması ve proje yönetimi becerilerimi geliştirdim.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Freelance Yazılım Geliştirme</h4>
                                                    
                                                </div>
                                                <div className="right">
                                                    <span>2024 - Günümüz</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Fiverr, Upwork ve benzeri platformlarda freelance yazılım geliştirme hizmetleri sunuyorum. Müşterilerim için web siteleri, mobil uygulamalar ve özel yazılım çözümleri geliştiriyorum. Bu süreçte, müşteri ilişkileri yönetimi ve proje teslim sürelerine uyum konularında deneyim kazandım.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                    

                                </div>
                            </div>

                            <div className="col-lg-6">
                                <h2>Akademik</h2>
                                <div className="time-style-one-items">

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Yazılım Mühendisliği</h4>
                                                    <p>
                                                        Samsun Üniversitesi, Türkiye
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2023 - Günümüz</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Samsun Üniversitesi'nde Yazılım Mühendisliği bölümünde öğrenim görüyorum. Bu süreçte, yazılım geliştirme, veri yapıları, algoritmalar ve sistem analizi gibi konularda derinlemesine bilgi edindim. Ayrıca, projeler aracılığıyla pratik deneyim kazandım.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumeV1;