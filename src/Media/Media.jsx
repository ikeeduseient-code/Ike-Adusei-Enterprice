import React from 'react';
import './Media.css';
// Import the clean social logos directly
import { FaInstagram, FaTiktok, FaFacebookF, FaSnapchatGhost } from 'react-icons/fa';

const MEDIA_HANDLES = [
  { name: 'Instagram', Icon: FaInstagram, description: 'See our latest inventory & product arrivals daily.', link: 'https://instagram.com/ikeaduseionline?igsh=cTEwZTRjM2E1YUw', color: '#e1306c' },
  { name: 'TikTok', Icon: FaTiktok, description: 'Watch live demonstrations of our electronic items.', link: 'https://tiktok.com/@ikeaduseionline', color: '#000000' },
  { name: 'Facebook', Icon: FaFacebookF, description: 'Join our community for wholesale updates and deals.', link: 'https://facebook.com/profile.php?id=6155784309369', color: '#1877f2' },
  { name: 'Snapchat', Icon: FaSnapchatGhost, description: 'Get behind-the-scenes looks at our warehouse stock.', link: 'https://snapchat.com/add/yourhandle', color: '#eab308' }
];

export function Media() {
  return (
    <section className="media-section" id="media">
      <div className="media-container">
        <div className="media-header">
          <h2>Explore Our Media Handles</h2>
          <p>Visit our media channels for detailed product walkthroughs and regular inventory updates.</p>
        </div>

        <div className="media-grid">
          {MEDIA_HANDLES.map((handle, index) => {
            const IconComponent = handle.Icon;
            return (
              <div key={index} className="media-card-flat">
                <h3>{handle.name}</h3>
                
                {/* Logo placed right in the middle */}
                <div className="media-icon-wrapper" style={{ color: handle.color }}>
                  <IconComponent size={32} />
                </div>
                
                <p>{handle.description}</p>
                <a href={handle.link} target="_blank" rel="noopener noreferrer" className="visit-btn-flat">
                  Visit Channel <span>→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}