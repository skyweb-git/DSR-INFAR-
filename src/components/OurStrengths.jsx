import React from 'react';

const strengths = [
  {
    id: 1,
    text: 'Multi-product building materials platform catering to the entire project construction lifecycle;',
  },
  {
    id: 2,
    text: 'Among the market leading platforms in India in key product categories with favourable macroeconomic trends;',
  },
  {
    id: 3,
    text: 'Diversified portfolio of in-house building material brands enabling increased revenues;',
  },
  {
    id: 4,
    text: 'In-house manufacturing capabilities with a combination of owned facilities and asset-light third-party facilities;',
  },
  {
    id: 5,
    text: 'Multi-channel distribution network to maximize customer reach and brand visibility;',
  },
  {
    id: 6,
    text: 'Ability to leverage technology to optimize supply chain and sales capabilities; and',
  },
  {
    id: 7,
    text: 'Promoter-led management supported by an experienced leadership team and backed by marquee investors',
    isCentered: true,
  },
];

const OurStrengths = () => {
  return (
    <section className="section-padding strengths-section" style={{ backgroundColor: '#fff', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Our Strengths
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="strengths-grid">
          {strengths.slice(0, 6).map((item) => (
            <div key={item.id} className="strength-card">
              <p className="strength-card-text">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* 7th Centered Bottom Card */}
        <div className="strength-bottom-card-wrapper">
          <div className="strength-card">
            <p className="strength-card-text">
              {strengths[6].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStrengths;
