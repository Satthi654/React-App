import React, { useEffect, useRef, useState } from 'react';
import '../componentscss/IndustriesComponent.css';

const industries = [
  {
    name: 'Healthcare',
    icon: (
      <svg width="32" height="32" fill="none" stroke="#58a6ff" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/></svg>
    ),
    description: 'Digital transformation for hospitals, clinics, and health tech.'
  },
  {
    name: 'Finance',
    icon: (
      <svg width="32" height="32" fill="none" stroke="#58a6ff" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="4"/><path d="M16 3v4M8 3v4"/><path d="M12 12v2"/></svg>
    ),
    description: 'Fintech, banking, and insurance solutions for the digital age.'
  },
  {
    name: 'Retail',
    icon: (
      <svg width="32" height="32" fill="none" stroke="#58a6ff" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="4"/><path d="M16 3v4M8 3v4"/><path d="M5 10h14"/></svg>
    ),
    description: 'E-commerce, supply chain, and customer experience innovation.'
  },
  {
    name: 'Education',
    icon: (
      <svg width="32" height="32" fill="none" stroke="#58a6ff" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M21 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"/><path d="M7 19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2"/></svg>
    ),
    description: 'Edtech, digital classrooms, and learning management systems.'
  },
  {
    name: 'Manufacturing',
    icon: (
      <svg width="32" height="32" fill="none" stroke="#58a6ff" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="13" rx="4"/><path d="M6 7V3h12v4"/><path d="M6 17v4h12v-4"/></svg>
    ),
    description: 'Smart factories, IoT, and process automation.'
  },
  {
    name: 'Travel & Hospitality',
    icon: (
      <svg width="32" height="32" fill="none" stroke="#58a6ff" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8"/><path d="M3 16v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/><path d="M8 12h8"/></svg>
    ),
    description: 'Booking, guest experience, and travel tech solutions.'
  }
];

const IndustriesComponent = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const elementsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisible = new Set();
      elementsRef.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          newVisible.add(index);
        }
      });
      setVisibleElements(newVisible);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return (
    <div className="industries-container">
      {/* Hero Section */}
      <section className="industries-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-word title-word-1">Industries</span>
            <span className="title-word title-word-2">We</span>
            <span className="title-word title-word-3">Serve</span>
          </h1>
          <p className="hero-subtitle">
            <span className="title-word title-word-1">Empowering</span>
            <span className="title-word title-word-2">digital</span>
            <span className="title-word title-word-3">transformation</span>
            <span className="title-word title-word-1">across</span>
            <span className="title-word title-word-2">sectors</span>
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Industries</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Solutions Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Overview Section */}
      <section 
        className={`industries-overview ${visibleElements.has(0) ? 'animate-in' : ''}`}
        ref={el => (elementsRef.current[0] = el)}
      >
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>OUR INDUSTRY EXPERTISE</h2>
              <p>
                We specialize in delivering cutting-edge technology solutions across diverse industries, 
                helping businesses navigate the digital landscape with confidence. Our deep understanding 
                of industry-specific challenges enables us to create tailored solutions that drive growth 
                and innovation.
              </p>
              <p>
                From healthcare to finance, retail to manufacturing, we bring years of experience and 
                technical expertise to every project. Our solutions are designed to address the unique 
                needs and regulatory requirements of each industry while delivering measurable business value.
              </p>
            </div>
            <div className="overview-image">
              <div className="image-placeholder">
                <svg viewBox="0 0 24 24" width="80" height="80">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section 
        className={`industries-grid-section ${visibleElements.has(1) ? 'animate-in' : ''}`}
        ref={el => (elementsRef.current[1] = el)}
      >
        <div className="container">
          <h2 className="section-title">Industries We Transform</h2>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div className="industry-card" key={industry.name}>
                <div className="industry-icon">{industry.icon}</div>
                <div className="industry-content">
                  <h3 className="industry-name">{industry.name}</h3>
                  <p className="industry-description">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section 
        className={`contact-cta ${visibleElements.has(2) ? 'animate-in' : ''}`}
        ref={el => (elementsRef.current[2] = el)}
      >
        <div className="container">
          <h2>Ready to Transform Your Industry?</h2>
          <p>Contact us today to discuss how we can help you innovate and grow.</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Get In Touch</a>
            <a href="tel:+919742645805" className="cta-button secondary">Call Us Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesComponent;