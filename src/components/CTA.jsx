import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';

const CTA = () => {
  return (
    <section className="cta-section">
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
        alt="DRS Infra Mart Construction Excellence"
        className="cta-bg-image"
      />
      <div className="cta-overlay"></div>

      <div className="container cta-content">
        <div className="section-eyebrow" style={{ color: '#F4512A' }}>
          PARTNER WITH DRS INFRA MART PRIVATE LIMITED
        </div>
        <h2 className="cta-title">
          LET'S BUILD SOMETHING GREAT TOGETHER.
        </h2>
        <p className="cta-desc">
          Discover quality building materials and complete construction solutions for your next project.
        </p>

        <div className="cta-actions">
          <Link to="/products" className="btn btn-primary">
            VIEW PRODUCTS <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            CONTACT US <PhoneCall size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
