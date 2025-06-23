import BodyDark from "../../components/classes/BodyDark";
import LayoutV2 from "../../components/Layouts/LayoutV2";
import ServicesV1 from "../../components/services/ServicesV1";

const ServicePage = () => {
    return (
        <>
            <LayoutV2 breadCrumb='Hizmetlerimiz' title='Profesyonel hizmetlerimiz'>
                <ServicesV1 sectionClass='default-padding-bottom' />
            </LayoutV2>
            <BodyDark />
        </>
    );
};

export default ServicePage;