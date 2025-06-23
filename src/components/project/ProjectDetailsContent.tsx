
import { useEffect, useState } from 'react';

interface DataType {
    thumbFull?: any;
    title?: string;
    description?: string;
    date?: string;

}

const ProjectDetailsContent = ({ projectData }: { projectData: DataType }) => {
    const { thumbFull } = projectData
    const {title} = projectData
    const {description} = projectData
    const {date} = projectData

    // Image Scroll Animation 
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Background Move  */}
            <div className="banner-animation-zoom overflow-hidden">
                <div className="container">
                    <div className="image-move-bg">
                        <div className="animation-zoom-banner" id="js-hero"
                            style={{ width: `${100 + scroll / 18}%` }}
                        >
                            <img src={`/src/assets/img/${thumbFull}`} alt="Image Not Found"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-details-items default-padding">
                <div className="container">
                    <div className="top-info">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 left-info mb-xs-40 mb-md-50">
                                <div className="project-single-info">
                                    <ul>
                                        <li>
                                            Müşteri <span>{title}</span>
                                        </li>
                                        <li>
                                            Tarih <span>{date}</span>
                                        </li>
                                        <li>
                                            Hizmet <span>Web Geliştirme</span>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="right-info col-xl-8 col-lg-7 pl-50 pl-md-15 pl-xs-15 mt-md-10">
                                <h2>Açıklama</h2>
                                <p>
                                    {description}
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            

            
        </>
    );
};

export default ProjectDetailsContent;