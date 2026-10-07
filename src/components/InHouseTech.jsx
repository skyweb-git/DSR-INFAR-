import React from 'react';
import { TrendingUp, Headphones, Boxes, Compass } from 'lucide-react';

const techApps = [
  {
    id: 1,
    category: 'Dealer Application',
    title: 'DRS RISE',
    desc: 'Empowering channel partners with live pricing, dispatch visibility, and credit limit tracking.',
    iconType: 'rise'
  },
  {
    id: 2,
    category: 'CRM',
    title: 'Phoenix Customer Central',
    desc: '360-degree client enquiry management, ticketing, and dedicated account manager alignment.',
    iconType: 'crm'
  },
  {
    id: 3,
    category: 'Manufacturing Application',
    title: 'Phoenix Ops Hub',
    desc: 'Real-time manufacturing plant scheduling, raw material tracking, and lab quality test logs.',
    iconType: 'ops'
  },
  {
    id: 4,
    category: 'Field Force Automation',
    title: 'Phoenix Sales Navigator',
    desc: 'GPS-guided territory mapping, site visit check-ins, and instant quotation generation.',
    iconType: 'sales'
  }
];

const InHouseTech = () => {
  return (
    <section className="section-padding in-house-tech-section" style={{ backgroundColor: '#fff', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <h2 className="section-title in-house-tech-title">
            Technology Developed In-House
          </h2>
          <p className="section-subtitle" style={{ margin: '0.75rem auto 0' }}>
            Leveraging In-House Technology to Drive Project Success
          </p>
        </div>

        {/* Card Grid Wrapper */}
        <div className="tech-carousel-container">
          {/* Cards Grid */}
          <div className="tech-cards-grid">
            {techApps.map((app) => (
              <div key={app.id} className="tech-app-card">
                {/* Orange Top Header */}
                <div className="tech-card-badge">
                  {app.category}
                </div>

                {/* Central Graphic Area */}
                <div className="tech-card-graphic-area">
                  {app.iconType === 'rise' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '8px',
                          background: 'linear-gradient(135deg, #F4512A, #FF7A00)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                        }}
                      >
                        <TrendingUp size={24} />
                      </div>
                      <span style={{ fontSize: '2rem', fontWeight: 900, color: '#171717', letterSpacing: '-0.03em' }}>
                        Rise
                      </span>
                    </div>
                  )}

                  {app.iconType === 'crm' && (
                    <div
                      style={{
                        width: '68px',
                        height: '68px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(244,81,42,0.15) 0%, rgba(255,122,0,0.05) 70%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#F4512A',
                      }}
                    >
                      <Headphones size={38} strokeWidth={2.2} />
                    </div>
                  )}

                  {app.iconType === 'ops' && (
                    <div
                      style={{
                        width: '68px',
                        height: '68px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#F4512A',
                      }}
                    >
                      <Boxes size={42} strokeWidth={2.2} />
                    </div>
                  )}

                  {app.iconType === 'sales' && (
                    <div
                      style={{
                        width: '68px',
                        height: '68px',
                        borderRadius: '50%',
                        border: '3px solid #F4512A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#F4512A',
                      }}
                    >
                      <Compass size={36} strokeWidth={2.2} />
                    </div>
                  )}
                </div>

                {/* Bottom Title Label */}
                <div className="tech-card-info">
                  <h4 className="tech-card-title">
                    {app.title}
                  </h4>
                  <p className="tech-card-desc">
                    {app.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InHouseTech;
