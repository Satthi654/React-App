import React, { useState, useEffect, useRef } from 'react';
import '../componentscss/NavBarComponent.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const NavBarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = [
    'Home',
    'About',
    'Services',
    'Industries',
    'Portfolio',
    'Technologies',
    'Careers',
    'Blog',
    'Contact'
  ];

  const serviceDropdownItems = [
    {
      category: "Development",
      items: [
        {
          label: 'Web Development',
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4"/>
              <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"/>
              <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"/>
              <path d="M12 3c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"/>
              <path d="M12 21c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z"/>
            </svg>
          ),
          description: 'Modern websites and web apps',
          link: '/services/web-development',
        },
        {
          label: 'App Development',
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
          ),
          description: 'Mobile apps for iOS & Android',
          link: '/services/app-development',
        },
        {
          label: 'Cloud Services',
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
            </svg>
          ),
          description: 'Cloud migration & management',
          link: '/services/cloud-services',
        },
      ]
    },
    {
      category: "Design & UX",
      items: [
        {
          label: 'UI/UX Design',
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v6m0 6v6"/>
              <path d="M1 12h6m6 0h6"/>
            </svg>
          ),
          description: 'User experience & design',
          link: '/services/ui-ux-design',
        },
        {
          label: 'AI Solutions',
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4"/>
              <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"/>
              <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"/>
            </svg>
          ),
          description: 'AI, ML, and automation',
          link: '/services/ai-solutions',
        },
        {
          label: 'Consulting',
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          ),
          description: 'IT and business consulting',
          link: '/services/consulting',
        },
      ]
    }
  ];

  // Handle clicks outside the mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const handleLoginClick = () => {
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav className={`navbar ${menuOpen ? 'navbar-hidden' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo"><img src="/ssss.png" alt="SSS Logo" className="logo-img" /></div>

          {/* Desktop Nav */}
          <div className="navbar-desktop">
            {navItems.map((item) =>
              item === 'Services' ? (
                <div
                  key={item}
                  className="navbar-link navbar-link-dropdown"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  style={{ position: 'relative' }}
                >
                  <Link
                    to="/services"
                    className="navbar-link"
                    tabIndex={0}
                  >
                    {item}
                    <span className="dropdown-arrow">▼</span>
                  </Link>
                  {servicesDropdownOpen && (
                    <div className="services-dropdown multi-column" onMouseEnter={() => setServicesDropdownOpen(true)} onMouseLeave={() => setServicesDropdownOpen(false)}>
                      {serviceDropdownItems.map((category) => (
                        <div key={category.category} className="dropdown-category">
                          <h4 className="category-header">{category.category}</h4>
                          <div className="category-items">
                            {category.items.map((service) => (
                              <Link to={service.link} className="dropdown-item-advanced" key={service.label}>
                                <span className="dropdown-icon">{service.icon}</span>
                                <span className="dropdown-content">
                                  <span className="dropdown-title">{service.label}</span>
                                  <span className="dropdown-description">{service.description}</span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item}
                  to={
                    item === 'Home' ? '/' :
                    item === 'Technologies' ? '/technologies' :
                    item === 'Careers' ? '/careers' :
                    `/${item.toLowerCase()}`
                  }
                  className="navbar-link"
                >
                  {item}
                </Link>
              )
            )}
          </div>

          {/* Login Button for Desktop */}
          <div className="navbar-login">
            <button className="login-btn" onClick={handleLoginClick}>Login</button>
          </div>

          {/* Search box for desktop */}
          <div className="navbar-search">
            <span className="search-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#58a6ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>

          {/* Mobile menu button */}
          <div className="navbar-mobile-button">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hamburger-button"
            >
              <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

             {/* Mobile Nav */}
       {menuOpen && (
         <>
           {/* Overlay to block background interactions */}
           <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)} />
           <div className="navbar-mobile-menu" ref={mobileMenuRef}>
           {/* Mobile Header */}
           <div className="mobile-header">
             {/* Company Logo */}
             <div className="mobile-logo">
               <img src="/ssss.png" alt="SSS Logo" />
             </div>
             
             {/* Close Button */}
             <button 
               className="mobile-close-button"
               onClick={() => setMenuOpen(false)}
               aria-label="Close menu"
             >
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                 <line x1="18" y1="6" x2="6" y2="18"></line>
                 <line x1="6" y1="6" x2="18" y2="18"></line>
               </svg>
             </button>
           </div>
           
           {/* Navigation Items */}
           <div className="mobile-nav-container">
             {navItems.map((item) => (
               item === 'Services' ? (
                 <div key={item} className="mobile-services-container">
                   <button
                     className="navbar-mobile-link mobile-services-toggle"
                     onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                   >
                     {item}
                     <span className={`mobile-dropdown-arrow ${mobileServicesOpen ? 'open' : ''}`}>▼</span>
                   </button>
                   {mobileServicesOpen && (
                     <div className="mobile-services-dropdown">
                       {serviceDropdownItems.map((category) => (
                         <div key={category.category} className="mobile-category">
                           <h5 className="mobile-category-header">{category.category}</h5>
                           <div className="mobile-category-items">
                             {category.items.map((service) => (
                               <Link
                                 key={service.label}
                                 to={service.link}
                                 className="mobile-service-item"
                                 onClick={() => {
                                   setMenuOpen(false);
                                   setMobileServicesOpen(false);
                                 }}
                               >
                                 <span className="mobile-service-icon">{service.icon}</span>
                                 <div className="mobile-service-content">
                                   <span className="mobile-service-title">{service.label}</span>
                                   <span className="mobile-service-description">{service.description}</span>
                                 </div>
                               </Link>
                             ))}
                           </div>
                         </div>
                       ))}
                     </div>
                   )}
                 </div>
               ) : (
                 <Link
                   key={item}
                   to={
                     item === 'Home' ? '/' :
                     item === 'Technologies' ? '/technologies' :
                     item === 'Careers' ? '/careers' :
                     `/${item.toLowerCase()}`
                   }
                   className="navbar-mobile-link"
                   onClick={() => setMenuOpen(false)}
                 >
                   {item}
                 </Link>
               )
             ))}
           </div>

          {/* Login Button for Mobile */}
          <div className="mobile-login">
            <button className="login-btn" onClick={handleLoginClick}>Login</button>
          </div>
        </div>
      </>
      )}
    </nav>
  );
};

export default NavBarComponent;
