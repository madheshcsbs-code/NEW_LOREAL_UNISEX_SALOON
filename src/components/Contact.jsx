import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, Compass, Layers, Plus, Minus } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
  const mapLink = "https://maps.app.goo.gl/Byn3me3zN1MjkHMA9?g_st=aw";
  const whatsappLink = "https://wa.me/919942890776";
  const phoneLink = "tel:+919942890776";
  const emailLink = "mailto:priyatamilarasan62@gmail.com";

  // State for interactive map view mode and zoom
  const [mapType, setMapType] = useState('m'); // 'm' for roadmap, 'k' for satellite
  const [zoomLevel, setZoomLevel] = useState(16);

  const handleZoomIn = () => {
    if (zoomLevel < 19) setZoomLevel(prev => prev + 1);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 12) setZoomLevel(prev => prev - 1);
  };

  // Google Maps embed URL with query parameters
  const embedUrl = `https://maps.google.com/maps?q=New%20L’ORÉAL%20PROFESSIONNEL%20Unisex%20Salon,%20Sandhapet,%20Asanur%20Road,%20Tirukkoilur,%20Tamil%20Nadu%20605757&t=${mapType}&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header text-center animate-fade-up">
          <span className="section-eyebrow">LOCATION & CONTACT CENTER</span>
          <h2 className="section-title">
            Visit Our <span className="text-primary">Salon</span>
          </h2>
          <p className="section-subtitle">
            Explore our location in Tirukkoilur on the interactive map or connect directly with our front desk for appointments.
          </p>
        </div>

        <div className="contact-container">
          
          {/* Left Column: Location & Contact Cards */}
          <div className="contact-content animate-fade-up">
            
            {/* Enterprise Location Details Card */}
            <div className="location-info-card">
              <div className="card-badge">
                <span className="live-status-dot"></span>
                <span>Flagship Center</span>
              </div>
              
              <h3 className="location-card-title">New L’ORÉAL PROFESSIONNEL</h3>
              <p className="location-card-subtitle">Unisex Salon</p>

              <div className="location-details-list">
                <div className="detail-row">
                  <div className="detail-icon-box">
                    <MapPin size={18} className="detail-icon" />
                  </div>
                  <div className="detail-text-box">
                    <span className="detail-label">Full Address</span>
                    <span className="detail-value">
                      Sandhapet, Asanur Road, Tirukkoilur, 605757<br />
                      Tamil Nadu, India
                    </span>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-icon-box">
                    <Clock size={18} className="detail-icon" />
                  </div>
                  <div className="detail-text-box">
                    <span className="detail-label">Business Hours</span>
                    <span className="detail-value">Open Daily: 9:00 AM – 9:00 PM IST</span>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-icon-box">
                    <Phone size={18} className="detail-icon" />
                  </div>
                  <div className="detail-text-box">
                    <span className="detail-label">Direct Line</span>
                    <a href={phoneLink} className="detail-value detail-link">+91 9942890776</a>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-icon-box">
                    <Mail size={18} className="detail-icon" />
                  </div>
                  <div className="detail-text-box">
                    <span className="detail-label">Email Support</span>
                    <a href={emailLink} className="detail-value detail-link">priyatamilarasan62@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="location-card-actions">
                <a href={mapLink} target="_blank" rel="noreferrer" className="btn-primary flex-btn directions-btn">
                  <Navigation size={18} />
                  <span>Get Directions</span>
                  <ExternalLink size={14} />
                </a>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary flex-btn whatsapp-btn">
                  <FaWhatsapp size={18} className="whatsapp-icon" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Additional Quick Contact Grid */}
            <div className="quick-contact-strip">
              <div className="strip-item">
                <FaInstagram size={20} className="instagram-icon" />
                <div className="strip-text">
                  <span>Instagram</span>
                  <strong>@loreal_unisex_salon</strong>
                </div>
              </div>
              <a href={phoneLink} className="strip-item phone-strip-item">
                <Phone size={20} className="phone-icon" />
                <div className="strip-text">
                  <span>Instant Call</span>
                  <strong>+91 9942890776</strong>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Premium Interactive Location Map */}
          <div className="contact-map-viewport animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="interactive-map-container">
              
              {/* Map Top Control Header */}
              <div className="map-top-bar">
                <div className="map-title-box">
                  <span className="live-pulse"></span>
                  <span className="map-bar-title">Interactive Map View</span>
                </div>
                
                <div className="map-controls">
                  <div className="map-type-toggle">
                    <button 
                      className={`type-btn ${mapType === 'm' ? 'active' : ''}`}
                      onClick={() => setMapType('m')}
                      title="Standard Map View"
                    >
                      <Compass size={14} />
                      <span>Map</span>
                    </button>
                    <button 
                      className={`type-btn ${mapType === 'k' ? 'active' : ''}`}
                      onClick={() => setMapType('k')}
                      title="Satellite View"
                    >
                      <Layers size={14} />
                      <span>Satellite</span>
                    </button>
                  </div>

                  <div className="map-zoom-controls">
                    <button className="zoom-btn" onClick={handleZoomIn} title="Zoom In">
                      <Plus size={16} />
                    </button>
                    <button className="zoom-btn" onClick={handleZoomOut} title="Zoom Out">
                      <Minus size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Pin & Label Overlay */}
              <div className="map-floating-overlay">
                <div className="overlay-pin-card">
                  <div className="overlay-pin-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="overlay-pin-text">
                    <strong>New L’ORÉAL PROFESSIONNEL Unisex Salon</strong>
                    <span>Sandhapet, Asanur Road, Tirukkoilur</span>
                  </div>
                </div>
              </div>

              {/* Interactive Map Iframe */}
              <iframe
                title="New L’ORÉAL PROFESSIONNEL Unisex Salon Interactive Location Map"
                src={embedUrl}
                className="interactive-iframe"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Map Bottom Footer Bar */}
              <div className="map-bottom-bar">
                <span className="map-coords-tag">
                  Tirukkoilur, Tamil Nadu • 605757
                </span>
                <a href={mapLink} target="_blank" rel="noreferrer" className="map-open-link">
                  <span>Open Full Navigation Map</span>
                  <ExternalLink size={14} />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
