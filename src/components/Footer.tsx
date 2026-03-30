'use client';

import { motion } from 'framer-motion';
import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/joveey',
      label: 'GitHub',
      color: 'hover:text-slate-900',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/jovi-syawal',
      label: 'LinkedIn',
      color: 'hover:text-sky-700',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:jovisywl@gmail.com',
      label: 'Email',
      color: 'hover:text-slate-900',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-10 md:grid-cols-3 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold text-slate-950">
              Muhammad Jovi Syawal Difa
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
              Junior Web Developer portfolio focused on practical, recruiter-friendly
              presentation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition ${social.color} hover:border-slate-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.3 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <motion.button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to Top</span>
              <FaArrowUp className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-slate-200 py-6"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600">
              &copy; {new Date().getFullYear()} Muhammad Jovi Syawal Difa. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Available for junior web development roles.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
