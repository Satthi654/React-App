import React, { useRef, useEffect, useState } from 'react';
import '../componentscss/TechnologiesComponent.css';

const techCategories = [
  {
    title: 'DEVELOPMENT LANGUAGES',
    items: [
      { name: 'JavaScript', icon: '🟨', description: 'Dynamic scripting for web apps.' },
      { name: 'TypeScript', icon: '🔷', description: 'Typed superset of JavaScript.' },
      { name: 'Java', icon: '☕', description: 'Enterprise-grade, cross-platform language.' },
      { name: 'Python', icon: '🐍', description: 'Versatile for AI, web, and automation.' },
      { name: 'Spring Boot', icon: '🌱', description: 'Java framework for rapid backend development.' },
      { name: 'Android', icon: '🤖', description: 'Native mobile development for Android.' },
    ],
  },
  {
    title: 'BUILD TOOLS',
    items: [
      { name: 'Webpack', icon: '📦', description: 'Module bundler for modern JS apps.' },
      { name: 'Maven', icon: '🛠️', description: 'Java project management and build tool.' },
      { name: 'Gradle', icon: '⚙️', description: 'Flexible build automation for Java.' },
      { name: 'NPM', icon: '📦', description: 'Node.js package manager.' },
    ],
  },
  {
    title: 'CLOUD & DEVOPS',
    items: [
      { name: 'AWS', icon: '☁️', description: 'Cloud platform for scalable infrastructure.' },
      { name: 'Azure', icon: '🔷', description: 'Microsoft cloud services.' },
      { name: 'Docker', icon: '🐳', description: 'Containerization for consistent deployments.' },
      { name: 'Kubernetes', icon: '☸️', description: 'Container orchestration platform.' },
      { name: 'Jenkins', icon: '🤵', description: 'Automation server for CI/CD.' },
      { name: 'GitHub Actions', icon: '⚡', description: 'CI/CD workflows in GitHub.' },
    ],
  },
  {
    title: 'TESTING',
    items: [
      { name: 'Jest', icon: '🃏', description: 'Delightful JavaScript testing.' },
      { name: 'JUnit', icon: '🧪', description: 'Unit testing for Java.' },
      { name: 'Selenium', icon: '🕷️', description: 'Browser automation for testing.' },
      { name: 'Cypress', icon: '🌲', description: 'End-to-end testing for web apps.' },
    ],
  },
  {
    title: 'DESIGN & UI',
    items: [
      { name: 'React', icon: '⚛️', description: 'Modern UI library for building fast, interactive UIs.' },
      { name: 'Figma', icon: '🎨', description: 'Collaborative design and prototyping tool.' },
      { name: 'Material UI', icon: '📐', description: 'React UI framework.' },
      { name: 'Bootstrap', icon: '🅱️', description: 'Popular CSS framework.' },
      { name: 'Android Studio', icon: '🛠️', description: 'IDE for Android development.' },
    ],
  },
  {
    title: 'DATABASES',
    items: [
      { name: 'MongoDB', icon: '🍃', description: 'NoSQL database for flexible data storage.' },
      { name: 'MySQL', icon: '🐬', description: 'Popular open-source relational database.' },
      { name: 'PostgreSQL', icon: '🐘', description: 'Advanced open-source relational database.' },
      { name: 'Redis', icon: '🟥', description: 'In-memory data store.' },
    ],
  },
];

const TechnologiesComponent = () => {
  const ctaRef = useRef(null);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setCtaVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="technologies-hero">
        <div className="technologies-hero-content">
          <h1 className="technologies-hero-title">
            <span className="title-word title-word-1">Technologies</span>
            <span className="title-word title-word-2">We</span>
            <span className="title-word title-word-3">Use</span>
          </h1>
          <p className="technologies-hero-subtitle">
            <span className="title-word title-word-1">Empowering</span>
            <span className="title-word title-word-2">your</span>
            <span className="title-word title-word-3">business</span>
            <span className="title-word title-word-1">with</span>
            <span className="title-word title-word-2">the</span>
            <span className="title-word title-word-3">latest</span>
            <span className="title-word title-word-1">and</span>
            <span className="title-word title-word-2">greatest</span>
            <span className="title-word title-word-3">in</span>
            <span className="title-word title-word-1">tech</span>
            <span className="title-word title-word-2">innovation.</span>
          </p>
        </div>
      </section>
      <section className="technologies-section">
        {techCategories.map((cat) => (
          <div className="tech-category" key={cat.title}>
            <h2 className="tech-category-title">{cat.title}</h2>
            <div className="tech-grid">
              {cat.items.map((tech) => (
                <div className="tech-card" key={tech.name}>
                  <div className="tech-icon">{tech.icon}</div>
                  <div className="tech-name">{tech.name}</div>
                  <div className="tech-desc">{tech.description}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="tech-extra">
          <h3>WHY CHOOSE US?</h3>
          <ul>
            <li>Cutting-edge tools and frameworks</li>
            <li>Expertise in cloud, AI, and automation</li>
            <li>End-to-end product development</li>
            <li>Continuous learning and innovation</li>
          </ul>
        </div>
      </section>
      <section ref={ctaRef} className={`contact-cta${ctaVisible ? ' animate-in' : ''}`}> 
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can help transform your business with our technology solutions.</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Get In Touch</a>
            <a href="tel:+919742645805" className="cta-button secondary">Call Us Now</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologiesComponent;