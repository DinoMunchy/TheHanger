import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrashIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal,
    clearCart 
  } = useCart();

  const shipping = 10.00; // Fixed shipping cost
  const subtotal = getCartTotal();
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  const handleRemoveItem = (item) => {
    removeFromCart(item.id, item.size, item.color);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Shopping Cart
        </motion.h1>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <ShoppingBagIcon className="w-16 h-16 mx-auto text-neutral-light mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-neutral-light mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/shop" className="btn btn-primary">
              Continue Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              {cartItems.map((item) => (
                <motion.div
                  key={`${item.id}-${item.size}-${item.color}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center gap-6 p-4 bg-white rounded-lg shadow-sm"
                >
                  <Link to={`/shop/${item.id}`} className="shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-32 object-cover rounded-md"
                    />
                  </Link>
                  
                  <div className="flex-grow">
                    <Link 
                      to={`/shop/${item.id}`}
                      className="text-lg font-semibold hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                    <div className="text-neutral-light mt-1">
                      Size: {item.size} | Color: {item.color}
                    </div>
                    <div className="text-primary font-bold mt-2">
                      ${item.price.toFixed(2)}
                    </div>
                    
                    <div className="flex items-center gap-6 mt-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-neutral-light hover:border-primary flex items-center justify-center transition-colors"
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold min-w-[2ch] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-neutral-light hover:border-primary flex items-center justify-center transition-colors"
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => handleRemoveItem(item)}
                        className="text-neutral-light hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-lg font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </motion.div>
              ))}

              {/* Clear Cart Button */}
              <div className="flex justify-end pt-4">
                <button
                  onClick={clearCart}
                  className="text-neutral-light hover:text-red-500 transition-colors flex items-center gap-2"
                >
                  <TrashIcon className="w-5 h-5" />
                  Clear Cart
                </button>
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
                
                <div className="space-y-4 text-neutral">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    // Handle checkout logic
                    alert('Proceeding to checkout...');
                  }}
                  className="btn btn-primary w-full mt-8"
                >
                  Proceed to Checkout
                </button>

                <Link 
                  to="/shop"
                  className="block text-center text-neutral-light hover:text-primary transition-colors mt-4"
                >
                  Continue Shopping
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart; 