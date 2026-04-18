'use client';

import { motion } from 'framer-motion';
import tours from '@/data/tours.json';

interface TourCard {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  difficulty: string;
  image: string;
  highlights: string[];
  groupSize: string;
}

export default function Tours() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
            Our Tour Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore Mount Biokovo with our carefully curated hiking packages designed for all
            skill levels. Each tour offers unforgettable experiences and stunning views.
          </p>
        </motion.div>

        {/* Tour Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {(tours.tours as TourCard[]).map((tour) => (
            <motion.div
              key={tour.id}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)' }}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-amber-400 to-orange-600 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-full h-full flex items-center justify-center text-6xl"
                >
                  ⛰️
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{tour.title}</h3>
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tour.difficulty}
                  </motion.span>
                </div>

                <p className="text-gray-600 mb-4">{tour.description}</p>

                {/* Details */}
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <p>⏱️ Duration: {tour.duration}</p>
                  <p>👥 Group Size: {tour.groupSize}</p>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Includes:</p>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                    {tour.highlights.slice(0, 4).map((highlight, i) => (
                      <li key={i}>✓ {highlight}</li>
                    ))}
                  </ul>
                </div>

                {/* Price and Button */}
                <div className="flex justify-between items-center border-t pt-4">
                  <div>
                    <p className="text-sm text-gray-600">From</p>
                    <p className="text-2xl font-bold text-amber-600">${tour.price}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-amber-500 text-white px-6 py-2 rounded-lg font-medium transition-all"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
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
          <p className="text-gray-600 mb-4">Looking for a custom tour? We can create packages tailored to your needs.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-amber-500 text-amber-500 px-8 py-3 rounded-lg font-bold transition-all"
          >
            Customize Your Tour
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
