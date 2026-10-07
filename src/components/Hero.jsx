import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Layers, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Architectural Image */}
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
        alt="DRS Infra Mart Architecture and Materials"
        className="hero-bg-media"
      />
      
      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-eyebrow">
          <span className="badge-line"></span>
          <span>DRS INFRA MART PRIVATE LIMITED</span>
        </div>

        <h1 className="hero-title">
          BUILDING BETTER.<br />
          BUILDING SMARTER.
        </h1>

        <p className="hero-subtitle">
          Premium building materials and infrastructure solutions for modern construction.
        </p>

        <div className="hero-cta-group">
          <Link to="/products" className="btn btn-primary">
            EXPLORE PRODUCTS <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            CONTACT US
          </Link>
        </div>
      </div>

      {/* Hero Bottom Credibility Bar */}
      <div className="hero-features-bar">
        <div className="container">
          <div className="hero-features-grid">
            <div className="hero-feature-item">
              <Layers size={18} />
              <span>12+ Product Categories</span>
            </div>
            <div className="hero-feature-item">
              <ShieldCheck size={18} />
              <span>Certified Primary Quality</span>
            </div>
            <div className="hero-feature-item">
              <Truck size={18} />
              <span>On-Time Site Logistics</span>
            </div>
            <div className="hero-feature-item">
              <Award size={18} />
              <span>50+ Top Brand Partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
