import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import { 
  Building2, 
  Target, 
  Compass, 
  CheckCircle2, 
  Warehouse, 
  ShieldCheck, 
  Truck, 
  Users,
  Award,
  Globe2,
  Calendar,
  HeartHandshake
} from 'lucide-react';

const AboutPage = () => {
  const location = useLocation();

  const scrollToSection = (targetId) => {
    if (!targetId) return;
    const cleanId = String(targetId).replace('#', '');
    const el = document.getElementById(cleanId);
    if (el) {
      setTimeout(() => {
        const headerOffset = 100;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 60);
    }
  };

  useEffect(() => {
    if (location.hash) {
      scrollToSection(location.hash);
    }
  }, [location.hash, location.pathname]);

  useEffect(() => {
    const handleCustomScroll = (e) => {
      scrollToSection(e.detail);
    };
    window.addEventListener('scroll-to-about', handleCustomScroll);
    return () => window.removeEventListener('scroll-to-about', handleCustomScroll);
  }, []);

  const leadershipTeam = [
    {
      name: 'Vikramaditya Sharma',
      role: 'Managing Director & Founder',
      desc: '25+ years pioneering industrial infrastructure and organized building materials logistics in India.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Ananya Deshmukh',
      role: 'Chief Operating Officer',
      desc: 'Former VP of Supply Chain with deep expertise in full-truckload freight networks and port customs.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Rohan Singhania',
      role: 'Chief Technical & Quality Officer',
      desc: 'Chartered civil engineer leading laboratory testing, BIS compliance, and aggregate quality audits.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Pooja Iyer',
      role: 'Head of Enterprise Procurement',
      desc: 'Direct mill alliances specialist steering relations across primary steel, cement, and chemical giants.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const awards = [
    { year: '2025', title: 'Infra Brand of the Year', org: 'National Construction Awards', desc: 'Recognized for building India\'s most comprehensive single-window materials platform.' },
    { year: '2024', title: 'Supply Chain Excellence Trophy', org: 'Logistics Leadership Conclave', desc: 'Awarded for tech-enabled GPS site fleet management and 99.4% on-time dispatch rate.' },
    { year: '2023', title: 'Green Building Pioneer Citation', org: 'Indian Green Building Council (IGBC)', desc: 'Commended for promoting low-carbon flyash cements, AAC blocks, and low-VOC emulsions.' },
  ];

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <img
          src="/images/about-hero.jpg"
          alt="About DSR Infra Mart"
          className="page-hero-bg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';
          }}
        />
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <nav className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">About Us</span>
          </nav>
          <h1 className="page-hero-title">About DSR Infra Mart Private Limited</h1>
          <p className="page-hero-subtitle">
            Pioneering a modern, transparent, and high-efficiency building materials supply network across India.
          </p>
        </div>
      </section>

      {/* Main Corporate Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <img
                src="/images/about-construction.jpg"
                alt="DSR Infra Mart Construction Facility"
                className="about-image-main"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="about-badge-card">
                <div className="num">500+</div>
                <div className="desc">Major Landmarks Built With DSR Materials</div>
              </div>
            </div>

            <div>
              <div className="section-eyebrow">WHO WE ARE</div>
              <h2 className="section-title">Redefining Construction Material Procurement</h2>
              <p className="about-text" style={{ marginBottom: '1.25rem' }}>
                DSR Infra Mart Private Limited is a modern building materials platform providing a wide range of quality products for contractors, builders, developers, architects, retailers and homeowners.
              </p>
              <p style={{ color: 'var(--color-text-gray)', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                Founded with a mission to eliminate fragmented middlemen markups and inconsistent site deliveries, DSR Infra Mart aggregates certified structural, architectural, plumbing, and electrical materials directly from primary mills and quarries under one unified logistics roof.
              </p>

              <div className="about-highlights">
                <div className="about-highlight-item">
                  <CheckCircle2 size={20} />
                  <span>Quality Assurance Labs</span>
                </div>
                <div className="about-highlight-item">
                  <CheckCircle2 size={20} />
                  <span>Transparent Volume Tendering</span>
                </div>
                <div className="about-highlight-item">
                  <CheckCircle2 size={20} />
                  <span>Rapid JIT Site Logistics</span>
                </div>
                <div className="about-highlight-item">
                  <CheckCircle2 size={20} />
                  <span>Pan-India Sourcing Direct</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Our History */}
      <section id="history" className="section-padding" style={{ backgroundColor: 'var(--color-light-gray)' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">OUR JOURNEY</div>
            <h2 className="section-title">Our History</h2>
            <p className="section-subtitle">
              From a single steel & aggregate distribution depot to India's premier multi-category infrastructure platform.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '4px', borderLeft: '4px solid #F4512A', border: '1px solid var(--color-border)', borderLeftWidth: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F4512A', fontWeight: 800, marginBottom: '0.5rem' }}>
                <Calendar size={18} /> <span>2016 - Genesis</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Founding of DSR Infra Mart</h3>
              <p style={{ color: 'var(--color-text-gray)', lineHeight: '1.65' }}>
                Initiated operations with direct primary TMT steel and RMC concrete supplies in NCR, solving acute supply delay challenges for regional developers.
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '4px', borderLeft: '4px solid #F4512A', border: '1px solid var(--color-border)', borderLeftWidth: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F4512A', fontWeight: 800, marginBottom: '0.5rem' }}>
                <Calendar size={18} /> <span>2019 - Multi-Category Expansion</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Finishing & Lifestyle Integration</h3>
              <p style={{ color: 'var(--color-text-gray)', lineHeight: '1.65' }}>
                Expanded into ceramics, vitrified tiles, sanitaryware, and timber panels, creating the industry's first true single-window structural-to-finishing catalog.
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '4px', borderLeft: '4px solid #F4512A', border: '1px solid var(--color-border)', borderLeftWidth: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F4512A', fontWeight: 800, marginBottom: '0.5rem' }}>
                <Calendar size={18} /> <span>2022 - In-House Tech Ecosystem</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Digital Transformation</h3>
              <p style={{ color: 'var(--color-text-gray)', lineHeight: '1.65' }}>
                Rolled out DSR Rise, Phoenix Customer Central, and GPS logistics automation, bringing real-time material traceability to institutional job sites.
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '4px', borderLeft: '4px solid #F4512A', border: '1px solid var(--color-border)', borderLeftWidth: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F4512A', fontWeight: 800, marginBottom: '0.5rem' }}>
                <Calendar size={18} /> <span>2026 - National Landmark Supply</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Pan-India Leadership</h3>
              <p style={{ color: 'var(--color-text-gray)', lineHeight: '1.65' }}>
                Surpassed ₹2,400+ Cr in annual volume across 100+ cities with over 500,000 sq. ft. of active warehousing buffers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section id="vision-mission" style={{ backgroundColor: '#fff', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">GUIDING PRINCIPLES</div>
            <h2 className="section-title">Vision & Mission</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#FAFAFA', padding: '2.5rem', borderRadius: 'var(--radius-xs)', border: '1px solid var(--color-border)' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(244, 81, 42, 0.1)', color: 'var(--color-accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-xs)', marginBottom: '1.5rem' }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--color-text-gray)', lineHeight: '1.7' }}>
                To empower India's construction and design community by providing guaranteed, lab-certified materials at honest pricing with precision-timed site delivery.
              </p>
            </div>

            <div style={{ background: '#FAFAFA', padding: '2.5rem', borderRadius: 'var(--radius-xs)', border: '1px solid var(--color-border)' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(244, 81, 42, 0.1)', color: 'var(--color-accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-xs)', marginBottom: '1.5rem' }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--color-text-gray)', lineHeight: '1.7' }}>
                To stand as the most trusted and comprehensive single-window infrastructure material mart in the subcontinent, fueling urban growth and sustainable architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Values */}
      <section id="values" className="section-padding" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#fff' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">OUR PILLARS</div>
            <h2 className="section-title light">Core Values</h2>
            <p className="section-subtitle light">
              Principles that govern every delivery, supplier audit, and customer interaction.
            </p>
          </div>

          <div className="about-values-grid">
            <div className="about-value-card">
              <ShieldCheck size={36} color="#F4512A" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Integrity & Transparency</h4>
              <p style={{ color: '#AAA', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Zero adulteration, genuine Mill Test Certificates, and honest wholesale pricing without hidden charges.
              </p>
            </div>

            <div className="about-value-card">
              <CheckCircle2 size={36} color="#F4512A" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Quality Assurance First</h4>
              <p style={{ color: '#AAA', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Rigorous multi-stage batch checks before dispatch to protect structural and aesthetic design life.
              </p>
            </div>

            <div className="about-value-card">
              <HeartHandshake size={36} color="#F4512A" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Customer Centricity</h4>
              <p style={{ color: '#AAA', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Dedicated technical account managers supporting contractors through BOQ takeoff, staging, and JIT offloading.
              </p>
            </div>

            <div className="about-value-card">
              <Globe2 size={36} color="#F4512A" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Sustainable Construction</h4>
              <p style={{ color: '#AAA', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Pioneering eco-friendly green concrete mixes, certified wood, and thermal insulating masonry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership */}
      <section id="leadership" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">EXECUTIVE TEAM</div>
            <h2 className="section-title">Leadership</h2>
            <p className="section-subtitle">
              Promoter-led management supported by an experienced leadership team and backed by marquee investors.
            </p>
          </div>

          <div className="about-leadership-grid">
            {leadershipTeam.map((member, idx) => (
              <div key={idx} className="leadership-card">
                <img src={member.image} alt={member.name} className="leadership-card-img" />
                <div className="leadership-card-body">
                  <h3 className="leadership-card-name">{member.name}</h3>
                  <div className="leadership-card-role">{member.role}</div>
                  <p className="leadership-card-desc">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Awards & Recognitions */}
      <section id="awards" className="section-padding" style={{ backgroundColor: 'var(--color-light-gray)' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">ACCOLADES</div>
            <h2 className="section-title">Awards & Recognitions</h2>
            <p className="section-subtitle">
              Recognized across national industry forums for excellence in building materials distribution and technology innovation.
            </p>
          </div>

          <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {awards.map((aw, idx) => (
              <div key={idx} style={{ backgroundColor: '#fff', border: '1px solid var(--color-border)', borderRadius: '4px', padding: '2rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }} className="award-card">
                <div style={{ width: '64px', height: '64px', borderRadius: '4px', backgroundColor: 'rgba(244, 81, 42, 0.1)', color: '#F4512A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Award size={36} />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontSize: '0.8125rem', color: '#F4512A', fontWeight: 800 }}>{aw.year} • {aw.org}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0.25rem 0 0.5rem', color: 'var(--color-primary-dark)' }}>{aw.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-gray)', lineHeight: '1.55' }}>{aw.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Footprint */}
      <section id="footprint" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">REACH & LOGISTICS</div>
            <h2 className="section-title">Our Footprint</h2>
            <p className="section-subtitle">
              A robust supply chain footprint bridging quarries, factories, and construction sites nationwide.
            </p>
          </div>

          <div className="about-footprint-grid">
            <div className="footprint-card">
              <div className="footprint-card-num">100+</div>
              <div className="footprint-card-label">Cities Covered</div>
            </div>
            <div className="footprint-card">
              <div className="footprint-card-num">500,000+</div>
              <div className="footprint-card-label">Sq. Ft. Warehouses</div>
            </div>
            <div className="footprint-card">
              <div className="footprint-card-num">350+</div>
              <div className="footprint-card-label">Dedicated GPS Fleet</div>
            </div>
            <div className="footprint-card">
              <div className="footprint-card-num">24 Hrs</div>
              <div className="footprint-card-label">JIT Metro Dispatch</div>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <CTA />
    </main>
  );
};

export default AboutPage;
