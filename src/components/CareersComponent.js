import React, { useRef, useEffect, useState } from 'react';
import '../componentscss/CareersComponent.css';
import { FaLaptopHouse, FaChartLine, FaUsers, FaCogs, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaTools, FaFileAlt, FaListUl } from 'react-icons/fa';

const jobs = [
  {
    title: 'Frontend Developer',
    location: 'Remote',
    desc: 'Build beautiful and responsive UIs with React. Collaborate with designers and backend engineers to deliver seamless user experiences and maintain high code quality.',
    skills: 'React, JavaScript, HTML, CSS, REST APIs, Git, Responsive Design',
    experience: '2-4 years',
    notice: 'Immediate to 30 days',
    responsibilities: [
      'Develop and maintain web applications using React',
      'Collaborate with UI/UX designers and backend developers',
      'Write clean, maintainable, and efficient code',
      'Participate in code reviews and team meetings',
    ],
    jd: 'As a Frontend Developer, you will be responsible for building and maintaining user interfaces for our web applications, ensuring a seamless and engaging user experience.',
  },
  {
    title: 'Backend Engineer',
    location: 'Bangalore',
    desc: 'Design scalable APIs and microservices using Java. Ensure security, performance, and reliability of backend systems with modern Java frameworks and best practices.',
    skills: 'Java, Spring Boot, Hibernate, REST APIs, SQL, Microservices, Docker',
    experience: '3-5 years',
    notice: 'Immediate to 60 days',
    responsibilities: [
      'Design and implement RESTful APIs using Java and Spring Boot',
      'Optimize backend performance and ensure security',
      'Work with databases and ORM frameworks',
      'Collaborate with frontend and DevOps teams',
    ],
    jd: 'As a Backend Engineer, you will architect and develop scalable backend services, ensuring high performance and security for our applications.',
  },
  {
    title: 'Full Stack Developer',
    location: 'Remote',
    desc: 'Work across the stack to deliver robust web applications. Take ownership of features from Java backend to modern React UI, ensuring end-to-end quality and performance.',
    skills: 'Java, Spring Boot, Hibernate, REST APIs, React, SQL, Git',
    experience: '3-6 years',
    notice: '15 to 45 days',
    responsibilities: [
      'Develop full stack features using Java and React',
      'Integrate frontend and backend components',
      'Write unit and integration tests',
      'Participate in agile development processes',
    ],
    jd: 'As a Full Stack Developer, you will work on both backend and frontend, delivering complete features and collaborating with cross-functional teams.',
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    desc: 'Craft delightful user experiences and interactive prototypes. Work closely with product and engineering teams to turn ideas into beautiful, usable products.',
    skills: 'Figma, Sketch, Adobe XD, Prototyping, User Research, Wireframing',
    experience: '2-4 years',
    notice: 'Immediate to 30 days',
    responsibilities: [
      'Design user interfaces and experiences for web and mobile',
      'Create wireframes, prototypes, and mockups',
      'Conduct user research and usability testing',
      'Collaborate with developers and product managers',
    ],
    jd: 'As a UI/UX Designer, you will design and refine user interfaces, ensuring our products are intuitive and visually appealing.',
  },
  {
    title: 'DevOps Specialist',
    location: 'Remote',
    desc: 'Automate deployments and manage cloud infrastructure. Ensure high availability, scalability, and security for all environments using modern DevOps tools.',
    skills: 'AWS, Azure, CI/CD, Docker, Kubernetes, Terraform, Monitoring',
    experience: '3-6 years',
    notice: 'Immediate to 45 days',
    responsibilities: [
      'Automate build and deployment pipelines',
      'Manage cloud infrastructure and resources',
      'Monitor system health and performance',
      'Implement security best practices',
    ],
    jd: 'As a DevOps Specialist, you will streamline our development and deployment processes, ensuring reliability and scalability of our infrastructure.',
  },
  {
    title: 'QA Engineer',
    location: 'Bangalore',
    desc: 'Test and ensure the quality of our products. Develop and execute automated and manual test cases, and work with developers to resolve issues quickly.',
    skills: 'Selenium, Cypress, Manual Testing, Automation, API Testing, Bug Tracking',
    experience: '2-5 years',
    notice: 'Immediate to 30 days',
    responsibilities: [
      'Develop and execute test plans and cases',
      'Automate regression and functional tests',
      'Report and track bugs and issues',
      'Work closely with developers to resolve defects',
    ],
    jd: 'As a QA Engineer, you will ensure the quality and reliability of our software through rigorous testing and collaboration with the development team.',
  },
  {
    title: 'Project Manager',
    location: 'Remote',
    desc: 'Lead cross-functional teams to deliver projects on time. Communicate with stakeholders, manage project scope, and ensure successful project delivery.',
    skills: 'Agile, Scrum, Communication, Leadership, JIRA, Risk Management',
    experience: '4-8 years',
    notice: 'Immediate to 60 days',
    responsibilities: [
      'Lead project planning and execution',
      'Manage project scope, timeline, and resources',
      'Communicate with stakeholders and team members',
      'Identify and mitigate project risks',
    ],
    jd: 'As a Project Manager, you will oversee project delivery, ensuring alignment with business goals and timely completion.',
  },
];

function JobDetailsModal({ job, onClose }) {
  if (!job) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-close-x" onClick={onClose} aria-label="Close">
            ✕
          </button>
          <div className="job-title-section">
            <h2>{job.title}</h2>
          </div>
        </div>
        
        <div className="modal-body">
          <div className="job-info-grid">
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <strong>Location</strong>
                <span>{job.location}</span>
              </div>
            </div>
            
            <div className="info-item">
              <FaClock className="info-icon" />
              <div>
                <strong>Experience</strong>
                <span>{job.experience}</span>
              </div>
            </div>
            
            <div className="info-item">
              <FaCalendarAlt className="info-icon" />
              <div>
                <strong>Notice Period</strong>
                <span>{job.notice}</span>
              </div>
            </div>
          </div>
          
          <div className="job-section">
            <div className="section-header">
              <FaFileAlt className="section-icon" />
              <h3>Job Description</h3>
            </div>
            <p>{job.jd}</p>
          </div>
          
          <div className="job-section">
            <div className="section-header">
              <FaTools className="section-icon" />
              <h3>Required Skills</h3>
            </div>
            <div className="skills-container">
              {job.skills.split(', ').map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="job-section">
            <div className="section-header">
              <FaListUl className="section-icon" />
              <h3>Key Responsibilities</h3>
            </div>
            <ul className="responsibilities-list">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
          
          <div className="modal-buttons">
            <button className="apply-btn primary" onClick={onClose}>
              Apply Now
            </button>
            <button className="close-btn secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CareersComponent = () => {
  const ctaRef = useRef(null);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

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
      <section className="careers-hero-section">
        <div className="careers-hero-section-content">
          <h1 className="careers-hero-section-title">
            <span className="title-word title-word-1">Careers</span>
            <span className="title-word title-word-2">at</span>
            <span className="title-word title-word-3">Sathish</span>
            <span className="title-word title-word-1">Software</span>
            <span className="title-word title-word-2">Solutions</span>
            
          </h1>
          <p className="careers-hero-section-subtitle">
            <span className="title-word title-word-1">Join</span>
            <span className="title-word title-word-2">a</span>
            <span className="title-word title-word-3">passionate</span>
            <span className="title-word title-word-1">team</span>
            <span className="title-word title-word-2">and</span>
            <span className="title-word title-word-3">build</span>
            <span className="title-word title-word-1">your</span>
            <span className="title-word title-word-2">future</span>
            <span className="title-word title-word-3">with</span>
            <span className="title-word title-word-1">us.</span>
          </p>
        </div>
      </section>
      <section className="careers-section">
        {/* Hero Banner */}
        <div className="careers-hero">
          <div className="careers-hero-content">
            <h1 className="careers-hero-title">Grow With Us</h1>
            <p className="careers-hero-subtitle">Join a team of innovators, creators, and problem-solvers. Shape the future of technology and your career.</p>
            <a href="#open-positions" className="careers-hero-btn">See Open Positions</a>
          </div>
          <div className="careers-hero-img">
            <img src="/ssslogo.png" alt="Careers Hero" />
          </div>
        </div>
        {/* Company Culture */}
        <div className="careers-culture">
          <h3>Our Culture</h3>
          <p>We value creativity, collaboration, and continuous learning. Our team thrives on solving real-world problems and building products that matter.</p>
          <div className="culture-cards">
            <div className="culture-card">
              <FaLaptopHouse className="culture-icon" />
              <span>Flexible work environment</span>
            </div>
            <div className="culture-card">
              <FaChartLine className="culture-icon" />
              <span>Growth opportunities</span>
            </div>
            <div className="culture-card">
              <FaUsers className="culture-icon" />
              <span>Inclusive and diverse team</span>
            </div>
            <div className="culture-card">
              <FaCogs className="culture-icon" />
              <span>Work with the latest tech</span>
            </div>
          </div>
        </div>
        {/* Open Positions */}
        <div className="careers-jobs" id="open-positions">
          <h3>Open Positions</h3>
          <div className={`jobs-marquee-wrapper${showGrid ? ' grid-active' : ''}`}>
            <div
              className={`jobs-marquee${showGrid ? ' jobs-grid' : ''}`}
              tabIndex={0}
              onMouseEnter={() => setShowGrid(true)}
              onMouseLeave={() => setShowGrid(false)}
            >
              {(showGrid ? jobs : Array(4).fill(jobs).flat()).map((job, idx) => (
                <div className="job-card animated" key={job.title + (showGrid ? '' : idx)} style={{ animationDelay: `${(idx % jobs.length) * 0.15}s` }}>
                <div className="job-title">{job.title}</div>
                <div className="job-location">{job.location}</div>
                <div className="job-desc">{job.desc}</div>
                  {job.skills && <div className="job-skills"><strong>Skills:</strong> {job.skills}</div>}
                  <div style={{display:'flex', gap:'8px', marginTop:'8px'}}>
                    <button className="readmore-btn" onClick={() => setSelectedJob(job)}>Read More</button>
                <button className="apply-btn">Apply Now</button>
                  </div>
              </div>
            ))}
            </div>
          </div>
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
      {selectedJob && <JobDetailsModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </>
  );
};

export default CareersComponent;