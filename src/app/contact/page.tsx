'use client';

import { motion } from 'framer-motion';
import Contact from '@/components/Contact';

export default function ContactPage() {
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
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Have questions about our tours? Ready to book your adventure? Get in touch with our team today!
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
