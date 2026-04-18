'use client';

import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    { emoji: '🏔️', title: 'Summit Views' },
    { emoji: '🌅', title: 'Sunrise Experience' },
    { emoji: '🌲', title: 'Forest Trails' },
    { emoji: '👥', title: 'Group Adventures' },
    { emoji: '📸', title: 'Photo Moments' },
    { emoji: '🌄', title: 'Mountain Landscape' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stunning moments from our Biokovo adventures. Each photo tells a story of unforgettable experiences.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              className="relative h-64 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            >
              {/* Image Placeholder */}
              <div className="w-full h-full flex flex-col items-center justify-center text-white relative">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {image.emoji}
                </span>

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                >
                  <p className="text-white font-bold text-lg text-center">{image.title}</p>
                </motion.div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/50 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">Follow us on social media for more updates and behind-the-scenes content</p>
          <div className="flex justify-center gap-4">
            {['Instagram', 'Facebook', 'YouTube'].map((platform) => (
              <motion.button
                key={platform}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 text-white px-6 py-2 rounded-lg font-medium transition-all"
              >
                {platform}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
