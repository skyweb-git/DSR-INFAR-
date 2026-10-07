import React, { useEffect, useState, useRef } from 'react';

const statsData = [
  { target: 12, suffix: '+', label: 'Product Categories' },
  { target: 50, suffix: '+', label: 'Trusted Brands' },
  { target: 1000, suffix: '+', label: 'Satisfied Customers' },
  { target: 500, suffix: '+', label: 'Completed Projects' },
];

const Counter = ({ target, suffix, shouldAnimate }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // Easing: easeOutExpo
      const progress = frame / totalFrames;
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easedProgress * target);

      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(target);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [shouldAnimate, target]);

  return (
    <div className="stat-number">
      {count}
      {suffix}
    </div>
  );
};

const Stats = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="stats-section section-padding-sm" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item">
              <Counter
                target={stat.target}
                suffix={stat.suffix}
                shouldAnimate={inView}
              />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
