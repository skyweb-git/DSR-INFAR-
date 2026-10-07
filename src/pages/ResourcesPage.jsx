import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FileDown, 
  BookOpen, 
  ShieldCheck, 
  FileText, 
  Briefcase, 
  HeartHandshake, 
  Users, 
  Sparkles, 
  GraduationCap, 
  TreePine,
  ArrowRight
} from 'lucide-react';
import CTA from '../components/CTA';

const resourcesList = [
  {
    title: 'Product Catalog & Technical Specification Manual 2026',
    category: 'Catalog',
    size: '14.2 MB',
    format: 'PDF',
    description: 'Comprehensive 120-page compendium detailing material grades, load tolerances, finishes, and dimensional standards.'
  },
  {
    title: 'Structural Steel (TMT Fe 550D) Quality Test Benchmarks',
    category: 'Certifications',
    size: '3.8 MB',
    format: 'PDF',
    description: 'Laboratory yield strength, chemical composition analysis, and seismic compliance certificates.'
  },
  {
    title: 'Glazed Vitrified Tiles & Porcelain Cladding Laying Guide',
    category: 'Installation Guide',
    size: '6.5 MB',
    format: 'PDF',
    description: 'Best practice dry-lay, adhesive specification, expansion joint allowances, and grouting procedures.'
  },
  {
    title: 'CPVC & UPVC Pressure Piping System Engineering Data',
    category: 'Technical Sheet',
    size: '4.1 MB',
    format: 'PDF',
    description: 'Frictional head loss tables, chemical compatibility charts, and solvent weld cure time matrices.'
  },
  {
    title: 'Sustainable Infrastructure & GreenPro Certification Dossier',
    category: 'Compliance',
    size: '5.2 MB',
    format: 'PDF',
    description: 'Low-VOC ratings, recycled content declarations, and GRIHA / LEED compliance documentation.'
  },
  {
    title: 'Standard Procurement Contract & Supply Schedule Terms',
    category: 'Commercial',
    size: '2.0 MB',
    format: 'PDF',
    description: 'Terms of supply, JIT delivery guarantees, warranty procedures, and mechanical unloading guidelines.'
  }
];

const openPositions = [
  { title: 'Senior Structural Procurement Lead', department: 'Procurement & Mills', location: 'Gurugram / Mumbai', type: 'Full-Time' },
  { title: 'Quality Assurance & Concrete Lab Technologist', department: 'Quality Engineering', location: 'Bengaluru / Hyderabad', type: 'Full-Time' },
  { title: 'Enterprise Sales Director (Infra & EPC)', department: 'Commercial Sales', location: 'New Delhi / NCR', type: 'Full-Time' },
  { title: 'Logistics Fleet Dispatch Planner', department: 'Supply Chain Operations', location: 'Bhiwandi / Pune', type: 'Full-Time' },
];

