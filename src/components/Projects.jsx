import React, { useState } from 'react';
import { projectsData, projectsCategories } from '../data/projects';
import { MapPin, ArrowUpRight } from 'lucide-react';

const Projects = ({ limit }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <section className="projects-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow">PORTFOLIO OF EXCELLENCE</div>
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">
            Supplying landmark developments across residential, commercial, hospitality, and civic infrastructure sectors.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="project-filter-tabs">
          {projectsCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-gallery-grid">
          {displayedProjects.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-card-image"
                loading="lazy"
              />
              <div className="project-card-overlay">
                <span className="project-card-cat">{project.category}</span>
                <h3 className="project-card-title">{project.title}</h3>
                <div className="project-card-location">
                  <MapPin size={14} color="#F4512A" />
                  <span>{project.location}</span>
                </div>
                <div className="project-card-extra">
                  <p style={{ fontSize: '0.8rem', color: '#E0E0E0' }}>
                    <strong>Materials:</strong> {project.materials}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
