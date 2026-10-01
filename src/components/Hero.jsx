import { MapPin, Clock, ArrowRight, ShieldCheck, Sparkles, Award, Star } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const bookAppointment = () => {
    const message = encodeURIComponent("Hi, I would like to book an appointment at New L’ORÉAL PROFESSIONNEL Unisex Salon. Please share the available timings.");
    window.open(`https://wa.me/919942890776?text=${message}`, '_blank');
  };

  const stats = [
    { value: "14+", label: "Service Categories", icon: Sparkles },
    { value: "100%", label: "L’ORÉAL PROFESSIONNEL Certified Products", icon: ShieldCheck },
    { value: "Daily", label: "9 AM – 9 PM Open Hours", icon: Clock },
    { value: "5.0 ★", label: "Client Satisfaction", icon: Star }
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column - Content */}
        <div className="hero-content animate-fade-up">
          <div className="hero-eyebrow-wrapper">
            <span className="hero-eyebrow">GLOBAL STANDARDS • UNISEX SALON CARE</span>
          </div>

          <h1 className="hero-title">
            New L’ORÉAL PROFESSIONNEL<br />
            <span className="hero-title-accent">Unisex Salon</span>
          </h1>

          <p className="hero-description">
            Experience world-class hair, beauty, and grooming solutions delivered with authorized L’ORÉAL PROFESSIONNEL care. Precision treatments tailored for both men and women in Tirukkoilur.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary hero-btn-main" onClick={bookAppointment}>
              <span>Book an Appointment</span>
              <ArrowRight size={18} />
            </button>
            <a href="#services" className="btn-secondary hero-btn-sub">
              Explore Services
            </a>
          </div>

          <div className="hero-location-info">
            <div className="info-item">
              <MapPin size={18} className="info-icon" />
              <span>Tirukkoilur • Sandhapet, Asanur Road</span>
            </div>
          </div>
        </div>

        {/* Right Column - Visual Graphic */}
        <div className="hero-visual animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="hero-image-wrapper">
            <img src={`${import.meta.env.BASE_URL}images/real_hero.jpg`} alt="New L’ORÉAL PROFESSIONNEL Unisex Salon Interior" className="hero-image" />
            
            {/* Primary Floating Badge */}
            <div className="floating-card primary-floating">
              <div className="card-icon-wrapper">
                <Clock size={22} className="card-icon" />
              </div>
              <div className="card-text">
                <span className="card-title">Open Today</span>
                <span className="card-subtitle">9:00 AM – 9:00 PM</span>
              </div>
            </div>

            {/* Secondary Enterprise Quality Badge */}
            <div className="floating-card secondary-floating">
              <div className="card-icon-wrapper star-icon-wrapper">
                <Award size={22} className="card-icon" />
              </div>
              <div className="card-text">
                <span className="card-title">Authorized Salon</span>
                <span className="card-subtitle">L’ORÉAL PROFESSIONNEL</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Enterprise Metrics Bar */}
      <div className="hero-stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div key={idx} className="stat-item">
                  <div className="stat-icon-box">
                    <IconComp size={20} />
                  </div>
                  <div className="stat-text-box">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
