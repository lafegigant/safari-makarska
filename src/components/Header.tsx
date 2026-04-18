'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Packages', href: '/packages' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const headerVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { duration: 0.5 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="sticky top-0 z-50 bg-white shadow-lg"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="font-bold text-xl text-gray-800">Safari Makarska</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Link href={item.href}>
                <motion.a
                  whileHover={{ color: '#f59e0b' }}
                  className="text-gray-700 font-medium transition-colors"
                >
                  {item.label}
                </motion.a>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.05 }} className="hidden md:block">
          <Link href="/contact">
            <motion.button
              whileHover={{ backgroundColor: '#d97706' }}
              className="bg-amber-500 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Book Now
            </motion.button>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
          whileTap={{ scale: 0.95 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={isOpen ? { rotate: i === 1 ? 45 : 0 } : { rotate: 0 }}
              className="w-6 h-0.5 bg-gray-800"
            />
          ))}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-gray-50"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.a
                whileHover={{ x: 10 }}
                className="text-gray-700 font-medium block"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            </Link>
          ))}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-amber-500 text-white px-6 py-2 rounded-lg font-medium w-full"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}
