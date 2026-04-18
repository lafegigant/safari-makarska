'use client';

import { motion } from 'framer-motion';
import Tours from '@/components/Tours';

export default function PackagesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-96 bg-gradient-to-b from-amber-50 to-white flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Tour Packages
          </h1>
          <p className="text-lg text-gray-600">
            Choose from our carefully curated selection of mountain adventures, all designed to provide unforgettable experiences on Mount Biokovo.
          </p>
        </motion.div>
      </section>

      {/* Tours Grid */}
      <Tours />

      {/* Additional Info */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Something Custom?</h2>
            <p className="text-gray-600 mb-6">
              All our tours can be customized to meet your specific needs and preferences. Whether you&apos;re a beginner or an experienced hiker, we can create the perfect adventure for you.
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center gap-3">
                <span className="text-amber-500 font-bold">✓</span>
                Custom difficulty levels
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-500 font-bold">✓</span>
                Flexible group sizes
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-500 font-bold">✓</span>
                Special date arrangements
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-500 font-bold">✓</span>
                Corporate team building
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-500 font-bold">✓</span>
                Photography-focused tours
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-white px-8 py-3 rounded-lg font-bold"
            >
              Contact Us for Custom Tours
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