const ResourcesPage = () => {
  const location = useLocation();

  const scrollToSection = (targetId) => {
    if (!targetId) return;
    const cleanId = String(targetId).replace('#', '').toLowerCase();

    let resolvedId = cleanId;
    if (cleanId === 'life-at-inframarket' || cleanId === 'life-at-drsinframart') {
      resolvedId = 'life-at-drsinframart';
    }

    const el = document.getElementById(resolvedId) || document.getElementById(cleanId);
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
    window.addEventListener('scroll-to-resource', handleCustomScroll);
    return () => window.removeEventListener('scroll-to-resource', handleCustomScroll);
  }, []);

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
          alt="Resources and Corporate Life"
          className="page-hero-bg"
        />
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <nav className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Resources</span>
          </nav>
          <h1 className="page-hero-title">Resources & Corporate Life</h1>
          <p className="page-hero-subtitle">
            Explore technical catalogues, career pathways, workplace culture, and social responsibility policies.
          </p>
        </div>
      </section>

      {/* 1. Catalogues */}
      <section id="catalogues" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">DOCUMENTATION CENTER</div>
            <h2 className="section-title">Catalogues & Technical Manuals</h2>
            <p className="section-subtitle">
              Verified technical literature for civil contractors, architects, structural consultants, and developers.
            </p>
          </div>

          <div className="resources-catalog-grid">
            {resourcesList.map((res, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xs)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                }}
                className="strength-card"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.6rem',
                      backgroundColor: 'rgba(244, 81, 42, 0.1)',
                      color: 'var(--color-accent-orange)',
                      borderRadius: 'var(--radius-xs)',
                    }}
                  >
                    {res.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-gray)', fontWeight: 600 }}>
                    {res.format} • {res.size}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '0.75rem', lineHeight: '1.35' }}>
                  {res.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-gray)', lineHeight: '1.6', marginBottom: '1.75rem', flexGrow: 1 }}>
                  {res.description}
                </p>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)', marginTop: 'auto' }}>
                  <button
                    onClick={() => alert(`Downloading "${res.title}"...`)}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '0.8125rem' }}
                  >
                    <FileDown size={16} /> DOWNLOAD DOCUMENT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Careers */}
      <section id="careers" className="section-padding" style={{ backgroundColor: 'var(--color-light-gray)' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">JOIN OUR MISSION</div>
            <h2 className="section-title">Careers</h2>
            <p className="section-subtitle">
              Build your career with India's fastest-transforming construction technology and material procurement leader.
            </p>
          </div>

          <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {openPositions.map((job, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  padding: '1.75rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
                className="strength-card"
              >
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '0.35rem' }}>
                    {job.title}
                  </h3>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-gray)', display: 'flex', gap: '1rem' }}>
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span style={{ color: '#F4512A', fontWeight: 700 }}>{job.type}</span>
                  </div>
                </div>

                <Link to="/contact" className="btn btn-primary" style={{ padding: '0.65rem 1.5rem', fontSize: '0.8125rem' }}>
                  Apply Now <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Life @ DRS Infra Mart */}
      <section id="life-at-drsinframart" className="section-padding">
        <span id="life-at-inframarket" style={{ display: 'none' }} />
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">CULTURE & PEOPLE</div>
            <h2 className="section-title">Life @ DRS Infra Mart</h2>
            <p className="section-subtitle">
              A high-ownership culture rooted in innovation, field empathy, and continuous engineering excellence.
            </p>
          </div>

          <div className="resources-culture-grid">
            <div className="culture-card">
              <Sparkles size={32} color="#F4512A" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Zero-Bureaucracy Ownership</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-gray)', lineHeight: '1.6' }}>
                We empower every team member to make customer-first choices, run bold experiments, and own execution from day one.
              </p>
            </div>

            <div className="culture-card">
              <Users size={32} color="#F4512A" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Diverse & Collaborative</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-gray)', lineHeight: '1.6' }}>
                Civil engineers, tech architects, fleet specialists, and commercial strategists collaborating in unison.
              </p>
            </div>

            <div className="culture-card">
              <GraduationCap size={32} color="#F4512A" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Continuous Upskilling</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-gray)', lineHeight: '1.6' }}>
                Technical cert sponsorships, leadership accelerator modules, and quarterly cross-functional rotational stints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CSR Policy */}
      <section id="csr-policy" className="section-padding" style={{ backgroundColor: 'var(--color-light-gray)' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">COMMUNITY & PLANET</div>
            <h2 className="section-title">CSR Policy</h2>
            <p className="section-subtitle">
              Committed to responsible construction, worker welfare, and environmental rehabilitation across our operating regions.
            </p>
          </div>

          <div className="resources-csr-grid">
            <div style={{ backgroundColor: '#fff', border: '1px solid var(--color-border)', borderRadius: '4px', padding: '2rem' }} className="strength-card">
              <TreePine size={32} color="#F4512A" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Green Quarry Rehabilitation</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-gray)', lineHeight: '1.6' }}>
                Systematic reforestation and topsoil preservation drives across active aggregate and sand mining catchments.
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', border: '1px solid var(--color-border)', borderRadius: '4px', padding: '2rem' }} className="strength-card">
              <HeartHandshake size={32} color="#F4512A" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Construction Labor Welfare</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-gray)', lineHeight: '1.6' }}>
                Mobile on-site health screening clinics, personal protective equipment (PPE) distribution, and safety training.
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', border: '1px solid var(--color-border)', borderRadius: '4px', padding: '2rem' }} className="strength-card">
              <GraduationCap size={32} color="#F4512A" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Skilling & Vocational Aid</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-gray)', lineHeight: '1.6' }}>
                Skill development programs for masons, plumbers, and tile artisans to master modern laser-laying technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default ResourcesPage;
