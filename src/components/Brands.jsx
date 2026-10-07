import React from 'react';
import { Link } from 'react-router-dom';
import { brandsData } from '../data/brands';

const Brands = () => {
  return (
    <section className="brands-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow">INDUSTRY LEADERSHIP</div>
          <h2 className="section-title">Our Brands</h2>
          <p className="section-subtitle">
            Partnered directly with premier domestic and international manufacturers for uncompromised material integrity.
          </p>
        </div>

        <div className="brands-grid">
          {brandsData.map((brand) => (
            <Link
              key={brand.id}
              to={`/brands#${brand.slug}`}
              className="brand-card"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <div className="brand-card-logo-wrap">
                <span className="brand-logo-text">{brand.logoText}</span>
              </div>
              <span className="brand-card-cat">{brand.category}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
