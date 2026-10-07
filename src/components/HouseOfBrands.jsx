import React, { useState } from 'react';
import { Home, Layers, CheckCircle } from 'lucide-react';

const houseBrands = [
  {
    category: 'CONCRETE',
    badge: 'Ready Mix',
    brands: ['DRS.INFRA CONCRETE', 'RDC Concrete'],
    side: 'left-top',
    position: 'Foundation & Core Slabs',
    desc: 'High-strength M25-M60 automated batching concrete'
  },
  {
    category: 'STEEL',
    badge: 'Primary TMT',
    brands: ['DRS.INFRA STEEL', 'Fe 550D Rebar'],
    side: 'left-mid',
    position: 'Structural RCC Columns',
    desc: 'Earthquake-resistant seismic ductile primary steel'
  },
  {
    category: 'HOME DECOR',
    badge: 'Interiors',
    brands: ['inicio Luxury Decor'],
    side: 'left-mid-2',
    position: 'Interior Living Spaces',
    desc: 'Curated architectural wall finishes and bespoke fittings'
  },
  {
    category: 'EQUIPMENT SOLUTIONS',
    badge: 'Plant & Fleet',
    brands: ['equiphunt Logistics'],
    side: 'left-bot',
    position: 'Construction Hoists & Machinery',
    desc: 'Mechanized tower cranes and boom pumps on lease'
  },
  {
    category: 'TILES',
    badge: 'Porcelain Slabs',
    brands: ['IVAS TILES', 'millennium tiles', 'Emcer'],
    side: 'right-top',
    position: 'Flooring & Wet Walls',
    desc: 'Glazed vitrified slabs and rectified porcelain formats'
  },
  {
    category: 'PAINTS',
    badge: 'Wall Coatings',
    brands: ['SHALIMAR PAINTS', 'Polyurethane PU'],
    side: 'right-mid',
    position: 'Exterior & Interior Surfaces',
    desc: 'Weather-proof exterior emulsions and luxury primers'
  },
  {
    category: 'WALLING SOLUTIONS',
    badge: 'Thermal Masonry',
    brands: ['DRS AAC BLOCKS', 'Mortar Joints'],
    side: 'right-mid-2',
    position: 'Curtain & Partition Walls',
    desc: 'Lightweight fire-rated autoclaved aerated concrete blocks'
  },
  {
    category: 'PIPES',
    badge: 'Plumbing',
    brands: ['DRS.INFRA PIPES & FITTINGS'],
    side: 'right-bot',
    position: 'Concealed Drainage & Water Lines',
    desc: 'CPVC hot/cold pressure pipes and SWR drainage systems'
  },
  {
    category: 'AGGREGATES',
    badge: 'Mining Direct',
    brands: ['ROBO Aggregates'],
    side: 'bot-1',
    position: 'Sub-base & Concrete Fill',
    desc: 'Precision manufactured M-sand and graded gravel'
  },
  {
    category: 'WOOD',
    badge: 'BWP Marine',
    brands: ['DRS.INFRA MDF/PLYWOOD'],
    side: 'bot-2',
    position: 'Cabinetry & Partitions',
    desc: 'Calibrated boiling-water-proof hardwood timber panels'
  },
  {
    category: 'LAMINATES',
    badge: 'High Pressure',
    brands: ['IVAS LAMINATES'],
    side: 'bot-3',
    position: 'Furniture Surfaces',
    desc: 'Anti-fingerprint thermal healing matte acrylic sheets'
  },
  {
    category: 'ELECTRICALS',
    badge: 'Power Systems',
    brands: ['IVAS ELECTRICALS', 'AMSTRAD'],
    side: 'bot-4',
    position: 'Concealed Cabling & Lighting',
    desc: 'FRLS multi-strand copper wiring and modular switchgear'
  }
];

const HouseOfBrands = () => {
  const [selectedBrand, setSelectedBrand] = useState(houseBrands[0]);

  return (
    <section className="section-padding house-of-brands-section" style={{ backgroundColor: '#fff', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header text-center" style={{ maxWidth: '960px', margin: '0 auto 3rem' }}>
          <h2 className="section-title">
            House of Brands
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0', fontSize: '0.9375rem', lineHeight: '1.7' }}>
            We operate a "house of brands" platform in the building materials industry, bringing together both in-house and third-party brands. Our portfolio spans multiple product categories and includes brands such as DRS Infra Mart, RDC, Shalimar Paints, Inicio, Amstrad, Robo, Ultrafine, Millenium, Emcer, Equiphunt, and IVAS. This diversified brand ecosystem sets us apart from competitors and helps build stronger customer loyalty and trust. We are also consciously focusing on increasing the share of in-house branded products, as we believe strong branding ensures consistency and predictability in quality, something that is often difficult to guarantee when sourcing materials from unorganized manufacturers.
          </p>
        </div>

        {/* Central Architectural Cutaway Interactive Display */}
        <div className="house-cutaway-card">
          {/* Main Visual Center: 3D Architectural Cross Section */}
          <div className="house-cutaway-image-wrapper">
            <div className="house-cutaway-inner-card">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Architectural House Cross Section"
                className="house-cutaway-img"
              />
              <div className="house-cutaway-overlay">
                <div>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#F4512A', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    INTEGRATED STRUCTURAL ECOSYSTEM
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 800, margin: '0.2rem 0' }}>
                    Active Zone: {selectedBrand.category}
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: '#D1D5DB' }}>
                    {selectedBrand.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* House of Brands Grid Cards */}
          <div className="house-brands-grid">
            {houseBrands.map((item, idx) => {
              const isSelected = selectedBrand.category === item.category;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedBrand(item)}
                  className={`house-brand-card ${isSelected ? 'active' : ''}`}
                >
                  <div className="house-brand-card-badge">
                    {item.category}
                  </div>

                  <div className="house-brand-card-body">
                    {item.brands.map((bName, bIdx) => (
                      <div
                        key={bIdx}
                        style={{
                          fontSize: bIdx === 0 ? '0.875rem' : '0.75rem',
                          fontWeight: bIdx === 0 ? 800 : 600,
                          color: bIdx === 0 ? 'var(--color-primary-dark)' : 'var(--color-text-gray)',
                        }}
                      >
                        {bName}
                      </div>
                    ))}
                    <span style={{ fontSize: '0.625rem', color: '#F4512A', fontWeight: 600, marginTop: '0.25rem', display: 'block' }}>
                      • {item.position}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseOfBrands;
