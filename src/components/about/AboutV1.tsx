import { useEffect } from 'react';
import shape3 from "/assets/img/shape/3.png"
import shape8 from "/assets/img/shape/8.png"
import CountUp from 'react-countup';
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AboutV1 = () => {


    // Scroll Animation 
    useEffect(() => {
        const upDown_Scroll = document.querySelector(".upDownScrol");

        if (upDown_Scroll) {
            gsap.set(upDown_Scroll, { yPercent: 105 });

            const scrollAnimation = gsap.to(upDown_Scroll, {
                yPercent: -105,
                ease: "none",
                scrollTrigger: {
                    trigger: upDown_Scroll,
                    end: "bottom center",
                    scrub: 1,
                },
            });

            // Cleanup function to kill the animation on unmount
            return () => {
                scrollAnimation.kill();
                const scrollTriggers = ScrollTrigger.getAll();
                scrollTriggers.forEach((trigger) => trigger.kill());
            };
        }
    }, []);

    return (
        <>
            <div id="about" className="about-style-one-area bg-gray default-padding">
                <div className="shape-style-one">
                    <img src={shape3} alt="Image Not Found" />
                    <img className="upDownScrol" src={shape8} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="fun-fact-style-one-items">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"> <CountUp end={3} enableScrollSpy={true} /></div>
                                        <div className="operator">+</div>
                                    </div>
                                    <span className="medium">Yıl Deneyim</span>
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><CountUp end={17} enableScrollSpy={true} /></div>
                                        <div className="operator">+</div>
                                    </div>
                                    <span className="medium">Tamamlanan Proje</span>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-7 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-one-info">
                                <p>
                                    Yazılım geliştirme alanında 3 yılı aşkın bir deneyime sahibim. Web ve mobil uygulama geliştirme konularında uzmanlaştım. 17'den fazla projeyi başarıyla tamamladım ve birçok mutlu müşteriye hizmet verdim. Teknoloji dünyasında yenilikçi çözümler sunmayı hedefliyorum.
                                </p>
                                <Link className="btn-style-regular btn-border" to="/resume" ><span>Daha Fazla</span> <i className="fas fa-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default AboutV1;