import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Dresses',
    image: 'https://source.unsplash.com/random/800x600?dress',
    description: 'Elegant dresses for every occasion'
  },
  {
    name: 'Accessories',
    image: 'https://source.unsplash.com/random/800x600?jewelry',
    description: 'Complete your look with our accessories'
  },
  {
    name: 'Shoes',
    image: 'https://source.unsplash.com/random/800x600?womens-shoes',
    description: 'Step out in style with our footwear'
  },
  {
    name: 'Outerwear',
    image: 'https://source.unsplash.com/random/800x600?womens-coat',
    description: 'Stay warm and fashionable'
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <img
          src="https://source.unsplash.com/random/1920x1080?womens-clothing-store"
          alt="Women's Fashion Store"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Welcome to The Hanger
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8"
            >
              Discover our latest collection of women's fashion
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/shop"
                className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-100 transition-colors"
              >
                Shop Now
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm">{category.description}</p>
                </div>
              </div>
              <Link to={`/shop?category=${category.name.toLowerCase()}`} className="absolute inset-0" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">Stay updated with our latest collections and exclusive offers</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home; 