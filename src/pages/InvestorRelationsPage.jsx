import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, ShieldCheck, Download, Award, FileSpreadsheet } from 'lucide-react';
import CTA from '../components/CTA';

const reports = [
  { title: 'Annual Financial Report FY 2025-26', date: 'March 2026', type: 'Annual Filing' },
  { title: 'Investor Presentation Q3 FY 2025-26', date: 'January 2026', type: 'Earnings Deck' },
  { title: 'Corporate Governance & Board Charter', date: 'November 2025', type: 'Governance' },
  { title: 'Credit Rating Disclosure (CRISIL AA- Stable)', date: 'September 2025', type: 'Credit Rating' },
];

const InvestorRelationsPage = () => {
  return (
    <main>
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="Investor Relations"
          className="page-hero-bg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80';
          }}
        />
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <nav className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Investor Relations</span>
          </nav>
          <h1 className="page-hero-title">Investor Relations</h1>
          <p className="page-hero-subtitle">
            Transparent reporting, sustainable growth metrics, and corporate governance powering India's building materials infrastructure.
          </p>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">FINANCIAL PERFORMANCE</div>
            <h2 className="section-title">Growth & Operational Highlights</h2>
            <p className="section-subtitle">
              Sustained multi-category expansion backed by institutional discipline and nationwide distribution density.
            </p>
          </div>

          <div className="investor-highlights-grid">
            <div className="investor-stat-card">
              <div className="investor-stat-num">₹2,400+ Cr</div>
              <div className="investor-stat-label">Annual Gross Volume</div>
            </div>

            <div className="investor-stat-card">
              <div className="investor-stat-num">38% YoY</div>
              <div className="investor-stat-label">Revenue CAGR (3-Yr)</div>
            </div>

            <div className="investor-stat-card">
              <div className="investor-stat-num">CRISIL AA-</div>
              <div className="investor-stat-label">Stable Long-Term Rating</div>
            </div>

            <div className="investor-stat-card">
              <div className="investor-stat-num">100+ Cities</div>
              <div className="investor-stat-label">Fulfillment Coverage</div>
            </div>
          </div>

          {/* Filings & Disclosures Table */}
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }}>
              Recent Disclosures & Financial Reports
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {reports.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xs)',
                    padding: '1.25rem 1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(244, 81, 42, 0.1)', color: '#F4512A', borderRadius: 'var(--radius-xs)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FileSpreadsheet size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>{item.title}</h4>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-gray)' }}>{item.type} • {item.date}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => alert(`Downloading ${item.title}...`)}
                    className="btn btn-outline-dark"
                    style={{ padding: '0.5rem 1.25rem', fontSize: '0.75rem' }}
                  >
                    <Download size={14} /> Download PDF
                  </button>
                </div>
              ))}
            </div>

            {/* Investor Relations Contact Desk */}
            <div
              style={{
                marginTop: '3.5rem',
                backgroundColor: 'var(--color-light-gray)',
                padding: '2rem 2.5rem',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                  Investor Relations Desk
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-gray)' }}>
                  For institutional investor queries, analyst calls, and statutory filings:
                </p>
                <a href="mailto:investors@dsrinframart.com" style={{ color: '#F4512A', fontWeight: 700, fontSize: '0.9375rem' }}>
                  investors@dsrinframart.com
                </a>
              </div>

              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                Contact IR Secretariat
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default InvestorRelationsPage;
