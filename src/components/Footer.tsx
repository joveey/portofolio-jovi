// src/components/Footer.tsx
'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/joveey',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/jovi-syawal',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:jovisywl@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full mt-24 bg-gradient-to-t from-primary via-tertiary to-transparent border-t border-gray-800/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gPGcgZmlsbD0iIzkxNWVmZiIgZmlsbC1vcGFjaXR5PSIwLjEiPiA8cGF0aCBkPSJtMzYgMzQgdjItaDJ2LTJoLTJ6bTAtNGgtMnY2aDJ2LTZ6bTAtNGgtMnYyaDJ2LTJ6bTItNGgtMnY2aDJ2LTZ6Ii8+IDwvZz4gPC9nPiA8L3N2Zz4=')] opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left: Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent mb-2">
                Jovi.
              </h3>
              <p className="text-secondary text-sm max-w-sm">
                Menciptakan solusi digital yang elegan dan fungsional untuk masa depan yang lebih baik.
              </p>
            </motion.div>

            {/* Center: Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-primary/50 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:border-accent/50 hover:bg-accent/10`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right: Back to Top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center md:text-right"
            >
              <motion.button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors duration-300 text-sm"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Kembali ke Atas</span>
                <FaArrowUp className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="py-6 border-t border-gray-800/50"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-secondary text-sm">
              &copy; {new Date().getFullYear()} Muhammad Jovi Syawal Difa. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-secondary text-sm">
              <span>Dibuat dengan</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-red-500 w-4 h-4" />
              </motion.div>
              <span>menggunakan Next.js</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r from-accent/10 to-purple-600/10 rounded-full blur-3xl transform -translate-x-16 translate-y-16" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-l from-blue-500/10 to-accent/10 rounded-full blur-3xl transform translate-x-16 translate-y-16" />
    </footer>
  );
};

export default Footer;