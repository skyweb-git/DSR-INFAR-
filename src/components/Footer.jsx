import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: DRS INFRA MART PRIVATE LIMITED */}
          <div className="footer-brand">
            <div className="brand-name">
              <span>DRS </span>
              <span className="orange">INFRA MART </span>
              <span className="brand-private-limited" style={{ color: '#D1D5DB' }}>PRIVATE LIMITED</span>
            </div>
            <div className="brand-tagline">
              BUILDING MATERIALS & INFRASTRUCTURE
            </div>
            <p className="footer-desc">
              India's premier supply partner for high-durability construction and architectural finishing materials. Supplying contractors, developers, architects, and institutions nationwide.
            </p>
            <div className="footer-social-links">
              <a href="#linkedin" className="footer-social-btn" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M7.86 18.5V9.93H5.07v8.57z" />
                </svg>
              </a>
              <a href="#twitter" className="footer-social-btn" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#facebook" className="footer-social-btn" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
              <a href="#instagram" className="footer-social-btn" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/about">About Us</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/products">Products</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/brands">Brands</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="footer-col-title">Products</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/products/marble-granite">Marble & Granite</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/products/tiles">Tiles</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/products/steel">Steel</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/products/cement">Cement</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/products/plywood">Plywood</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/products/sanitaryware">Sanitaryware</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <span>info@drsinframart.com</span>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>DRS Corporate Park, Sector 44, Gurugram, Haryana 122003</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 DRS Infra Mart Private Limited. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Supply</Link>
            <Link to="/contact">ISO Certifications</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
