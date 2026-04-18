'use client';

import { motion } from 'framer-motion';
import testimonials from '@/data/testimonials.json';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string;
  text: string;
}

export default function Testimonials() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join thousands of satisfied adventurers who have experienced the magic of Mount Biokovo with Safari Makarska.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {(testimonials.testimonials as Testimonial[]).map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-xl border-l-4 border-amber-500 shadow-lg hover:shadow-xl transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-2xl"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mt-16 text-center"
        >
          {[
            { number: '1000+', label: 'Happy Guests' },
            { number: '4.9★', label: 'Rating' },
            { number: '10+', label: 'Years Experience' },
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <p className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">{stat.number}</p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
