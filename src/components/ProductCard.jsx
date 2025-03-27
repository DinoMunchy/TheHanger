import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [showQuickAdd, setShowQuickAdd] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      setShowQuickAdd(true);
      return;
    }
    addToCart({ ...product, size: selectedSize, color: selectedColor });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-pink-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        {/* Size Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Size:</label>
          <div className="flex gap-2">
            {product.sizes?.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Color:</label>
          <div className="flex gap-2">
            {product.colors?.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
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

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${product.price}</span>
          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Add to Cart
            </button>
            <button
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              <HeartIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Add Modal */}
      {showQuickAdd && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Please Select Size and Color</h3>
            <p className="text-gray-600 mb-4">You need to select both size and color before adding to cart.</p>
            <button
              onClick={() => setShowQuickAdd(false)}
              className="w-full bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard; 