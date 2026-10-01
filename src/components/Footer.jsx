import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { MapPin, Phone, Clock, ArrowUp } from 'lucide-react';
import LogoImage from './LogoImage';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info Column */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo-link">
              <LogoImage className="footer-logo-img" />
              <div className="footer-logo-text">
                <span className="footer-brand-title">NEW L’ORÉAL</span>
                <span className="footer-brand-sub">Professionnel Unisex Salon</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              Your premier destination for high-performance hair care, skin facials, and grooming services in Tirukkoilur. Powered by authorized L’ORÉAL PROFESSIONNEL products.
            </p>
            <div className="footer-address-info">
              <MapPin size={16} className="footer-icon" />
              <span>Tirukkoilur • Sandhapet • Asanur Road, 605757</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services Portfolio</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact Center</a></li>
            </ul>
          </div>

          {/* Service Capabilities Index Column */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Service Domains</h4>
            <ul className="footer-menu">
              <li><a href="#services">Haircuts & Styling</a></li>
              <li><a href="#services">Hair Spa & Keratin</a></li>
              <li><a href="#services">Facials & Hydra Care</a></li>
              <li><a href="#services">Bridal & HD Makeup</a></li>
              <li><a href="#services">Manicure & Pedicure</a></li>
            </ul>
          </div>

          {/* Connect & Hours Column */}
          <div className="footer-connect-col">
            <h4 className="footer-heading">Connect & Hours</h4>
            <div className="footer-hours-box">
              <Clock size={16} className="footer-icon" />
              <div>
                <strong>Operating Hours</strong>
                <p>9:00 AM – 9:00 PM (Daily)</p>
              </div>
            </div>
            
            <div className="footer-social-row">
              <a 
                href="https://wa.me/919942890776" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="WhatsApp"
                className="social-btn whatsapp-social"
              >
                <FaWhatsapp size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="social-btn instagram-social"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2026 New L’ORÉAL PROFESSIONNEL Unisex Salon. All rights reserved.
          </p>
          <div className="footer-bottom-actions">
            <span className="footer-quality-tag">Authorized L’ORÉAL PROFESSIONNEL Partner</span>
            <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
