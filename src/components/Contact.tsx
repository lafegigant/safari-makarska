'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import agency from '@/data/agency.json';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  tourInterest: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form Data:', data);
    alert('Thank you for your message! We will contact you soon.');
    reset();
  };

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
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions? Ready to book? Contact us today and start planning your Biokovo adventure!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-2xl">
                📍
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600">{agency.agency.address}</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-2xl">
                📞
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">{agency.agency.phone}</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-2xl">
                ✉️
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">{agency.agency.email}</p>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="font-bold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Monday - Friday: {agency.agency.hours.monday}</p>
                <p>Saturday: {agency.agency.hours.saturday}</p>
                <p>Sunday: {agency.agency.hours.sunday}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <motion.div whileHover={{ y: -2 }}>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
            </motion.div>

            <motion.div whileHover={{ y: -2 }}>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
            </motion.div>

            <motion.div whileHover={{ y: -2 }}>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Phone
              </label>
              <input
                type="tel"
                {...register('phone')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                placeholder="Your phone number"
              />
            </motion.div>

            <motion.div whileHover={{ y: -2 }}>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Interested Tour
              </label>
              <select
                {...register('tourInterest')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              >
                <option>Select a tour</option>
                <option>Classic Biokovo Adventure</option>
                <option>Summit Explorer</option>
                <option>Photography Expedition</option>
                <option>Sunset Trekking</option>
              </select>
            </motion.div>

            <motion.div whileHover={{ y: -2 }}>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Message
              </label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                rows={4}
                placeholder="Your message..."
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-amber-500 text-white px-6 py-3 rounded-lg font-bold transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
