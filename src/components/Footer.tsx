'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import agency from '@/data/agency.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Packages', href: '/packages' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
  ];

  const serviceLinks = [
    { label: 'Hiking Tours', href: '#' },
    { label: 'Group Adventures', href: '#' },
    { label: 'Custom Tours', href: '#' },
    { label: 'Photography Tours', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="px-4 py-16">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          >
            {/* About */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center font-bold">
                  S
                </div>
                <span className="font-bold text-lg">Safari Makarska</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {agency.agency.description}
              </p>
              <div className="flex gap-3">
                {[
                  { icon: '📘', link: agency.agency.socialLinks.facebook },
                  { icon: '📷', link: agency.agency.socialLinks.instagram },
                  { icon: '📺', link: agency.agency.socialLinks.youtube },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-lg hover:bg-amber-500 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    whileHover={{ x: 5 }}
                  >
                    <Link href={link.href}>
                      <span className="text-gray-400 hover:text-amber-500 transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 5 }}
                  >
                    <a href={link.href} className="text-gray-400 hover:text-amber-500 transition-colors cursor-pointer">
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <p className="font-medium text-white mb-1">📍 Address</p>
                  <p>{agency.agency.address}</p>
                </li>
                <li>
                  <p className="font-medium text-white mb-1">📞 Phone</p>
                  <p>{agency.agency.phone}</p>
                </li>
                <li>
                  <p className="font-medium text-white mb-1">✉️ Email</p>
                  <p>{agency.agency.email}</p>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="border-t border-gray-800 my-8"
          />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
          >
            <p>&copy; {currentYear} Safari Makarska. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#"><span className="hover:text-amber-500 transition-colors cursor-pointer">Privacy Policy</span></Link>
              <Link href="#"><span className="hover:text-amber-500 transition-colors cursor-pointer">Terms of Service</span></Link>
              <Link href="#"><span className="hover:text-amber-500 transition-colors cursor-pointer">Contact Us</span></Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
