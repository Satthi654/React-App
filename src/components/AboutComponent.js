import React, { useEffect, useRef, useState } from 'react';
import '../componentscss/AboutComponent.css';

const AboutComponent = () => {
    const [visibleElements, setVisibleElements] = useState(new Set());
    const elementsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const newVisible = new Set();
            elementsRef.current.forEach((el, index) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                // Trigger animation when element is 20% visible in viewport
                if (rect.top < window.innerHeight * 0.8) {
                    newVisible.add(index);
                }
            });
            setVisibleElements(newVisible);
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

    return (
        <div className="about-container">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="title-word title-word-1">About</span>
                        <span className="title-word title-word-2">Sathish</span>
                        <span className="title-word title-word-3">Software</span>
                        <span className="title-word title-word-4">Solutions</span>
                    </h1>
                    <p className="hero-subtitle">
                        <span className="title-word title-word-1">Delivering</span>
                        <span className="title-word title-word-2">Trust,</span>
                        <span className="title-word title-word-3">Technology,</span>
                        <span className="title-word title-word-1">and</span>
                        <span className="title-word title-word-2">Transformation</span>
                    </p>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Story Section */}
            <section 
                className={`company-story ${visibleElements.has(0) ? 'animate-in' : ''}`}
                ref={el => (elementsRef.current[0] = el)}
            >
                <div className="container">
                    <div className="story-content">
                        <div className="story-text">
                            <h2>OUR STORY</h2>
                            <p>
                                Founded in 2025, Sathish Software Solutions has been at the forefront of digital innovation, 
                                helping businesses transform their digital presence and operational efficiency. What started 
                                as a small team of passionate developers has grown into a trusted technology partner for 
                                businesses across various industries.
                            </p>
                            <p>
                                Our journey began with a simple mission: to make technology accessible and beneficial for 
                                businesses of all sizes. Today, we continue to uphold this mission by delivering cutting-edge 
                                solutions that drive growth, efficiency, and competitive advantage.
                            </p>
                        </div>
                        <div className="story-image">
                            <div className="image-placeholder">
                                <svg viewBox="0 0 24 24" width="80" height="80">
                                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    <path fill="currentColor" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                                </svg>
                                <svg viewBox="0 0 24 24" width="60" height="60" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.3}}>
                                    <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                <svg viewBox="0 0 24 24" width="40" height="40" style={{position: 'absolute', top: '20%', right: '20%', opacity: 0.2}}>
                                    <path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section 
                className={`mission-vision ${visibleElements.has(1) ? 'animate-in' : ''}`}
                ref={el => (elementsRef.current[1] = el)}
            >
                <div className="container">
                    <div className="mission-vision-grid">
                        <div className="mission-card">
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" width="40" height="40">
                                    <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To empower businesses with innovative technology solutions that drive growth, 
                                efficiency, and competitive advantage in the digital age.
                            </p>
                        </div>
                        <div className="vision-card">
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" width="40" height="40">
                                    <path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                                </svg>
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To be the leading technology partner that transforms businesses through 
                                innovative digital solutions and exceptional service delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section 
                className={`services-section ${visibleElements.has(2) ? 'animate-in' : ''}`}
                ref={el => (elementsRef.current[2] = el)}
            >
                <div className="container">
                    <h2 className="section-title">What We Do</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 24 24" width="40" height="40">
                                    <path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                                </svg>
                            </div>
                            <h3>Web Development</h3>
                            <p>Custom websites and web applications built with modern technologies and best practices.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 24 24" width="40" height="40">
                                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <h3>Mobile Development</h3>
                            <p>Native and cross-platform mobile applications for iOS and Android platforms.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 24 24" width="40" height="40">
                                    <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                                </svg>
                            </div>
                            <h3>UI/UX Design</h3>
                            <p>User-centered design solutions that enhance user experience and engagement.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 24 24" width="40" height="40">
                                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <h3>Cloud Solutions</h3>
                            <p>Scalable cloud infrastructure and migration services for modern businesses.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section 
                className={`team-section ${visibleElements.has(3) ? 'animate-in' : ''}`}
                ref={el => (elementsRef.current[3] = el)}
            >
                <div className="container">
                    <h2 className="section-title">Meet Our Team</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-avatar">
                                <img 
                                    src="/sathish_profile.jpg" 
                                    alt="Sathish - Founder & Lead Developer"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <svg viewBox="0 0 24 24" width="60" height="60" style={{display: 'none'}}>
                                    <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                            </div>
                            <h3>SATHISHKUMAR D S</h3>
                            <p className="member-role">Founder Director & Lead Fullstack Developer</p>
                            <p className="member-bio">
                            Sathishkumar D S is an innovative fullstack developer specializing in Java, Spring Boot, React, Angular, Android, and MSSQL. As Founder Director, he delivers secure, scalable, and user-focused web and mobile solutions, combining technical expertise with leadership to create impactful digital products that drive business growth and enhance user experience.
                            </p>
                        </div>
                        <div className="team-member">
                            <div className="member-avatar">
                                <img 
                                    src="/prem_profile.jpg" 
                                    alt="Premkumar Chinnaraji - Director & Devops Engineer"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <svg viewBox="0 0 24 24" width="60" height="60" style={{display: 'none'}}>
                                    <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                            </div>
                            <h3>PREMKUMAR</h3>
                            <p className="member-role">Co - Founder Director & Devops Engineer</p>
                            <p className="member-bio">
                            Premkumar Chinnaraji is a skilled DevOps Engineer and Co-Founder Director, specializing in CI/CD pipelines, cloud infrastructure, and automation. He bridges development and operations to deliver scalable, secure, and efficient systems, ensuring seamless deployments, optimized performance, and reliability for high-quality digital solutions.
                            </p>
                        </div>
                        <div className="team-member">
                            <div className="member-avatar">
                                <img 
                                    src="/hemanth.png" 
                                    alt="Premkumar Chinnaraji - Director & Devops Engineer"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <svg viewBox="0 0 24 24" width="60" height="60" style={{display: 'none'}}>
                                    <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                            </div>
                            <h3>HEMANTH RAJ</h3>
                            <p className="member-role">Director & Accounts & Finance Head</p>
                            <p className="member-bio">
                            Thanda Hemanth Raj oversees financial strategy, planning, and compliance with precision and integrity. As Director & Accounts and Finance Head, he ensures fiscal stability, optimizes resource allocation, and drives profitability, enabling sustainable business growth while maintaining transparency and accountability in all financial operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section 
                className={`values-section ${visibleElements.has(4) ? 'animate-in' : ''}`}
                ref={el => (elementsRef.current[4] = el)}
            >
                <div className="container">
                    <h2 className="section-title">Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" width="50" height="50">
                                    <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                                </svg>
                            </div>
                            <h3>Innovation</h3>
                            <p>Constantly exploring new technologies and approaches to deliver cutting-edge solutions.</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" width="50" height="50">
                                    <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <h3>Quality</h3>
                            <p>Committed to delivering high-quality, reliable, and scalable solutions that exceed expectations.</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" width="50" height="50">
                                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <h3>Integrity</h3>
                            <p>Building trust through transparent communication and honest business practices.</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" width="50" height="50">
                                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <h3>Excellence</h3>
                            <p>Striving for excellence in every project, from concept to delivery and beyond.</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" width="50" height="50">
                                    <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                                </svg>
                            </div>
                            <h3>Security</h3>
                            <p>Implementing robust security measures and best practices to protect your data and systems.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section 
                className={`contact-cta ${visibleElements.has(5) ? 'animate-in' : ''}`}
                ref={el => (elementsRef.current[5] = el)}
            >
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

export default AboutComponent; 