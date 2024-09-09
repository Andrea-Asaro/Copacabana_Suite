
import '../components/Whatsapp.css';

import walogo from "../media/whatsappIcon.png"

export default function Whatsapp() {
    const handleClick = () => {
        window.open('https://wa.me/3357728611', '_blank');
    };

    return (
        <span className='whatsappCorner' onClick={handleClick}>
            <img src={walogo} className='whatsappimg' alt="" />
        </span>
    );
}