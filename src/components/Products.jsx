import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { productsData } from '../data/products';
import { ArrowRight } from 'lucide-react';

const Products = ({ limit }) => {
  const displayedProducts = limit ? productsData.slice(0, limit) : productsData;

  return (
    <section className="products-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow">PREMIUM PORTFOLIO</div>
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Everything you need to build better.
          </p>
        </div>

        <div className="products-grid">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {limit && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/products" className="btn btn-outline-dark">
              VIEW ALL 12 PRODUCT CATEGORIES <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
