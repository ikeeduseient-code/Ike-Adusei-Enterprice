import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

// Import package and correct stylesheet path
import intlTelInput from "intl-tel-input";
import "intl-tel-input/dist/css/intlTelInput.css";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fullInternationalPhone: '', // Stores the formatted backend number with country code
    customerType: 'Retail',
    message: ''
  });

  const phoneInputRef = useRef(null);
  const itiInstanceRef = useRef(null);

  // Initialize the plugin instance when the layout renders
  useEffect(() => {
    if (phoneInputRef.current) {
      itiInstanceRef.current = intlTelInput(phoneInputRef.current, {
        initialCountry: "gh",
        preferredCountries: ["gh", "us", "gb"],
        countrySearch: true,
        fixDropdownWidth: true,
        matchDropdownWidth: true,

        // THIS FIXED THE ISSUE: Keeps the code visible but separate from the input text box
        separateDialCode: true,

        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });
    }

    return () => {
      if (itiInstanceRef.current) {
        itiInstanceRef.current.destroy();
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      // Pull out the full number format from the plugin instance engine
      const fullNumber = itiInstanceRef.current ? itiInstanceRef.current.getNumber() : value;

      setFormData({
        ...formData,
        phone: value,
        fullInternationalPhone: fullNumber
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This payload contains both the raw input and fullInternationalPhone for your database
    console.log('Sending message data:', formData);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Left Side: Quick Connect Buttons */}
        <div className="contact-direct-block">
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">
            Have questions about prices or bulk deliveries? Contact us directly or
            send an inquiry using the form.
          </p>

          <div className="quick-action-buttons">
            <a href="tel:+233548978691" className="action-link phone-btn">
              <FaPhoneAlt /> Call Our Showroom
            </a>

            <a href="https://wa.me/233548978691?text=Hello%20Ike%20Edusei%20Enterprise" target="_blank" rel="noopener noreferrer" className="action-link whatsapp-btn">
              <FaWhatsapp size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Right Side: Flat Inquiry Form */}
        <div className="contact-form-block">
          <form onSubmit={handleSubmit} className="flat-form">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                ref={phoneInputRef}
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">
              <label>Inquiry Type</label>
              <select name="customerType" value={formData.customerType} onChange={handleChange}>
                <option value="Retail">Retail Customer</option>
                <option value="Wholesale">Wholesale / Bulk Order Buyer</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="Tell us what items you are looking for..." ></textarea>
            </div>

            <button type="submit" className="form-submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}