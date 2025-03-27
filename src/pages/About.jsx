import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-pink-100 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About The Hanger</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your premier destination for curated fashion that empowers and inspires.
          </p>
        </motion.div>

        {/* Store Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop"
              alt="Our Store Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-4xl font-bold">Welcome to Our Store</h2>
            </div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded with a passion for fashion and a commitment to quality, The Hanger has been 
              serving fashion enthusiasts since 2024. We believe in offering carefully curated 
              collections that blend timeless elegance with contemporary trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="text-gray-600 space-y-3">
              <li>• Quality and attention to detail in every piece</li>
              <li>• Sustainable and ethical fashion practices</li>
              <li>• Exceptional customer service and satisfaction</li>
              <li>• Supporting and empowering our community</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 