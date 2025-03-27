import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBagIcon, Bars3Icon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartItemsCount, cartItems } = useCart();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {/* Background overlay that extends below the navbar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        className="fixed top-0 left-0 right-0 h-12 bg-white shadow-md z-40 transition-opacity duration-300"
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/TheHanger/images/the hanger.png"
                alt="TheHanger Logo"
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/" current={location.pathname}>
                Home
              </NavLink>
              <NavLink to="/shop" current={location.pathname}>
                Shop
              </NavLink>
              <NavLink to="/about" current={location.pathname}>
                About
              </NavLink>
              <NavLink to="/contact" current={location.pathname}>
                Contact
              </NavLink>
            </div>

            <div className="flex items-center space-x-4">
              {/* Cart Link */}
              <Link to="/cart" className="relative flex items-center">
                <ShoppingBagIcon className="h-5 w-5 text-gray-700 hover:text-pink-600 transition-colors" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              {/* User Menu */}
              <div className="relative flex items-center">
                <button
                  onClick={toggleUserMenu}
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  <UserIcon className="h-5 w-5" />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-md shadow-lg py-1">
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Create Account
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={toggleMenu}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-2"
            >
              <div className="container mx-auto px-4 flex flex-col space-y-2">
                <MobileNavLink to="/" current={location.pathname} onClick={toggleMenu}>
                  Home
                </MobileNavLink>
                <MobileNavLink to="/shop" current={location.pathname} onClick={toggleMenu}>
                  Shop
                </MobileNavLink>
                <MobileNavLink to="/about" current={location.pathname} onClick={toggleMenu}>
                  About
                </MobileNavLink>
                <MobileNavLink to="/contact" current={location.pathname} onClick={toggleMenu}>
                  Contact
                </MobileNavLink>
                <MobileNavLink to="/cart" current={location.pathname} onClick={toggleMenu}>
                  Cart
                  {cartItemCount > 0 && (
                    <span className="ml-2 bg-pink-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-12"></div>
    </>
  );
};

const NavLink = ({ to, current, children }) => (
  <Link
    to={to}
    className={`relative font-medium text-lg transition-colors ${
      current === to ? 'text-primary' : 'hover:text-primary'
    }`}
  >
    {children}
    {current === to && (
      <motion.div
        layoutId="underline"
        className="absolute left-0 right-0 h-0.5 bg-primary -bottom-2"
      />
    )}
  </Link>
);

const MobileNavLink = ({ to, current, children, onClick }) => (
  <Link
    to={to}
    className={`text-lg font-medium py-2 ${
      current === to ? 'text-primary' : 'text-gray-800 hover:text-primary'
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar; 