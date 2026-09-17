import { useState } from 'react';
import { Eye, ExternalLink } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Hair', 'Beauty', 'Bridal', 'Salon'];

  const galleryImages = [
    { id: 1, src: '/images/hero.png', category: 'Salon', title: 'Premium Salon Ambience', alt: 'Salon Interior' },
    { id: 2, src: '/images/bridal.png', category: 'Bridal', title: 'Exquisite Bridal Makeup', alt: 'Bridal Makeup' },
    { id: 3, src: '/images/about.png', category: 'Beauty', title: 'Advanced Facial Treatment', alt: 'Beauty Treatment' },
    { id: 4, src: '/images/gallery_hair.png', category: 'Hair', title: 'Professional Hair Styling & Finish', alt: 'Hair Styling' }
  ];

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="section gallery-section section-alt">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center animate-fade-up">
          <span className="section-eyebrow">PORTFOLIO SHOWCASE</span>
          <h2 className="section-title">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="section-subtitle">
            Explore our state-of-the-art salon facility, equipment, and stunning hair & bridal transformations created by our expert stylists.
          </p>
        </div>

        {/* Corporate Filter Bar */}
        <div className="gallery-filters animate-fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              <span>{cat}</span>
              {cat === 'All' ? (
                <span className="pill-count">{galleryImages.length}</span>
              ) : (
                <span className="pill-count">
                  {galleryImages.filter(i => i.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image, idx) => (
            <div 
              key={image.id} 
              className="gallery-card animate-fade-up"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="gallery-img-wrapper">
                <img src={image.src} alt={image.alt} className="gallery-img" />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <span className="overlay-category">{image.category}</span>
                    <h3 className="overlay-title">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
