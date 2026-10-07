import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  TrendingDown, 
  Truck, 
  Headphones, 
  Clock 
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      number: '01',
      title: 'Quality Products',
      description: 'Strict batch verification, lab certification, and adherence to BIS / ISO standards across all supply lines.',
      icon: ShieldCheck
    },
    {
      number: '02',
      title: 'Trusted Brands',
      description: 'Authorized direct partnerships with tier-one national and global manufacturers ensuring 100% genuine origin.',
      icon: Award
    },
    {
      number: '03',
      title: 'Competitive Pricing',
      description: 'Volume-driven wholesale procurement economics passed directly to developers, contractors, and architects.',
      icon: TrendingDown
    },
    {
      number: '04',
      title: 'Reliable Supply',
      description: 'Centralized warehousing and robust inventory buffers that eliminate site stoppages and project downtime.',
      icon: Truck
    },
    {
      number: '05',
      title: 'Expert Support',
      description: 'Dedicated structural and architectural specialists assisting with technical data sheets, BOQ, and sampling.',
      icon: Headphones
    },
    {
      number: '06',
      title: 'On-Time Delivery',
      description: 'GPS-tracked dedicated fleet delivering directly to job sites across metropolitan hubs and industrial corridors.',
      icon: Clock
    }
  ];

  return (
    <section className="why-us-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow">THE DRS ADVANTAGE</div>
          <h2 className="section-title light">Why Choose DRS Infra Mart Private Limited?</h2>
          <p className="section-subtitle light">
            We streamline the construction supply chain with uncompromising reliability, technical excellence, and transparent execution.
          </p>
        </div>

        <div className="why-us-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.number} className="feature-block">
                <div className="feature-block-header">
                  <span className="feature-number">{feature.number}</span>
                  <div className="feature-icon-wrap">
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
