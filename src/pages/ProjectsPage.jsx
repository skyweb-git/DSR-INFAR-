import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../components/Projects';
import CTA from '../components/CTA';

const ProjectsPage = () => {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80"
          alt="Our Project Showcase"
          className="page-hero-bg"
        />
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <nav className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Projects</span>
          </nav>
          <h1 className="page-hero-title">Our Project Showcase</h1>
          <p className="page-hero-subtitle">
            A portfolio of premier residential towers, commercial parks, luxury resorts, and national infrastructure delivered across India.
          </p>
        </div>
      </section>

      {/* Projects Grid Component */}
      <Projects />

      <CTA />
    </main>
  );
};

export default ProjectsPage;
