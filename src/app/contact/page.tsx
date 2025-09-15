// src/app/contact/page.tsx
'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-cyan-400" size={24} />,
      label: 'Email',
      value: 'jovisywl@gmail.com',
      href: 'mailto:jovisywl@gmail.com',
    },
    {
      icon: <FaPhone className="text-cyan-400" size={24} />,
      label: 'Telepon',
      value: '+62 851-5663-4341',
      href: 'tel:+6285156634341',
    },
    {
       icon: <FaLinkedin className="text-cyan-400" size={24} />,
       label: 'LinkedIn',
       value: 'linkedin.com/in/jovi-syawal',
       href: 'https://www.linkedin.com/in/jovi-syawal',
    },
    {
      icon: <FaMapMarkerAlt className="text-cyan-400" size={24} />,
      label: 'Alamat',
      value: 'Jl. Rancho Indah No. 20B, Jakarta Selatan',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">Hubungi Saya</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <p className="text-center text-lg text-gray-300 mb-8">
          Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang lainnya.
        </p>
        <div className="space-y-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center space-x-4"
            >
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold">{item.label}</h3>
                {item.href ? (
                   <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                     {item.value}
                   </a>
                ) : (
                  <p className="text-gray-300">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;