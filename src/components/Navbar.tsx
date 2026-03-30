'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Resume', href: '#resume' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 18);

      const sections = navLinks.map((link) => document.getElementById(link.href.substring(1)));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].href.substring(1));
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 88;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed z-50 w-full transition-all duration-300 ${
        hasScrolled
          ? 'border-b border-slate-200 bg-white/88 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => scrollToSection('#home')}
              className="text-left transition hover:text-sky-700"
            >
              <span className="block text-base font-semibold tracking-tight text-slate-950 sm:text-lg">
                <span className="sm:hidden">Muhammad Jovi</span>
                <span className="hidden sm:inline">Muhammad Jovi Syawal Difa</span>
              </span>
              <span className="mt-0.5 hidden text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500 sm:block">
                Junior Web Developer
              </span>
            </button>
          </motion.div>

          <div className="hidden lg:block">
            <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition ${
                    activeSection === link.href.substring(1)
                      ? 'text-slate-950'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-slate-100"
                      layoutId="active-pill"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 text-slate-500 transition hover:text-slate-950"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                {isOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden"
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.08, duration: 0.2 }}
              className={`block w-full rounded-2xl px-4 py-3 text-left text-base font-medium transition ${
                activeSection === link.href.substring(1)
                  ? 'border border-slate-200 bg-slate-100 text-slate-950'
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              {link.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
