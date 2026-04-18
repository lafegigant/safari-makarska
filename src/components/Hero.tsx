'use client';

import { motion } from 'framer-motion';

export default function Hero() {

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-10 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div initial="hidden" animate="visible" className="space-y-6">
            <motion.h1
              custom={0}
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Discover the Magic of <span className="text-amber-500">Biokovo</span>
            </motion.h1>

            <motion.p
              custom={1}
              variants={textVariants}
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              Experience unforgettable hiking adventures on Mount Biokovo. Expert guides, breathtaking views, and memories that last a lifetime.
            </motion.p>

            <motion.div
              custom={2}
              variants={textVariants}
              className="flex gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all"
              >
                Start Your Adventure
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg font-bold text-lg transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div custom={3} variants={textVariants} className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: '🏔️', text: 'Expert Guides' },
                { icon: '🌅', text: 'Stunning Views' },
                { icon: '👥', text: 'Small Groups' },
                { icon: '⭐', text: 'Top Rated' },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-3xl">{feature.icon}</span>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-full"
          >
            <div className="relative w-full h-full bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl shadow-2xl overflow-hidden">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-full h-full bg-gradient-to-t from-orange-400 to-amber-200 flex items-center justify-center"
              >
                <span className="text-9xl">⛰️</span>
              </motion.div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 right-10 bg-white px-6 py-4 rounded-lg shadow-lg"
            >
              <p className="font-bold text-gray-800">4.9 ⭐</p>
              <p className="text-sm text-gray-600">500+ Reviews</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute bottom-10 left-10 bg-white px-6 py-4 rounded-lg shadow-lg"
            >
              <p className="font-bold text-gray-800">1000+</p>
              <p className="text-sm text-gray-600">Happy Adventurers</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <p className="text-gray-600 font-medium mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-gray-800 rounded-full flex justify-center items-start pt-2">
          <motion.div className="w-1 h-2 bg-gray-800 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
