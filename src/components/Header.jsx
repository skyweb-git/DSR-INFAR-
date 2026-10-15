import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const aboutSubmenuItems = [
  { name: 'Our History', path: '/about#history' },
  { name: 'Vision & Mission', path: '/about#vision-mission' },
  { name: 'Values', path: '/about#values' },
  { name: 'Leadership', path: '/about#leadership' },
  { name: 'Awards & Recognitions', path: '/about#awards' },
  { name: 'Our Footprint', path: '/about#footprint' },
];

const brandsSubmenuColumns = {
  left: [
    { name: 'Infra Market', path: '/brands#infra-market', slug: 'infra-market' },
    { name: 'Shalimar Paints', path: '/brands#shalimar-paints', slug: 'shalimar-paints' },
    { name: 'IVAS', path: '/brands#ivas', slug: 'ivas' },
    { name: 'Amstrad', path: '/brands#amstrad', slug: 'amstrad' },
    { name: 'Emcer', path: '/brands#emcer', slug: 'emcer' },
    { name: 'Millenium', path: '/brands#millenium', slug: 'millenium' },
  ],
  right: [
    { name: 'RDC Concrete', path: '/brands#rdc-concrete', slug: 'rdc-concrete' },
    { name: 'Equiphunt', path: '/brands#equiphunt', slug: 'equiphunt' },
    { name: 'INICIO', path: '/brands#inicio', slug: 'inicio' },
    { name: 'Robo Silicon', path: '/brands#robo-silicon', slug: 'robo-silicon' },
    { name: 'Ultrafine', path: '/brands#ultrafine', slug: 'ultrafine' },
  ],
};

const resourcesSubmenuItems = [
  { name: 'Catalogues', path: '/resources#catalogues' },
  { name: 'Careers', path: '/resources#careers' },
  { name: 'Life @ DSR Infra Mart', path: '/resources#life-at-dsrinframart' },
  { name: 'CSR Policy', path: '/resources#csr-policy' },
];

