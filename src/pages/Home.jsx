import React from 'react';
import Hero from '../components/Hero';
import BuildingRevolutions from '../components/BuildingRevolutions';
import About from '../components/About';
import HouseOfBrands from '../components/HouseOfBrands';
import Products from '../components/Products';
import OurStrengths from '../components/OurStrengths';
import InHouseTech from '../components/InHouseTech';
import WhyChooseUs from '../components/WhyChooseUs';
import Brands from '../components/Brands';
import Projects from '../components/Projects';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      {/* 1. Hero */}
      <Hero />

      {/* 2. #BuildingRevolutions (Reference Screen 1) */}
      <BuildingRevolutions />

      {/* 3. About Section */}
      <About />

      {/* 4. House of Brands (Reference Screen 2) */}
      <HouseOfBrands />

      {/* 5. Products Portfolio */}
      <Products limit={8} />

      {/* 6. Our Strengths (Reference Screens 4 & 5) */}
      <OurStrengths />

      {/* 7. Technology Developed In-House (Reference Screen 3) */}
      <InHouseTech />

      {/* 8. Why Choose Us (Dark Section) */}
      <WhyChooseUs />

      {/* 9. Brand Partners Grid */}
      <Brands />

      {/* 10. Showcase Projects */}
      <Projects limit={6} />

      {/* 11. Animated Stats */}
      <Stats />

      {/* 12. Full-width Call to Action */}
      <CTA />

      {/* 13. Contact & Enquiry */}
      <Contact />
    </main>
  );
};

export default Home;
