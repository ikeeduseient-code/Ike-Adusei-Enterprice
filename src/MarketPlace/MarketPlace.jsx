import React, { useState } from 'react';
import './MarketPlace.css';
import { FaRocket } from 'react-icons/fa';

export function Marketplace() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  
  const handleNotify = (e) => {
    e.preventDefault();
    if (email) {
      console.log(`Notify request submitted for: ${email}`);
      //setSubscribed(true);
      setEmail('');
    }
  };

  return (
    /* Inline styles here completely lock the white background and dark text color */
    <section 
      className="marketplace-section" 
      id="marketplace" 
    >
      <div className="marketplace-container">
        
        <div className="marketplace-badge">
          <FaRocket className="badge-icon" /> <span>Coming Soon</span>
        </div>

        <h2 style={{ color: '#0f172a', fontWeight: '800' }}>The IKE.A Online Marketplace</h2>
        
        <p className="marketplace-description" style={{ color: '#475569' }}>
          We are currently designing a fully integrated, modern e-commerce marketplace 
          to provide our retail and wholesale clients with a completely seamless 
          purchasing workflow. Soon, you will be able to browse live stock counts, 
          place bulk wholesale truck orders, and checkout instantly online.
        </p>

        {!subscribed ? (
          <form onSubmit={handleNotify} className="flat-notify-form">
            <input 
              type="email" 
              placeholder="Enter your email for early access" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              
            />
            <button type="submit">Notify Me</button>
          </form>
        ) : (
          <p className="success-message">🎉 Thank you! You've been added to our early access priority list.</p>
        )}

      </div>
    </section>
  );
}