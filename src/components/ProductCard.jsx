import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <div className="product-card-image-wrap">
        <span className="product-category-tag">{product.category}</span>
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/about-construction.jpg';
          }}
        />
      </div>

      <div className="product-card-body">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-desc">{product.shortDescription}</p>

        <div className="product-card-footer">
          <Link
            to={`/products/${product.id}`}
            className="product-card-action"
            aria-label={`View details of ${product.name}`}
          >
            <span>VIEW DETAILS</span>
            <div className="product-card-arrow-circle">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
