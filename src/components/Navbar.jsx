import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';
import LogoImage from './LogoImage';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const bookAppointment = () => {
    const message = encodeURIComponent("Hi, I would like to book an appointment at New L'Oréal Professionnel Unisex Salon. Please share the available timings.");
    window.open(`https://wa.me/919942890776?text=${message}`, '_blank');
  };

  return (
    <header className="site-header">
      {/* Top Enterprise Info Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-info">
            <div className="top-info-item">
              <MapPin size={14} className="top-icon" />
              <span>Tirukkoilur • Sandhapet</span>
            </div>
            <div className="top-info-divider"></div>
            <div className="top-info-item">
              <Clock size={14} className="top-icon" />
              <span>Open Daily: 9:00 AM – 9:00 PM</span>
            </div>
          </div>
          <div className="top-bar-contact">
            <a href="tel:+919942890776" className="top-contact-item">
              <Phone size={14} className="top-icon" />
              <span>+91 9942890776</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#home" className="navbar-logo">
            <LogoImage className="logo-img" />
            <div className="logo-text-wrapper">
              <span className="logo-main-title">NEW L'Oréal</span>
              <span className="logo-sub-title">Professionnel Unisex Salon</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="navbar-links desktop-only">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="navbar-actions desktop-only">
            <button className="btn-primary navbar-cta" onClick={bookAppointment}>
              <span>Book Appointment</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="mobile-toggle" 
            onClick={toggleMenu} 
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-container">
            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <div className="mobile-info-card">
                <div className="mobile-info-row">
                  <MapPin size={16} className="text-primary" />
                  <span>Sandhapet, Tirukkoilur</span>
                </div>
                <div className="mobile-info-row">
                  <Clock size={16} className="text-primary" />
                  <span>9:00 AM – 9:00 PM</span>
                </div>
              </div>

              <button className="btn-primary mobile-book-btn" onClick={() => {
                setIsMobileMenuOpen(false);
                bookAppointment();
              }}>
                Book Appointment via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
