import React, { useEffect, useRef, useState } from 'react';
import '../componentscss/ServiceComponent.css';

const services = [
  {
    title: 'Web Development',
    image: '/slogo.png',
    description: 'Custom websites, portals, and web applications built with the latest technologies, responsive design, and best practices for performance and SEO.',
    longDescription: 'We build robust, scalable, and high-performing web solutions tailored to your business needs. Our expertise covers everything from landing pages to complex web applications, always focusing on user experience, security, and SEO best practices.'
  },
  {
    title: 'Mobile Apps',
    image: '/ssslogo.png',
    description: 'Native and cross-platform mobile apps for iOS and Android, delivering seamless user experiences and robust performance.',
    longDescription: 'Our team creates beautiful, intuitive mobile apps for both iOS and Android. We use the latest frameworks and technologies to ensure your app is fast, secure, and delightful to use, whether it\'s for consumers or enterprise.'
  },
  {
    title: 'UI/UX Design',
    image: '/SSS.png',
    description: 'User-centered design solutions, wireframes, prototypes, and visual design to maximize engagement and usability.',
    longDescription: 'We craft engaging, user-friendly interfaces and experiences. From wireframes to high-fidelity prototypes, our design process ensures your product is both beautiful and easy to use, increasing satisfaction and retention.'
  },
  {
    title: 'Cloud Solutions',
    image: '/ddd.png',
    description: 'Scalable cloud infrastructure, migration, and DevOps services for modern businesses.',
    longDescription: 'We help you leverage the power of the cloud for scalability, reliability, and cost savings. Our services include cloud migration, infrastructure setup, and ongoing management for AWS, Azure, and Google Cloud.'
  },
  {
    title: 'DevOps & Automation',
    image: '/ssss.png',
    description: 'CI/CD pipelines, infrastructure as code, and automation to streamline your software delivery.',
    longDescription: 'Automate your development and deployment workflows with our DevOps expertise. We implement CI/CD pipelines, infrastructure as code, and monitoring solutions to help you deliver faster and more reliably.'
  },
  {
    title: 'IT Consulting',
    image: '/home_bg_img.png',
    description: 'Expert advice and strategy for digital transformation, technology adoption, and IT project management.',
    longDescription: 'Our consultants provide strategic guidance for your IT initiatives, from digital transformation to technology selection and project management. We help you make informed decisions and achieve your business goals.'
  }
];

const ServiceModal = ({ open, onClose, service }) => {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (!open || !service) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">&times;</button>
        <img src={service.image} alt={service.title} className="modal-img" />
        <h2>{service.title}</h2>
        <p className="modal-desc">{service.longDescription}</p>
      </div>
    </div>
  );
};

const ServiceComponent = () => {
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const newVisible = services.map((_, idx) => {
        const el = cardsRef.current[idx];
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        // Trigger animation when card is 20% visible in viewport
        return rect.top < window.innerHeight * 0.8;
      });
      setVisibleCards(newVisible);

      // CTA lazy loading
      if (ctaRef.current) {
        const rect = ctaRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          setCtaVisible(true);
        }
      }
    };

    // Use throttled scroll handler for better performance
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
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const handleReadMore = (service) => {
    setModalService(service);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalService(null);
  };

  return (
    <div className="service-container">
      <ServiceModal open={modalOpen} onClose={handleCloseModal} service={modalService} />
      <section className="service-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-word title-word-1">Our</span>
            <span className="title-word title-word-2">Software</span>
            <span className="title-word title-word-3">Solutions</span>
          </h1>
          <p className="hero-subtitle">
            <span className="title-word title-word-1">Empowering</span>
            <span className="title-word title-word-2">your</span>
            <span className="title-word title-word-3">business</span>
            <span className="title-word title-word-1">with</span>
            <span className="title-word title-word-2">technology,</span>
            <span className="title-word title-word-3">innovation,</span>
            <span className="title-word title-word-1">and</span>
            <span className="title-word title-word-2">expertise.</span>
            <span className="title-word title-word-3">Explore</span>
            <span className="title-word title-word-1">our</span>
            <span className="title-word title-word-2">wide</span>
            <span className="title-word title-word-3">range</span>
            <span className="title-word title-word-1">of</span>
            <span className="title-word title-word-2">services</span>
            <span className="title-word title-word-3">designed</span>
            <span className="title-word title-word-1">to</span>
            <span className="title-word title-word-2">help</span>
            <span className="title-word title-word-3">you</span>
            <span className="title-word title-word-1">succeed</span>
            <span className="title-word title-word-2">in</span>
            <span className="title-word title-word-3">the</span>
            <span className="title-word title-word-1">digital</span>
            <span className="title-word title-word-2">era.</span>
          </p>
          <a href="/contact" className="hero-cta">Get a Free Consultation</a>
        </div>
      </section>
      <section className="services-card-section">
        <div className="services-card-grid-2col">
          {services.map((service, idx) => (
            <div
              className={`service-card-2col ${visibleCards[idx] ? 'card-in' : ''}`}
              key={idx}
              ref={el => (cardsRef.current[idx] = el)}
              style={{
                animationDelay: visibleCards[idx] ? `${idx * 0.1}s` : '0s'
              }}
            >
              <div className="service-card-img-wrap">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-card-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="service-card-fallback"
                  style={{ display: 'none' }}
                >
                  <span>{service.title.charAt(0)}</span>
                </div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="read-more-btn" onClick={() => handleReadMore(service)}>Read More</button>
            </div>
          ))}
        </div>
      </section>
      <section className={`contact-cta${ctaVisible ? ' animate-in' : ''}`} ref={ctaRef}>
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can help transform your business with our technology solutions.</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Get In Touch</a>
            <a href="tel:+919742645805" className="cta-button secondary">Call Us Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceComponent;