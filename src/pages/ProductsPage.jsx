import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productsData, productCategories, categoryImages } from '../data/products';
import { Search, Filter, X } from 'lucide-react';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const catParam = searchParams.get('cat') || 'All Products';

  const [selectedCategory, setSelectedCategory] = useState(catParam);
  const [searchQuery, setSearchQuery] = useState(queryParam);

  useEffect(() => {
    if (queryParam) {
      setSearchQuery(queryParam);
    }
    if (catParam && catParam !== 'All Products') {
      setSelectedCategory(catParam);
    }
  }, [queryParam, catParam]);

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All Products' || product.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Find matches across all categories if current category filter yielded 0
  const allCategoryMatches = useMemo(() => {
    if (!searchQuery) return [];
    return productsData.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery]);

  // Featured fallback products to always display rich images
  const fallbackFeaturedProducts = useMemo(() => {
    return productsData.slice(0, 6);
  }, []);

  const getCategoryCount = (category) => {
    if (category === 'All Products') return productsData.length;
    return productsData.filter((p) => p.category === category).length;
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    // Clear any previous conflicting search so the category immediately displays all its products
    setSearchQuery('');
  };

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    // If user starts typing a search, broaden to All Products so results appear immediately
    if (selectedCategory !== 'All Products') {
      setSelectedCategory('All Products');
    }
  };

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
          alt="Our Products"
          className="page-hero-bg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80';
          }}
        />
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <nav className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Products</span>
          </nav>
          <h1 className="page-hero-title">Our Products</h1>
          <p className="page-hero-subtitle">
            Comprehensive catalog of core building materials, structural products, construction chemicals, and luxury architectural finishes.
          </p>
        </div>
      </section>

      {/* Catalog & Filter Bar */}
      <section className="section-padding">
        <div className="container">
          {/* Search & Filter Header */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2.5rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            {/* Search Input */}
            <div
              style={{
                position: 'relative',
                flexGrow: 1,
                maxWidth: '450px',
                minWidth: '280px',
              }}
            >
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--color-text-gray)',
                }}
              />
              <input
                type="text"
                placeholder="Search products, materials, steel, tiles..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="form-input"
                style={{
                  paddingLeft: '2.75rem',
                  backgroundColor: 'var(--color-light-gray)',
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--color-text-gray)',
                  }}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Results count indicator */}
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-gray)', fontWeight: 600 }}>
              Showing <strong>{filteredProducts.length > 0 ? filteredProducts.length : (allCategoryMatches.length > 0 ? allCategoryMatches.length : fallbackFeaturedProducts.length)}</strong> of {productsData.length} Products
            </div>
          </div>

          {/* Category Filter Bar with Images */}
          <div className="category-filter-container">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginRight: '0.25rem',
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: 'var(--color-text-gray)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              <Filter size={15} color="#F4512A" />
              <span>Filter:</span>
            </div>

            {productCategories.map((cat) => (
              <button
                key={cat}
                className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategorySelect(cat)}
                type="button"
              >
                <img
                  src={categoryImages[cat] || '/images/about-construction.jpg'}
                  alt={cat}
                  className="category-pill-thumb"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/about-construction.jpg';
                  }}
                />
                <span className="category-pill-label">{cat}</span>
                <span className="category-pill-badge">{getCategoryCount(cat)}</span>
              </button>
            ))}

            {(selectedCategory !== 'All Products' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('All Products');
                  setSearchQuery('');
                }}
                className="reset-filter-btn"
                type="button"
              >
                <X size={14} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Product Cards Grid or Fallback with Images */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : allCategoryMatches.length > 0 ? (
            <div>
              <div className="search-fallback-banner">
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.0625rem', fontWeight: 700 }}>
                    Matching Products Found ({allCategoryMatches.length})
                  </h4>
                  <p>
                    No products matched "{searchQuery}" inside "{selectedCategory}", but we found {allCategoryMatches.length} matching products across other categories:
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory('All Products');
                  }}
                  className="btn btn-primary btn-sm"
                  type="button"
                >
                  Show in All Categories
                </button>
              </div>

              <div className="products-grid">
                {allCategoryMatches.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="search-fallback-empty-box">
                <h3 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  No exact match for "{searchQuery}"
                </h3>
                <p style={{ color: 'var(--color-text-gray)', marginBottom: '1.25rem' }}>
                  We couldn't locate products with that exact term. Explore our top recommended materials below:
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All Products');
                    setSearchQuery('');
                  }}
                  className="btn btn-primary"
                  type="button"
                >
                  View All {productsData.length} Products
                </button>
              </div>

              <div className="search-fallback-heading">
                <div className="search-fallback-title">
                  <span>Featured Products</span>
                </div>
              </div>

              <div className="products-grid">
                {fallbackFeaturedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