const megaMenuColumns = [
  {
    title: 'Structural Products',
    items: [
      { name: 'Concrete', path: '/products?q=concrete' },
      { name: 'Aggregates', path: '/products?q=aggregates' },
      { name: 'Steel', path: '/products/steel' },
      { name: 'Construction Chemicals', path: '/products?q=chemicals' },
      { name: 'Cementitious Products', path: '/products/cement' },
    ],
  },
  {
    title: 'Finishing Products',
    items: [
      { name: 'Walling Products', path: '/products?q=walling' },
      { name: 'Plumbing Products', path: '/products/pipes-fittings' },
      { name: 'MDF/ Plywood', path: '/products/plywood' },
      { name: 'Laminates', path: '/products/laminates' },
      { name: 'Roofing Products', path: '/products?q=roofing' },
    ],
  },
  {
    title: 'Lifestyle Products',
    items: [
      { name: 'Ceramics', path: '/products/tiles' },
      { name: 'Paints', path: '/products/paints' },
      { name: 'Modular Kitchen', path: '/products?q=kitchen' },
      { name: 'Designer Hardware', path: '/products/hardware' },
      { name: 'Fans', path: '/products/electrical-products' },
      { name: 'Lights', path: '/products/electrical-products' },
      { name: 'Appliances', path: '/products?q=appliances' },
      { name: 'Consumer Durables', path: '/products?q=durables' },
    ],
  },
  {
    title: 'Others',
    items: [
      { name: 'Rental Equipment', path: '/products?q=equipment' },
      { name: 'Exterior Painting', path: '/products/paints' },
      { name: 'Chemicals', path: '/products?q=chemicals' },
      { name: 'Construction Services', path: '/contact' },
    ],
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutSubmenuOpen, setAboutSubmenuOpen] = useState(false);
  const [productsSubmenuOpen, setProductsSubmenuOpen] = useState(false);
  const [brandsSubmenuOpen, setBrandsSubmenuOpen] = useState(false);
  const [resourcesSubmenuOpen, setResourcesSubmenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutSubmenuOpen(false);
    setProductsSubmenuOpen(false);
    setBrandsSubmenuOpen(false);
    setResourcesSubmenuOpen(false);
  }, [location.pathname, location.search, location.hash]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setAboutSubmenuOpen(false);
        setProductsSubmenuOpen(false);
        setBrandsSubmenuOpen(false);
        setResourcesSubmenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`header-wrapper ${isScrolled ? 'header-scrolled' : ''}`} ref={headerRef}>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="corp-dot"></span>
            <span>DSR INFRA MART PRIVATE LIMITED</span>
          </div>

          <div className="top-bar-right">
            <a href="tel:+919606350000" className="top-bar-item">
              <Phone size={14} />
              <span>+91-9606350000</span>
            </a>
            <a href="mailto:info@dsrinframart.com" className="top-bar-item">
              <Mail size={14} />
              <span>info@dsrinframart.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container main-nav-content">
          {/* Brand Identity */}
          <Link to="/" className="brand-identity">
            <div className="brand-name">
              <span>DSR </span>
              <span className="orange">INFRA MART </span>
              <span className="brand-private-limited">PRIVATE LIMITED</span>
            </div>
            <span className="brand-tagline">
              BUILDING MATERIALS & INFRASTRUCTURE
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-links-desktop">
            {/* 1. ABOUT US (With Subnavbar dropdown) */}
            <li
              className="has-dropdown relative-dropdown"
              onMouseEnter={() => setAboutSubmenuOpen(true)}
              onMouseLeave={() => setAboutSubmenuOpen(false)}
            >
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive || aboutSubmenuOpen ? 'active' : ''}`
                }
              >
                ABOUT US
              </NavLink>

              <div className={`about-subnavbar-dropdown ${aboutSubmenuOpen ? 'open' : ''}`}>
                <ul className="about-dropdown-list">
                  {aboutSubmenuItems.map((item, idx) => (
                    <li key={idx} className="about-dropdown-item">
                      <Link
                        to={item.path}
                        onClick={() => {
                          setAboutSubmenuOpen(false);
                          const target = item.path.split('#')[1];
                          window.dispatchEvent(new CustomEvent('scroll-to-about', { detail: target }));
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* 2. OUR PRODUCTS (With Subnavbar Mega Menu) */}
            <li
              className="has-dropdown"
              onMouseEnter={() => setProductsSubmenuOpen(true)}
              onMouseLeave={() => setProductsSubmenuOpen(false)}
            >
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `nav-link ${isActive || productsSubmenuOpen ? 'active' : ''}`
                }
              >
                OUR PRODUCTS
              </NavLink>

              <div className={`subnavbar-megamenu ${productsSubmenuOpen ? 'open' : ''}`}>
                <div className="container subnavbar-inner">
                  <div className="subnavbar-grid">
                    {megaMenuColumns.map((col, idx) => (
                      <div key={idx} className="subnavbar-col">
                        <h4 className="subnavbar-col-title">{col.title}</h4>
                        <ul className="subnavbar-item-list">
                          {col.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="subnavbar-item">
                              <Link
                                to={item.path}
                                onClick={() => setProductsSubmenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/* 3. OUR BRANDS (With 2-Column Subnavbar Dropdown) */}
            <li
              className="has-dropdown relative-dropdown"
              onMouseEnter={() => setBrandsSubmenuOpen(true)}
              onMouseLeave={() => setBrandsSubmenuOpen(false)}
            >
              <NavLink
                to="/brands"
                className={({ isActive }) =>
                  `nav-link ${isActive || brandsSubmenuOpen ? 'active' : ''}`
                }
              >
                OUR BRANDS
              </NavLink>

              <div className={`brands-subnavbar-dropdown ${brandsSubmenuOpen ? 'open' : ''}`}>
                <div className="brands-dropdown-grid">
                  <ul className="brands-dropdown-list">
                    {brandsSubmenuColumns.left.map((brand, idx) => (
                      <li key={idx} className="brands-dropdown-item">
                        <Link
                          to={brand.path}
                          onClick={() => {
                            setBrandsSubmenuOpen(false);
                            window.dispatchEvent(new CustomEvent('scroll-to-brand', { detail: brand.slug }));
                          }}
                        >
                          {brand.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <ul className="brands-dropdown-list">
                    {brandsSubmenuColumns.right.map((brand, idx) => (
                      <li key={idx} className="brands-dropdown-item">
                        <Link
                          to={brand.path}
                          onClick={() => {
                            setBrandsSubmenuOpen(false);
                            window.dispatchEvent(new CustomEvent('scroll-to-brand', { detail: brand.slug }));
                          }}
                        >
                          {brand.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            {/* 4. RESOURCES (With Subnavbar dropdown matching screenshot) */}
            <li
              className="has-dropdown relative-dropdown"
              onMouseEnter={() => setResourcesSubmenuOpen(true)}
              onMouseLeave={() => setResourcesSubmenuOpen(false)}
            >
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  `nav-link ${isActive || resourcesSubmenuOpen ? 'active' : ''}`
                }
              >
                RESOURCES
              </NavLink>

              {/* RESOURCES Subnavbar Dropdown */}
              <div className={`about-subnavbar-dropdown ${resourcesSubmenuOpen ? 'open' : ''}`}>
                <ul className="about-dropdown-list">
                  {resourcesSubmenuItems.map((item, idx) => (
                    <li key={idx} className="about-dropdown-item">
                      <Link
                        to={item.path}
                        onClick={() => {
                          setResourcesSubmenuOpen(false);
                          const target = item.path.split('#')[1];
                          window.dispatchEvent(new CustomEvent('scroll-to-resource', { detail: target }));
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* 5. INVESTOR RELATIONS */}
            <li>
              <NavLink
                to="/investor-relations"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                INVESTOR RELATIONS
              </NavLink>
            </li>

            {/* Get in Touch Button */}
            <li>
              <Link
                to="/contact"
                className="btn btn-primary"
                style={{
                  padding: '0.625rem 1.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  borderRadius: '6px',
                }}
              >
                Get in Touch
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger Trigger */}
          <button
            className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop & Drawer */}
      <div
        className={`mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <aside className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} style={{ overflowY: 'auto' }}>
        <div>
          <div className="mobile-menu-header">
            <div className="brand-identity">
              <div className="brand-name" style={{ color: '#fff' }}>
                <span>DSR </span>
                <span className="orange">INFRA MART </span>
                <span className="brand-private-limited" style={{ color: '#D1D5DB' }}>PRIVATE LIMITED</span>
              </div>
              <span className="brand-tagline" style={{ color: '#999' }}>
                BUILDING MATERIALS & INFRASTRUCTURE
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#fff' }}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <ul className="mobile-nav-links">
            {/* Mobile ABOUT US Accordion */}
            <li>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} style={{ flexGrow: 1 }}>
                  ABOUT US
                </NavLink>
                <button onClick={() => setMobileAboutOpen(!mobileAboutOpen)} style={{ color: '#F4512A', padding: '0.5rem' }}>
                  <ChevronDown size={20} style={{ transform: mobileAboutOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />
                </button>
              </div>

              {mobileAboutOpen && (
                <div style={{ backgroundColor: '#1E1E1E', borderRadius: '4px', padding: '0.75rem 1rem', margin: '0.5rem 0 1rem' }}>
                  <ul style={{ listStyle: 'none' }}>
                    {aboutSubmenuItems.map((item, idx) => (
                      <li key={idx} style={{ margin: '0.4rem 0' }}>
                        <Link
                          to={item.path}
                          style={{ color: '#CCC', fontSize: '0.85rem', display: 'block' }}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            const target = item.path.split('#')[1];
                            window.dispatchEvent(new CustomEvent('scroll-to-about', { detail: target }));
                          }}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* Mobile OUR PRODUCTS Accordion */}
            <li>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <NavLink to="/products" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} style={{ flexGrow: 1 }}>
                  OUR PRODUCTS
                </NavLink>
                <button onClick={() => setMobileProductsOpen(!mobileProductsOpen)} style={{ color: '#F4512A', padding: '0.5rem' }}>
                  <ChevronDown size={20} style={{ transform: mobileProductsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />
                </button>
              </div>

              {mobileProductsOpen && (
                <div style={{ backgroundColor: '#1E1E1E', borderRadius: '4px', padding: '1rem', margin: '0.5rem 0 1rem' }}>
                  {megaMenuColumns.map((col, idx) => (
                    <div key={idx} style={{ marginBottom: '1rem' }}>
                      <div style={{ color: '#F4512A', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                        {col.title}
                      </div>
                      <ul style={{ listStyle: 'none', paddingLeft: '0.5rem' }}>
                        {col.items.map((item, itemIdx) => (
                          <li key={itemIdx} style={{ margin: '0.35rem 0' }}>
                            <Link to={item.path} style={{ color: '#CCC', fontSize: '0.8125rem', display: 'block' }} onClick={() => setMobileMenuOpen(false)}>
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* Mobile OUR BRANDS Accordion */}
            <li>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <NavLink to="/brands" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} style={{ flexGrow: 1 }}>
                  OUR BRANDS
                </NavLink>
                <button onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)} style={{ color: '#F4512A', padding: '0.5rem' }}>
                  <ChevronDown size={20} style={{ transform: mobileBrandsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />
                </button>
              </div>

              {mobileBrandsOpen && (
                <div style={{ backgroundColor: '#1E1E1E', borderRadius: '4px', padding: '1rem', margin: '0.5rem 0 1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <ul style={{ listStyle: 'none' }}>
                      {brandsSubmenuColumns.left.map((brand, idx) => (
                        <li key={idx} style={{ margin: '0.35rem 0' }}>
                          <Link
                            to={brand.path}
                            style={{ color: '#CCC', fontSize: '0.8125rem', display: 'block' }}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              window.dispatchEvent(new CustomEvent('scroll-to-brand', { detail: brand.slug }));
                            }}
                          >
                            {brand.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ul style={{ listStyle: 'none' }}>
                      {brandsSubmenuColumns.right.map((brand, idx) => (
                        <li key={idx} style={{ margin: '0.35rem 0' }}>
                          <Link
                            to={brand.path}
                            style={{ color: '#CCC', fontSize: '0.8125rem', display: 'block' }}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              window.dispatchEvent(new CustomEvent('scroll-to-brand', { detail: brand.slug }));
                            }}
                          >
                            {brand.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>

            {/* Mobile RESOURCES Accordion */}
            <li>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <NavLink to="/resources" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} style={{ flexGrow: 1 }}>
                  RESOURCES
                </NavLink>
                <button onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)} style={{ color: '#F4512A', padding: '0.5rem' }}>
                  <ChevronDown size={20} style={{ transform: mobileResourcesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />
                </button>
              </div>

              {mobileResourcesOpen && (
                <div style={{ backgroundColor: '#1E1E1E', borderRadius: '4px', padding: '0.75rem 1rem', margin: '0.5rem 0 1rem' }}>
                  <ul style={{ listStyle: 'none' }}>
                    {resourcesSubmenuItems.map((item, idx) => (
                      <li key={idx} style={{ margin: '0.4rem 0' }}>
                        <Link
                          to={item.path}
                          style={{ color: '#CCC', fontSize: '0.85rem', display: 'block' }}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            const target = item.path.split('#')[1];
                            window.dispatchEvent(new CustomEvent('scroll-to-resource', { detail: target }));
                          }}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            <li>
              <NavLink to="/investor-relations" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                INVESTOR RELATIONS
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="mobile-menu-footer">
          <div className="contact-info">
            <a href="tel:+919606350000" style={{ color: '#bbb', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={14} style={{ color: '#F4512A' }} /> +91-9606350000
            </a>
            <a href="mailto:info@dsrinframart.com" style={{ color: '#bbb', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={14} style={{ color: '#F4512A' }} /> info@dsrinframart.com
            </a>
          </div>
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{
              width: '100%',
              borderRadius: '6px',
              textTransform: 'none',
              fontSize: '0.9375rem',
            }}
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </aside>
    </header>
  );
};

export default Header;
