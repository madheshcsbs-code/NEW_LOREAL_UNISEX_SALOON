import { Award, Users, Sparkles, Clock, ShieldCheck, Check } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: Award,
      title: "L'Oreal Certified Products",
      description: "We exclusively use authentic L'Oreal Professional products for our salon services to ensure premium, long-lasting quality results."
    },
    {
      id: 2,
      icon: Users,
      title: "Unisex Expertise",
      description: "Expert beauty, hair styling, and grooming services tailored specifically for both men and women in a comfortable, modern setting."
    },
    {
      id: 3,
      icon: Sparkles,
      title: "Complete Salon Solutions",
      description: "From precision haircuts and hair treatments to bridal makeup, skin care facials, and spa therapies under one roof."
    },
    {
      id: 4,
      icon: Clock,
      title: "Convenient All-Week Hours",
      description: "Open 7 days a week from 9:00 AM to 9:00 PM to seamlessly accommodate your schedule."
    }
  ];

  return (
    <section className="section why-choose-section">
      <div className="container">
        
        <div className="section-header text-center animate-fade-up">
          <span className="section-eyebrow">ENTERPRISE DIFFERENTIATORS</span>
          <h2 className="section-title">
            Why Choose <span className="text-primary">Our Salon</span>
          </h2>
          <p className="section-subtitle">
            We combine high-performance product technology, certified styling expertise, and strict hygiene standards to deliver an exceptional client experience.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id} 
                className="feature-card animate-fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="feature-top-accent"></div>
                <div className="feature-card-body">
                  <div className="feature-icon-wrapper">
                    <Icon size={28} className="feature-icon" />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.description}</p>
                </div>
                <div className="feature-card-footer">
                  <span className="feature-check">
                    <Check size={14} /> Guaranteed Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
