import { useState } from 'react';
import { serviceCategories } from '../data/services';
import { ChevronDown, ChevronUp, Search, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const filteredCategories = serviceCategories.filter((category) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    const matchTitle = category.title.toLowerCase().includes(q);
    const matchDesc = category.description.toLowerCase().includes(q);
    const matchServices = category.services.some((s) => s.toLowerCase().includes(q));
    return matchTitle || matchDesc || matchServices;
  });

  return (
    <section id="services" className="section services-section section-alt">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center animate-fade-up">
          <span className="section-eyebrow">CAPABILITY PORTFOLIO</span>
          <h2 className="section-title">
            Enterprise Service <span className="text-primary">Domains</span>
          </h2>
          <p className="section-subtitle">
            Explore our comprehensive portfolio of professional hair, skin, beauty, and grooming treatments delivered with authorized L'Oréal Professionnel formulations.
          </p>
        </div>

        {/* Enterprise Search Bar */}
        <div className="services-search-wrapper animate-fade-up">
          <div className="search-input-box">
            <Search size={20} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search services (e.g., Keratin, Hydra Facial, Hair Spa, Beard Design)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
                Clear
              </button>
            )}
          </div>
          <div className="search-result-count">
            Showing <strong>{filteredCategories.length}</strong> of <strong>{serviceCategories.length}</strong> Domains
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;
            const isExpanded = expandedId === category.id || searchQuery.length > 0;

            return (
              <div 
                key={category.id} 
                className={`service-card animate-fade-up ${isExpanded ? 'expanded' : ''}`}
                style={{ animationDelay: `${index * 0.04}s` }}
              >
                <div className="service-card-header" onClick={() => toggleExpand(category.id)}>
                  <div className="service-header-left">
                    <div className="service-icon-wrapper">
                      <Icon size={26} className="service-icon" />
                    </div>
                    <div className="service-info">
                      <div className="service-title-row">
                        <h3 className="service-title">{category.title}</h3>
                        <span className="service-count-badge">
                          {category.services.length} items
                        </span>
                      </div>
                      <p className="service-desc">{category.description}</p>
                    </div>
                  </div>
                  <div className="service-action">
                    <button className="expand-toggle-btn" aria-label="Toggle details">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                </div>

                <div className={`service-list-container ${isExpanded ? 'open' : ''}`}>
                  <div className="service-list-header">
                    <span>Available Solutions</span>
                  </div>
                  <ul className="service-list">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="service-list-item">
                        <span className="service-dot"></span>
                        <span className="service-name">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="service-card-footer">
                    <button className="btn-primary btn-sm flex-btn" onClick={() => {
                       const message = encodeURIComponent(`Hi, I would like to enquire about ${category.title} services at New L'Oréal Professionnel Unisex Salon.`);
                       window.open(`https://wa.me/919942890776?text=${message}`, '_blank');
                    }}>
                      <MessageSquare size={16} />
                      <span>Enquire Now</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="no-services-found">
            <p>No service domains found matching "{searchQuery}".</p>
            <button className="btn-secondary mt-3" onClick={() => setSearchQuery('')}>
              View All Services
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Services;
