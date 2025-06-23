import BodyDark from "../../components/classes/BodyDark";
import ContactV1 from "../../components/contact/ContactV1";
import LayoutV2 from "../../components/Layouts/LayoutV2";

const ContactPage = () => {
    return (
        <>
            <LayoutV2 breadCrumb='Contact' title='Hadi Beraber Çalışalım'>
                <ContactV1 sectionClass='default-padding-bottom' />
            </LayoutV2>
            <BodyDark />
        </>
    );
};

export default ContactPage;