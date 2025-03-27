import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartItemsCount } = useCart();

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

  return (
    <>
      {/* Background overlay that extends below the navbar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        className="fixed top-0 left-0 right-0 h-48 bg-white shadow-md z-40 transition-opacity duration-300"
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-40">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/TheHanger/images/the hanger.png"
                alt="TheHanger Logo"
                className="h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-12">
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
              <Link
                to="/cart"
                className="relative p-3 hover:text-primary transition-colors"
              >
                <ShoppingBagIcon className="w-8 h-8" />
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">
                    {getCartItemsCount()}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-8 h-8" />
                ) : (
                  <Bars3Icon className="w-8 h-8" />
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
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4"
            >
              <div className="container mx-auto px-4 flex flex-col space-y-4">
                <MobileNavLink to="/" current={location.pathname}>
                  Home
                </MobileNavLink>
                <MobileNavLink to="/shop" current={location.pathname}>
                  Shop
                </MobileNavLink>
                <MobileNavLink to="/about" current={location.pathname}>
                  About
                </MobileNavLink>
                <MobileNavLink to="/contact" current={location.pathname}>
                  Contact
                </MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-40" />
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

const MobileNavLink = ({ to, current, children }) => (
  <Link
    to={to}
    className={`text-lg font-medium py-2 ${
      current === to ? 'text-primary' : 'text-gray-800 hover:text-primary'
    }`}
  >
    {children}
  </Link>
);

export default Navbar; 