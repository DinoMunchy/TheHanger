import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline';
import QuickAddModal from '../components/QuickAddModal';
import { useCart } from '../context/CartContext';

export const products = [
  {
    id: 1,
    name: 'Floral Summer Dress',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    category: 'Dresses',
    rating: 4.5,
    reviews: 128,
    colors: ['Pink', 'Blue', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: 'Classic White Blazer',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    category: 'Outerwear',
    rating: 4.8,
    reviews: 89,
    colors: ['White', 'Black', 'Beige'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3,
    name: 'Leather Crossbody Bag',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    category: 'Accessories',
    rating: 4.6,
    reviews: 156,
    colors: ['Brown', 'Black', 'Tan'],
    sizes: ['One Size']
  },
  {
    id: 4,
    name: 'Strappy Heels',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    category: 'Shoes',
    rating: 4.7,
    reviews: 92,
    colors: ['Black', 'Nude', 'Red'],
    sizes: ['36', '37', '38', '39', '40']
  },
  {
    id: 5,
    name: 'Silk Evening Gown',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    category: 'Dresses',
    rating: 4.9,
    reviews: 45,
    colors: ['Navy', 'Burgundy', 'Emerald'],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 6,
    name: 'Gold Necklace',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    category: 'Accessories',
    rating: 4.4,
    reviews: 78,
    colors: ['Gold'],
    sizes: ['One Size']
  },
  {
    id: 7,
    name: 'Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1527016021513-b09758b777bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    category: 'Outerwear',
    rating: 4.6,
    reviews: 112,
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 8,
    name: 'Ankle Boots',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    category: 'Shoes',
    rating: 4.7,
    reviews: 67,
    colors: ['Black', 'Brown', 'Tan'],
    sizes: ['36', '37', '38', '39', '40']
  },
];

const categories = ['All', 'Dresses', 'Outerwear', 'Accessories', 'Shoes'];
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  // Filter products based on category and search query
  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Collection
        </motion.h1>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input w-full"
            />
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white border-primary'
                      : 'border-neutral-light hover:border-primary hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input max-w-xs"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/shop/${product.id}`} className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                  
                  {/* Quick actions */}
                  <div className="absolute top-4 right-4 space-y-2 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        // Add to wishlist logic here
                      }}
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      <HeartIcon className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedProduct(product);
                      }}
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      <ShoppingBagIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Link>
              
              <div className="space-y-2">
                <Link to={`/shop/${product.id}`} className="block">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-neutral-light">
                      ({product.reviews})
                    </span>
                  </div>
                </Link>

                <p className="text-neutral-light text-sm">{product.category}</p>
                
                {/* Available colors */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-neutral-light">Colors:</span>
                  <div className="flex space-x-1">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="text-sm text-neutral"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Available sizes */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-neutral-light">Sizes:</span>
                  <div className="flex space-x-1">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="text-sm text-neutral"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedProduct(product)}
                  className="w-full btn btn-primary mt-4"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-neutral-light">
              No products found matching your criteria.
            </p>
          </div>
        )}

        {/* Quick Add Modal */}
        {selectedProduct && (
          <QuickAddModal
            product={selectedProduct}
            isOpen={true}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Shop; 