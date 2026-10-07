import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { brandsData } from '../data/brands';
import CTA from '../components/CTA';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';

const BrandsPage = () => {
  const location = useLocation();
  const [highlightedBrand, setHighlightedBrand] = useState(null);

  const scrollToBrand = (identifier) => {
    if (!identifier) return;
    const cleanId = String(identifier).replace('#', '').toLowerCase();

    const found = brandsData.find(
      (b) =>
        b.slug === cleanId ||
        String(b.id) === cleanId ||
        `brand-${b.id}` === cleanId ||
        `brand-${b.slug}` === cleanId ||
        b.name.toLowerCase().replace(/\s+/g, '-') === cleanId
    );

    const targetId = found ? `brand-${found.slug}` : `brand-${cleanId}`;
    const el = document.getElementById(targetId) || document.getElementById(cleanId);

    if (el) {
      if (found) {
        setHighlightedBrand(found.slug);
      }
      setTimeout(() => {
        const headerOffset = 100;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 60);

      setTimeout(() => {
        setHighlightedBrand(null);
      }, 3500);
    }
  };

  useEffect(() => {
    if (location.hash) {
      scrollToBrand(location.hash);
    }
  }, [location.hash, location.pathname]);

  useEffect(() => {
    const handleCustomScroll = (e) => {
      scrollToBrand(e.detail);
    };
    window.addEventListener('scroll-to-brand', handleCustomScroll);
    return () => window.removeEventListener('scroll-to-brand', handleCustomScroll);
  }, []);

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80"
          alt="Our Brand Partners"
          className="page-hero-bg"
        />
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <nav className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Brands</span>
          </nav>
          <h1 className="page-hero-title">Our Brand Partners</h1>
          <p className="page-hero-subtitle">
            Direct national alliances with India's most trusted manufacturing powerhouses ensuring authentic quality and warranties.
          </p>
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">MANUFACTURING PARTNERS</div>
            <h2 className="section-title">Authorized Brand Portfolio</h2>
            <p className="section-subtitle">
              Every brand we supply adheres to national and international compliance benchmarks, backed by OEM manufacturer guarantees.
            </p>
          </div>

          {/* Quick Jump Brand Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}
          >
            {brandsData.map((brand) => (
              <button
                key={brand.id}
                onClick={() => scrollToBrand(brand.slug)}
                style={{
                  padding: '0.45rem 1rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  borderRadius: '20px',
                  border: highlightedBrand === brand.slug ? '1px solid #F4512A' : '1px solid #E5E7EB',
                  backgroundColor: highlightedBrand === brand.slug ? '#F4512A' : '#FAFAFA',
                  color: highlightedBrand === brand.slug ? '#fff' : 'var(--color-primary-dark)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {brand.name}
              </button>
            ))}
          </div>

          <div className="brands-page-grid">
            {brandsData.map((brand) => {
              const isHighlighted = highlightedBrand === brand.slug;
              return (
                <div
                  key={brand.id}
                  id={`brand-${brand.slug}`}
                  style={{
                    border: isHighlighted ? '2px solid #F4512A' : '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xs)',
                    padding: '2.5rem 2rem',
                    backgroundColor: isHighlighted ? 'rgba(244, 81, 42, 0.02)' : '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isHighlighted ? '0 0 0 4px rgba(244, 81, 42, 0.2), 0 16px 36px rgba(244, 81, 42, 0.15)' : 'none',
                    transform: isHighlighted ? 'translateY(-4px)' : 'none',
                    position: 'relative',
                  }}
                  className="brand-card"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', width: '100%' }}>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        padding: '0.25rem 0.5rem',
                        backgroundColor: isHighlighted ? '#F4512A' : 'rgba(244, 81, 42, 0.1)',
                        color: isHighlighted ? '#fff' : 'var(--color-accent-orange)',
                        borderRadius: 'var(--radius-xs)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {brand.badge}
                    </span>
                    <Award size={18} color="#F4512A" />
                  </div>

                  <div style={{ margin: '1rem 0', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--color-primary-dark)' }}>
                      {brand.logoText}
                    </h3>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-accent-orange)', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                      {brand.category}
                    </div>
                  </div>

                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-gray)', lineHeight: '1.65', textAlign: 'center', marginTop: '0.5rem' }}>
                    {brand.description}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', textAlign: 'center', width: '100%' }}>
                    <Link to="/contact" className="btn-link" style={{ fontSize: '0.8125rem' }}>
                      ENQUIRE ABOUT {brand.logoText} →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Partnership Assurance Banner */}
          <div
            style={{
              backgroundColor: 'var(--color-light-gray)',
              padding: '3rem',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--color-border)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginTop: '4rem',
            }}
          >
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                100% Genuine Origin Guarantee
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-gray)', lineHeight: '1.6' }}>
                Direct factory-to-site dispatch documentation ensuring no adulteration or secondary grade substitution.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                Direct OEM Technical Support
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-gray)', lineHeight: '1.6' }}>
                Access to manufacturers' technical field teams for test batch certifications and structural load assessments.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                Aggregated Volume Rebates
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-gray)', lineHeight: '1.6' }}>
                Consolidated institutional pricing leverage passed to developers and civil engineering firms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default BrandsPage;
