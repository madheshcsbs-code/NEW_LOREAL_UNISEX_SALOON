import { useState } from 'react';
import { Eye, ExternalLink } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Hair', 'Beauty', 'Bridal', 'Salon'];

  const galleryImages = [
    { id: 1, src: '/images/real_hero.jpg', category: 'Salon', title: 'Premium Salon Ambience', alt: 'Salon Interior' },
    { id: 2, src: '/images/real_storefront.jpg', category: 'Salon', title: 'Our Storefront', alt: 'Salon Storefront' },
    { id: 3, src: '/images/real_beauty_room.jpg', category: 'Beauty', title: 'Beauty & Wellness Room', alt: 'Beauty Room' },
    { id: 4, src: '/images/real_products.jpg', category: 'Hair', title: 'Professional Products', alt: 'Salon Products' },
    { id: 5, src: '/images/real_reception.jpg', category: 'Salon', title: 'Welcoming Reception', alt: 'Reception Area' }
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
