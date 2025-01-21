
import { FaHome } from "react-icons/fa";
import "./CSS/footer.css";
import { FaRegClock } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { useLocation } from "react-router-dom"; 
import { useState, useEffect } from 'react';

function Footer() {

  const location = useLocation();

    const isActiveLink = (path) => location.pathname === path;

    const [isClocked, setIsClocked] = useState(localStorage.getItem('clocked') === 'true');

    // Kuuntele localStorage-muutoksia
    useEffect(() => {
      const handleStorageChange = () => {
        setIsClocked(localStorage.getItem('clocked') === 'true');
      };
  
      window.addEventListener('storage', handleStorageChange);
  
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, []);

  return (
    <div className="footer">
      <div className="footer-content">

        <div className="footer-item">
        
          <a className={`footer__link ${isActiveLink(`/`) ? 'active' : 'normal'}`} href={`/`}> 
          
          <div className="footer_icon">
            <FaHome />
          </div>
            <span className="footer__link-text">Etusivu</span>
          </a>
        </div>

        <div className="footer-item">
      <a className={`footer__link ${isActiveLink('/clock_timer') ? 'active' : 'normal'}`} href="/clock_timer">
        <div className="footer_icon">
          {isClocked ? 
            <div className="green-ball"></div>
          :
          <div className="grey-ball"></div>
          } 
          <FaRegClock />
        </div>
        <span className="footer__link-text">Kellokortti</span>
      </a>
    </div>

        <div className="footer-item">
       
       
        <a className={`footer__link ${isActiveLink(`/chat`) ? 'active' : 'normal'}`} href={`/chat`}>   
        <div className="footer_icon">
            <BsChatDots />
          </div>
          <div>Chät</div>
          </a>
        </div>

        <div className="footer-item">
       
        <a className={`footer__link ${isActiveLink(`/notifications`) ? 'active' : 'normal'}`} href={`/notifications`}>   
        <div className="footer_icon">
          
            <IoIosNotificationsOutline />
          </div>
          <div>Ilmoitukset</div>
          </a>
        </div>

        <div className="footer-item">
          
        <a className={`footer__link ${isActiveLink(`/account`) ? 'active' : 'normal'}`} href={`/account`}>   
          <div className="footer_icon">
            <IoPersonCircle />
          </div>
          <div>Asiakastili</div>
          </a>
        </div>
        
      </div>

      <div className="copyright">
      <h3>Nina Päivinen @ninze93</h3>
    </div>
    </div>
  );
}

export default Footer;
