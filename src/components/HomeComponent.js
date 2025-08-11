import React, { useState, useEffect, useRef } from 'react';
import '../componentscss/HomeComponent.css';

const HomeComponent = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [animatedElements, setAnimatedElements] = useState(new Set());

    // Refs for scroll animations
    const featuresRef = useRef(null);
    const statsRef = useRef(null);
    const aboutRef = useRef(null);
    const testimonialsRef = useRef(null);
    const finalCtaRef = useRef(null);

    const messages = [
        'Welcome to our platform',
        'Discover amazing features',
        'Experience the future',
        'Ready to get started?'
    ];

    const features = [
        {
            icon: '🚀',
            title: 'Fast Performance',
            description: 'Lightning-fast loading times and smooth interactions'
        },
        {
            icon: '🛡️',
            title: 'Secure & Reliable',
            description: 'Enterprise-grade security with 99.9% uptime guarantee'
        },
        {
            icon: '📱',
            title: 'Mobile First',
            description: 'Optimized for all devices and screen sizes'
        },
        {
            icon: '🎨',
            title: 'Beautiful Design',
            description: 'Modern, intuitive interface that users love'
        }
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Product Manager',
            company: 'TechCorp',
            text: 'This platform has transformed how we work. The efficiency gains are incredible!',
            rating: 5
        },
        {
            name: 'Mike Chen',
            role: 'Developer',
            company: 'StartupXYZ',
            text: 'Clean code, great documentation, and excellent support. Highly recommended!',
            rating: 5
        },
        {
            name: 'Emily Davis',
            role: 'Designer',
            company: 'CreativeStudio',
            text: 'The user experience is outstanding. Our clients love the interface!',
            rating: 5
        }
    ];

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const elementId = entry.target.dataset.animationId;
                    if (elementId) {
                        setAnimatedElements(prev => new Set([...prev, elementId]));
                    }
                }
            });
        }, observerOptions);

        // Observe all elements that need animation
        const elementsToObserve = [
            { ref: featuresRef, id: 'features' },
            { ref: statsRef, id: 'stats' },
            { ref: aboutRef, id: 'about' },
            { ref: testimonialsRef, id: 'testimonials' },
            { ref: finalCtaRef, id: 'final-cta' }
        ];

        elementsToObserve.forEach(({ ref, id }) => {
            if (ref.current) {
                ref.current.dataset.animationId = id;
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Show the component after a short delay
        const showTimer = setTimeout(() => {
            setIsVisible(true);
        }, 600);

        // Cycle through messages
        const messageTimer = setInterval(() => {
            setCurrentTextIndex((prevIndex) =>
                prevIndex === messages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => {
            clearTimeout(showTimer);
            clearInterval(messageTimer);
        };
    }, [messages.length]);

    return (
        <div>
            <div className="home-container">
                <div className="background-gradient">
                    <div className={`content-wrapper ${isVisible ? 'visible' : ''}`}> 
                        <div className="main-title">
                            <span className="title-word title-word-1">Welcome</span>
                            <span className="title-word title-word-2">to</span>
                            <span className="title-word title-word-3">Our</span>
                            <span className="title-word title-word-4">Platform</span>
                        </div>
                        <div className="message-container">
                            <p className={`message-text ${isVisible ? 'visible' : ''}`}>{messages[currentTextIndex]}</p>
                        </div>
                        <div className={`cta-section ${isVisible ? 'visible' : ''}`}>
                            <button className="cta-button primary">Get Started</button>
                            <button className="cta-button secondary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="home-container-2">
                {/* Features Section */}
                <section 
                    ref={featuresRef}
                    className={`features-section scroll-animation ${animatedElements.has('features') ? 'animate-in' : ''}`}
                >
                    <div className="container">
                        <h2 className="section-title animate-on-scroll">Why Choose Us?</h2>
                        <p className="section-subtitle animate-on-scroll">Discover what makes our platform the perfect solution for your needs</p>
                        
                        <div className="features-grid">
                            {features.map((feature, index) => (
                                <div 
                                    key={index} 
                                    className={`feature-card animate-on-scroll`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className="feature-icon">{feature.icon}</div>
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-description">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Statistics Section */}
                <section 
                    ref={statsRef}
                    className={`stats-section scroll-animation ${animatedElements.has('stats') ? 'animate-in' : ''}`}
                >
                    <div className="container">
                        <div className="stats-grid">
                            {[
                                { number: '10K+', label: 'Happy Users' },
                                { number: '99.9%', label: 'Uptime' },
                                { number: '24/7', label: 'Support' },
                                { number: '50+', label: 'Countries' }
                            ].map((stat, index) => (
                                <div 
                                    key={index} 
                                    className="stat-item animate-on-scroll"
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section 
                    ref={aboutRef}
                    className={`about-section scroll-animation ${animatedElements.has('about') ? 'animate-in' : ''}`}
                >
                    <div className="container">
                        <div className="about-content">
                            <div className="about-text animate-on-scroll">
                                <h2>About Our Platform</h2>
                                <p>
                                    We're passionate about creating innovative solutions that help businesses 
                                    and individuals achieve their goals. Our platform combines cutting-edge 
                                    technology with user-centered design to deliver exceptional experiences.
                                </p>
                                <p>
                                    Founded in 2020, we've grown from a small startup to serving thousands 
                                    of users worldwide. Our mission is to make technology accessible, 
                                    powerful, and enjoyable for everyone.
                                </p>
                                <button className="about-cta">Learn More About Us</button>
                            </div>
                            <div className="about-image animate-on-scroll">
                                <div className="image-placeholder">
                                    <span>🚀</span>
                                    <p>Innovation at Work</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section 
                    ref={testimonialsRef}
                    className={`testimonials-section scroll-animation ${animatedElements.has('testimonials') ? 'animate-in' : ''}`}
                >
                    <div className="container">
                        <h2 className="section-title animate-on-scroll">What Our Users Say</h2>
                        <div className="testimonials-grid">
                            {testimonials.map((testimonial, index) => (
                                <div 
                                    key={index} 
                                    className="testimonial-card animate-on-scroll"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className="testimonial-rating">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="star">⭐</span>
                                        ))}
                                    </div>
                                    <p className="testimonial-text">"{testimonial.text}"</p>
                                    <div className="testimonial-author">
                                        <div className="author-info">
                                            <h4>{testimonial.name}</h4>
                                            <p>{testimonial.role} at {testimonial.company}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section 
                    ref={finalCtaRef}
                    className={`final-cta-section scroll-animation ${animatedElements.has('final-cta') ? 'animate-in' : ''}`}
                >
                    <div className="container">
                        <h2 className="animate-on-scroll">Ready to Get Started?</h2>
                        <p className="animate-on-scroll">Join thousands of users who have already transformed their experience</p>
                        <div className="cta-buttons">
                            <button className="cta-button primary large animate-on-scroll">Start Free Trial</button>
                            <button className="cta-button secondary large animate-on-scroll">Contact Sales</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomeComponent; 