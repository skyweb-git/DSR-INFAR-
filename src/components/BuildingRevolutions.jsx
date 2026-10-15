import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';

const stories = [
  {
    id: 1,
    tagline: 'OPPORTUNITY',
    title: 'DSR Nirmaan - Empowering India\'s Builders',
    description: 'Witness how DSR Infra Mart is revolutionizing on-site construction efficiency with end-to-end procurement and timely material dispatch.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
  },
  {
    id: 2,
    tagline: 'INNOVATION',
    title: 'Smart Supply Chain & Quality Labs',
    description: 'Inside our advanced testing facilities and mechanized transit yards ensuring zero defect tolerance.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
  }
];

const BuildingRevolutions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const activeStory = stories[currentSlide];

  return (
    <section className="section-padding" style={{ backgroundColor: '#fff', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="building-revolutions-grid"
        >
          {/* Left Column: Text */}
          <div>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'var(--color-primary-dark)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              #BuildingRevolutions
            </h2>
            <p
              style={{
                fontSize: '1.125rem',
                color: 'var(--color-text-gray)',
                lineHeight: '1.75',
                maxWidth: '480px',
              }}
            >
              Welcome to DSR Infra Mart Private Limited, where we believe disruption is the key to Building Revolutions. We are transforming India's construction ecosystem by blending advanced logistics, trusted manufacturing partnerships, and unified procurement.
            </p>
          </div>

          {/* Right Column: Interactive Video Showcase */}
          <div>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xs)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                aspectRatio: '16/9',
                backgroundColor: '#111',
              }}
            >
              <img
                src={activeStory.image}
                alt={activeStory.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(70%) brightness(0.75)',
                  transition: 'transform 0.5s ease',
                }}
              />

              {/* Tagline Watermark */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    fontWeight: 900,
                    letterSpacing: '0.12em',
                    color: 'rgba(244, 81, 42, 0.85)',
                    textTransform: 'uppercase',
                    userSelect: 'none',
                  }}
                >
                  {activeStory.tagline}
                </span>
              </div>

              {/* Play Button */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '64px',
                  height: '44px',
                  backgroundColor: '#E50914',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                  cursor: 'pointer',
                  zIndex: 3,
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)')}
                aria-label="Play story video"
              >
                <Play size={24} fill="#fff" color="#fff" style={{ marginLeft: '3px' }} />
              </button>

              {/* Slider Arrows */}
              <button
                onClick={prevSlide}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'rgba(244, 81, 42, 0.9)',
                  color: '#fff',
                  borderRadius: 'var(--radius-xs)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 2,
                }}
                aria-label="Previous story"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'rgba(244, 81, 42, 0.9)',
                  color: '#fff',
                  borderRadius: 'var(--radius-xs)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 2,
                }}
                aria-label="Next story"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Caption & Carousel Dots */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '1rem',
              }}
            >
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                {activeStory.title}
              </span>

              <div style={{ display: 'flex', gap: '6px' }}>
                {stories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    style={{
                      width: idx === currentSlide ? '24px' : '12px',
                      height: '6px',
                      borderRadius: '3px',
                      backgroundColor: idx === currentSlide ? '#0066CC' : '#D1D5DB',
                      transition: 'all 0.3s ease',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '850px',
              aspectRatio: '16/9',
              backgroundColor: '#000',
              borderRadius: 'var(--radius-xs)',
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                zIndex: 10,
                color: '#fff',
                backgroundColor: 'rgba(0,0,0,0.6)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            <iframe
              src={activeStory.videoUrl}
              title="DSR Infra Mart Story"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default BuildingRevolutions;
