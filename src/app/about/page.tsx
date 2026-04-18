'use client';

import { motion } from 'framer-motion';
import Testimonials from '@/components/Testimonials';
import agency from '@/data/agency.json';

export default function AboutPage() {
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
            About Safari Makarska
          </h1>
          <p className="text-lg text-gray-600">
            Learn about our passion for mountain adventures and why thousands of guests choose us for their Biokovo experience.
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl space-y-12">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {agency.agency.aboutText}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded over a decade ago, Safari Makarska was born from a deep love for Mount Biokovo and a desire to share its natural wonders with the world. Today, we are proud to have guided thousands of adventurers from every corner of the globe.
            </p>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Expert Guides',
                  description: 'Our guides are certified, experienced, and passionate about sharing the beauty of Biokovo.',
                  icon: '👨‍🏫',
                },
                {
                  title: 'Safety First',
                  description: 'We prioritize your safety with professional equipment, training, and careful planning.',
                  icon: '🛡️',
                },
                {
                  title: 'Small Groups',
                  description: 'We keep groups small to ensure personalized attention and an intimate experience.',
                  icon: '👥',
                },
                {
                  title: 'Stunning Views',
                  description: 'Experience breathtaking panoramic views of the Dalmatian coast from the summit.',
                  icon: '🌄',
                },
                {
                  title: 'Flexible Options',
                  description: 'From easy walks to challenging hikes, we have something for everyone.',
                  icon: '🗺️',
                },
                {
                  title: 'Memorable Experiences',
                  description: 'We create unforgettable moments that you\'ll cherish for a lifetime.',
                  icon: '📸',
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <p className="text-4xl mb-3">{feature.icon}</p>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our team is composed of passionate mountain guides, safety professionals, and adventure enthusiasts dedicated to creating the perfect experience for every guest. Each team member brings years of experience and a genuine love for Mount Biokovo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </main>
  );
}
