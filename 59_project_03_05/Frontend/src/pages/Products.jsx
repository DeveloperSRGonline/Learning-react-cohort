import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SkeletonCard from '../components/SkeletonCard';
import { useCart } from '../hooks/useCart';
import SearchIcon from '@mui/icons-material/Search';

const Products = () => {
  const products = useSelector((state) => state.productsReducer.products);
  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const query = searchParams.get('search');
    if (query !== null) {
      setSearchTerm(query);
      const el = document.getElementById('shop-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  useEffect(() => {

    if (products && products.length > 0) {
      // Simulate realistic loading for premium feel
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [products]);

  const categories = useMemo(() => {
    if (!products) return ['All'];
    const cats = products.map(p => p.category);
    return ['All', ...new Set(cats)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, products]);

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-tag">New Collection 2025</span>
          <h1>Elevate Your Style with Premium Quality</h1>
          <p>Discover our curated selection of luxury tech and fashion, designed for the modern lifestyle. Quality you can feel, style you can't ignore.</p>
          <div className="hero-btns">
            <button className="hero-btn-primary" onClick={() => {
              const el = document.getElementById('shop-section');
              el.scrollIntoView({ behavior: 'smooth' });
            }}>Shop Now</button>
            <button className="hero-btn-secondary">View Lookout</button>
          </div>
        </div>
      </section>

      <div id="shop-section" className="section-container">
        <div className="section-header">
          <h2>Our Collection</h2>
          <p>Meticulously crafted items for the discerning individual.</p>
        </div>

        <div className="shop-controls">
          <div className="search-wrapper">
            <SearchIcon className="search-icon" />
            <input
              type="text"
              placeholder="Search premium products..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-tabs">
            {categories.map(cat => (
              <div
                key={cat}
                className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="products-grid">
            {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className='products-grid'>
            {filteredProducts.map((product) => (
              <ProductCard addToCartHandler={addToCart} key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <h2>No products found</h2>
            <p>Try adjusting your search or category filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
