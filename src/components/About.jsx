import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Premium Architectural Image */}
          <div className="about-image-wrapper">
            <img
              src="/images/about-construction.jpg"
              alt="DRS Infra Mart Construction Materials"
              className="about-image-main"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80';
              }}
            />
            <div className="about-badge-card">
              <div className="num">25+</div>
              <div className="desc">Years of Cumulative Building Industry Trust</div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="about-content-col">
            <div className="section-eyebrow">ABOUT THE COMPANY</div>
            <h2 className="section-title">Who Are We?</h2>

            <p className="about-text">
              DRS Infra Mart Private Limited is a modern building materials platform providing a wide range of quality products for contractors, builders, developers, architects, retailers and homeowners.
            </p>

            <div className="about-highlights">
              <div className="about-highlight-item">
                <CheckCircle2 size={20} />
                <span>Single-Window Procurement</span>
              </div>
              <div className="about-highlight-item">
                <CheckCircle2 size={20} />
                <span>Quarry & Mill Direct Pricing</span>
              </div>
              <div className="about-highlight-item">
                <CheckCircle2 size={20} />
                <span>Strict Quality BIS Testing</span>
              </div>
              <div className="about-highlight-item">
                <CheckCircle2 size={20} />
                <span>Dedicated Structural Support</span>
              </div>
            </div>

            <Link to="/about" className="btn-link">
              KNOW MORE <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
