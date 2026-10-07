import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowLeft, CheckCircle2, Phone, Mail, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = productsData.find((p) => p.id === id);

  const [activeImage, setActiveImage] = useState(product ? product.image : '');

  // Reset active image when product id changes
  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      window.scrollTo(0, 0);
    }
  }, [id, product]);

  if (!product) {
    return (
      <main className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Product Not Found</h2>
          <p style={{ color: 'var(--color-text-gray)', marginBottom: '2rem' }}>
            The requested building material does not exist or may have been updated.
          </p>
          <Link to="/products" className="btn btn-primary">
            Back to Products Catalog
          </Link>
        </div>
      </main>
    );
  }

  // Get related products (same category or others excluding current)
  const relatedProducts = productsData
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <main>
      {/* Breadcrumb Header */}
      <section className="page-hero" style={{ padding: '3.5rem 0' }}>
        <img
          src={product.image || "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"}
          alt={product.name}
          className="page-hero-bg"
        />
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <nav className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <span className="current">{product.name}</span>
          </nav>
          <h1 className="page-hero-title">{product.name}</h1>
          <p className="page-hero-subtitle">{product.category}</p>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="section-padding">
        <div className="container">
          <div className="product-detail-grid">
            {/* Gallery Column */}
            <div className="product-gallery-container">
              <div className="product-main-view">
                <img
                  src={activeImage}
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/about-construction.jpg';
                  }}
                />
              </div>

              {product.gallery && product.gallery.length > 1 && (
                <div className="product-thumb-row">
                  {product.gallery.map((imgUrl, index) => (
                    <button
                      key={index}
                      className={`product-thumb-btn ${activeImage === imgUrl ? 'active' : ''}`}
                      onClick={() => setActiveImage(imgUrl)}
                      aria-label={`Thumbnail ${index + 1}`}
                    >
                      <img
                        src={imgUrl}
                        alt={`${product.name} view ${index + 1}`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/about-construction.jpg';
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Commercial Assurance Box */}
              <div
                style={{
                  background: 'var(--color-light-gray)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--color-border)',
                  marginTop: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                  <ShieldCheck size={20} color="#F4512A" />
                  <span>Procurement Direct Benefits</span>
                </div>
                <ul style={{ listStyle: 'none', fontSize: '0.875rem', color: 'var(--color-text-gray)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>✓ Factory / Quarry Mill Test Certificate (MTC) included</li>
                  <li>✓ Guaranteed batch consistency for high volume orders</li>
                  <li>✓ Scheduled on-site mechanical unloading available</li>
                </ul>
              </div>
            </div>

            {/* Specifications & Overview Column */}
            <div>
              <div className="section-eyebrow">{product.category}</div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
                {product.name}
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--color-text-gray)', marginBottom: '2rem' }}>
                {product.description}
              </p>

              {/* Specifications Table */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem', borderBottom: '2px solid var(--color-primary-dark)', paddingBottom: '0.5rem' }}>
                  Technical Specifications
                </h3>
                <table className="spec-table">
                  <tbody>
                    {product.specifications.map((spec, idx) => (
                      <tr key={idx}>
                        <th>{spec.label}</th>
                        <td>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Key Features */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
                  Key Advantages
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {product.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <CheckCircle2 size={18} color="#F4512A" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.9375rem', color: 'var(--color-primary-dark)', fontWeight: 500 }}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
                  Recommended Applications
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {product.applications.map((app, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        backgroundColor: 'var(--color-light-gray)',
                        padding: '0.5rem 0.85rem',
                        borderRadius: 'var(--radius-xs)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                <Link to="/contact" className="btn btn-primary">
                  REQUEST QUOTATION <ArrowRight size={16} />
                </Link>
                <a href="tel:+919876543210" className="btn btn-outline-dark">
                  <Phone size={16} /> SPEAK TO SPECIALIST
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section style={{ backgroundColor: 'var(--color-light-gray)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">EXPLORE MORE</div>
            <h2 className="section-title">Related Materials</h2>
          </div>

          <div className="products-grid related-products-grid">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
