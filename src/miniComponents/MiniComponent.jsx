import React, { useState, useEffect } from 'react';
import './MiniComponent.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Automatically closes the mobile overlay menu on scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="nav" style={{ position: 'sticky', top: 0, zIndex: 1000, background: '#ffffff' }}>
      {/* Brand Identity */}
      <div className='page-signature' style={{ position: 'relative', zIndex: 1001 }}>
        <div className="brand-text">
          <h1>Ike Adusei Enterprises</h1>
          <span>Assass Collection</span>
        </div>
      </div>

      {/* Full Screen Overlay Container */}
      <div 
        className={`nav-signature ${mobileMenuOpen ? 'open' : ''}`}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
      >
        <ul style={{ display: 'flex', backgroundColor: 'transparent' }}>
          <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#marketplace" onClick={() => setMobileMenuOpen(false)}>Market Place</a></li>
          <li><a href="#media" onClick={() => setMobileMenuOpen(false)}>Media Handles</a></li>
          <li><a href="#location" onClick={() => setMobileMenuOpen(false)}>Location</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a></li>
        </ul>
      </div>

      {/* Mobile Menu Bars Button */}
      <button 
        className="nav-bars" 
        onClick={toggleMobileMenu}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? <FaTimes size={24} color="#0f172a" /> : <FaBars size={24} color="#0f172a" />}
      </button>
    </nav>
  );
}

export { Nav };