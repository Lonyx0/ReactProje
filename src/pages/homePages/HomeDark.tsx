import AboutV1 from "../../components/about/AboutV1";
import BannerV1 from "../../components/banner/BannerV1";
import BodyDark from "../../components/classes/BodyDark";
import ContactV1 from "../../components/contact/ContactV1";
import FactV1 from "../../components/fact/FactV1";
import FaqV2 from "../../components/faq/FaqV2";
import LayoutV3 from "../../components/Layouts/LayoutV3";
import PartnerV2 from "../../components/partner/PartnerV2";
import PortfolioV1 from "../../components/portfolio/PortfolioV1";
import ResumeV1 from "../../components/resume/ResumeV1";
import ServicesV1 from "../../components/services/ServicesV1";

const HomeDark = () => {
    return (
        <>
            <LayoutV3>
                <BannerV1 />
                <AboutV1 />
                <ServicesV1 sectionClass="default-padding" hasTitle={true} />
                <PortfolioV1 sectionClass="bg-gray default-padding" hasTitle={true} />
                <FactV1 />
                <ResumeV1 sectionClass="bg-gray default-padding" />
                <PartnerV2 />
                <FaqV2 />
                <ContactV1 sectionClass="bg-gray default-padding" />
                <BodyDark />
            </LayoutV3>
        </>
    );
};

export default HomeDark;