import { CheckCircle2, Award, Users, ShieldCheck } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    "Professional salon experience",
    "L'Oreal Professional products",
    "Wide range of services",
    "Unisex services",
    "Convenient location",
    "Personalized service"
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        
        {/* Visual Graphic Column */}
        <div className="about-visual animate-fade-up">
          <div className="about-image-wrapper">
            <img src={`${import.meta.env.BASE_URL}images/real_reception.jpg`} alt="Salon Professional Service" className="about-image" />
            <div className="about-experience-badge">
              <span className="badge-number">100%</span>
              <span className="badge-text">Authentic Product Standards</span>
            </div>
            <div className="about-decorative-frame"></div>
          </div>
        </div>

        {/* Content Column */}
        <div className="about-content animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <span className="section-eyebrow">CORPORATE OVERVIEW</span>
          
          <h2 className="section-title">
            Beauty, Hair & Grooming —<br />
            <span className="text-primary">All Under One Roof</span>
          </h2>
          
          <p className="about-description">
            Welcome to <strong>New L'Oreal Professional Unisex Salon</strong>, your premier destination for exceptional beauty, hair, and grooming services in Tirukkoilur. We cater to both men and women, ensuring everyone walks out feeling confident and looking their absolute best.
          </p>
          <p className="about-description">
            Our expert stylists and therapists combine rich salon experience with premium L'Oreal Professional formulations to deliver personalized care in a relaxing, hygienic, and state-of-the-art environment.
          </p>

          <div className="about-highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon-box">
                  <CheckCircle2 size={18} className="highlight-icon" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="about-footer-info">
            <div className="info-badge">
              <ShieldCheck size={20} className="text-primary" />
              <span>Certified Hygiene & Care Standards</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
