import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">About The Hanger</h1>
          <p className="text-xl text-gray-600">
            We&apos;re passionate about bringing you the latest trends in women&apos;s fashion while maintaining timeless elegance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://source.unsplash.com/random/800x600?boutique"
              alt="Our Store"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, The Hanger has been at the forefront of women&apos;s fashion, offering carefully curated collections that blend contemporary trends with classic elegance.
            </p>
            <p className="text-gray-600">
              Our mission is to empower women through fashion, providing them with high-quality pieces that make them feel confident and beautiful in their own skin.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Quality',
              description: 'We carefully select each piece to ensure the highest quality materials and craftsmanship.',
              icon: '✨',
            },
            {
              title: 'Style',
              description: 'Our collections are curated to reflect the latest trends while maintaining timeless appeal.',
              icon: '👗',
            },
            {
              title: 'Sustainability',
              description: 'We&apos;re committed to sustainable fashion practices and ethical manufacturing.',
              icon: '🌱',
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About; 