import { Link } from 'react-scroll';

interface DataType {
    closeMenu?: () => void;
}

const ScrollContact: React.FC<DataType> = ({ closeMenu }) => {
    return (
        <>
            <li className='button'>
                <Link className="smooth-menu" to="contact" offset={-50} onClick={closeMenu}>{`Hadi Konuşalım`} <i className="fas fa-comment-alt" /></Link>
            </li>
        </>
    );
};

export default ScrollContact;