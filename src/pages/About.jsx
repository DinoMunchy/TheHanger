import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img
          src="/images/store-interior.jpg"
          alt="TheHanger Store Interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl md:text-2xl">A journey of style and elegance</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-6">Welcome to TheHanger</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2024, TheHanger emerged from a passion for bringing high-end fashion to every woman's wardrobe. Our journey began with a simple idea: to create a shopping experience that combines luxury, comfort, and accessibility.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we're proud to offer a carefully curated collection of women's clothing, accessories, and footwear. Our store is more than just a place to shop – it's a destination where style meets sophistication.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that every woman deserves to feel confident and beautiful in what she wears. That's why we carefully select each piece in our collection, ensuring the highest quality and the latest trends.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="/images/store-interior.jpg"
              alt="TheHanger Store Interior"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality, ensuring each piece meets our high standards of craftsmanship and durability.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Style</h3>
              <p className="text-gray-600">
                Our collections are carefully curated to bring you the latest trends while maintaining timeless elegance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to sustainable practices, from sourcing materials to packaging and shipping.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 