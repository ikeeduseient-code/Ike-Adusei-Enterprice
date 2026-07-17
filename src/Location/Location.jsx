import React from 'react';
import './Location.css';
import { FaMapMarkerAlt, FaClock, FaTruck } from 'react-icons/fa';

export function Location() {
  return (
    <section className="location-section" id="location">
      <div className="location-container">
        
        {/* Left Column: Physical Info */}
        <div className="location-info-block">
          <h2>Visit Our Showroom & Warehouse</h2>
          <p className="location-subtitle">
            Come browse our physical inventory, test products live, or coordinate 
            wholesale transport arrangements directly with our team.
          </p>

          <div className="info-item-flat">
            <div className="info-icon"><FaMapMarkerAlt size={20} /></div>
            <div>
              <h3>Main Address</h3>
              <p>Ike Edusei Enterprise, Accra, Greater Accra Region, Ghana</p>
              <span className="digital-addr">GPS Digital Address: GA-123-4567</span>
            </div>
          </div>

          <div className="info-item-flat">
            <div className="info-icon"><FaClock size={20} /></div>
            <div>
              <h3>Operating Hours</h3>
              <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
              
            </div>
          </div>

          <div className="info-item-flat">
            <div className="info-icon"><FaTruck size={20} /></div>
            <div>
              <h3>Wholesale Logistics</h3>
              <p>Dedicated heavy vehicles loading bay accessible at rear entrance.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Google Maps Embed */}
        <div className="location-map-block">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.24641926217!2d-0.259117621406857!3d5.591212879555776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1710000000000!5m2!1sen!2sgh" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ike Edusei Enterprise Location Map"
          ></iframe>
        </div>

      </div>
    </section>
  );
}