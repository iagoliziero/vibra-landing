
import { FaInstagram, FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Tooltip = () => {
  return (
    <div >
      <ul className='flex items-center justify-center gap-6'>
        <li className="hover:scale-110 transition-transform duration-300">
          <a href="https://www.instagram.com/analuyzac" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={35}/>
          </a>
        </li>
        <li className="hover:scale-110 transition-transform duration-300">
          <a href="https://www.youtube.com/@analuyza" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={35}/>
          </a>
        </li>
        <li className="hover:scale-110 transition-transform duration-300">
          <a href="https://www.tiktok.com/@analuyzac" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={35}/>
          </a>
        </li>
        <li className="hover:scale-110 transition-transform duration-300">
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={35}/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Tooltip;
