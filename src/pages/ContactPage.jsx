import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import { HelpCircle, ChevronDown } from 'lucide-react';

const ContactPage = () => {
  const faqs = [
    {
      q: 'How does DSR Infra Mart handle site delivery and unloading?',
      a: 'We operate our own dedicated transport fleet equipped with GPS tracking. For bulk structural loads like TMT steel and cement, we coordinate scheduled mechanical trailer deliveries directly to your site unloading bay.'
    },
    {
      q: 'Can contractors request Mill Test Certificates (MTC)?',
      a: 'Yes. Every batch dispatch of primary structural steel, cement, and piping comes complete with OEM Mill Test Certificates and laboratory compliance reports.'
    },
    {
      q: 'Do you offer credit terms or institutional billing for developers?',
      a: 'We support verified corporate credit terms for ongoing developer projects, subject to standard institutional credit evaluation and scheduled payment milestones.'
    },
    {
      q: 'Are custom marble and granite slab cuttings supported?',
      a: 'Yes. Our processing yard provides computer-guided gangsaw cutting, edge chamfering, bookmatching, and custom dry-lay inspections prior to final packaging.'
    }
  ];

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="Contact DSR Infra Mart"
          className="page-hero-bg"
        />
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <nav className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Contact Us</span>
          </nav>
          <h1 className="page-hero-title">Contact DSR Infra Mart Private Limited</h1>
          <p className="page-hero-subtitle">
            Get in touch with our central materials desk for quotes, tenders, project specifications, and site dispatches.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <Contact />

      {/* Procurement FAQ Section */}
      <section style={{ backgroundColor: 'var(--color-light-gray)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">COMMON QUESTIONS</div>
            <h2 className="section-title">Procurement FAQs</h2>
            <p className="section-subtitle">
              Answers to frequently asked questions regarding our supply chain, logistics, and material guarantees.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xs)',
                  padding: '1.75rem 2rem',
                }}
              >
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <HelpCircle size={18} color="#F4512A" />
                  {faq.q}
                </h4>
                <p style={{ color: 'var(--color-text-gray)', fontSize: '0.9375rem', lineHeight: '1.65', paddingLeft: '1.65rem' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
