import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBagIcon, HeartIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const { addToCart } = useCart();
  
  // Find the product based on the ID from URL
  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    // Reset selections when product changes
    if (product) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
      setQuantity(1);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-center">Product not found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor) {
      alert('Please select a color');
      return;
    }
    addToCart(product, quantity, selectedSize, selectedColor);
    alert('Product added to cart!');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl font-bold mb-8">${product.price}</p>

          {/* Size Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Size:</label>
            <div className="flex gap-2 flex-wrap">
              {product.sizes?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? 'bg-pink-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-pink-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Color:</label>
            <div className="flex gap-2 flex-wrap">
              {product.colors?.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedColor === color
                      ? 'bg-pink-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-pink-200'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity:</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBagIcon className="h-5 w-5" />
              Add to Cart
            </button>
            <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
              <HeartIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails; 