'use client';

import { motion } from 'framer-motion';
import Gallery from '@/components/Gallery';

export default function GalleryPage() {
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
            Gallery
          </h1>
          <p className="text-lg text-gray-600">
            Explore the stunning beauty of Mount Biokovo and the unforgettable moments our guests have experienced.
          </p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <Gallery />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Create Your Own Memory?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
              Join us on an unforgettable adventure and become part of the Safari Makarska family. Your Biokovo experience awaits!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-white px-8 py-3 rounded-lg font-bold text-lg"
            >
              Book Your Tour Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
