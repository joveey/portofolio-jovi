// src/components/ProjectsSection.tsx
'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { useState } from 'react';

const projects = [
  {
    title: 'Cuswash - Aplikasi Booking Cuci Mobil',
    description: 'Aplikasi berbasis Next.js untuk pemesanan layanan cuci mobil online, lengkap dengan integrasi pembayaran Midtrans dan sistem manajemen booking yang real-time.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'Midtrans'],
    link: 'https://github.com/joveey/cuswash',
    liveLink: 'https://cuswash.vercel.app/',
    featured: true,
    image: '🚗',
    status: 'Live'
  },
  {
    title: 'Website Pendaftaran Event',
    description: 'Platform pendaftaran event yang user-friendly dengan sistem validasi lengkap dan dashboard admin untuk mengelola peserta secara efisien.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    link: 'https://github.com/joveey/event-web',
    liveLink: 'https://jagoevent.vercel.app/',
    featured: true,
    image: '🎟️',
    status: 'Live'
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce dengan fitur lengkap: manajemen produk, sistem keranjang belanja, checkout process, dan payment gateway integration.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
    link: 'https://github.com/joveey/e-commerce',
    liveLink: null,
    featured: false,
    image: '🛒',
    status: 'Development'
  },
  {
    title: 'Sistem BK Online',
    description: 'Comprehensive sistem Bimbingan Konseling untuk sekolah dengan REST API architecture, memungkinkan komunikasi yang efektif antara siswa dan konselor.',
    tech: ['Laravel API', 'Vue.js', 'MySQL', 'JWT Auth'],
    link: 'https://github.com/joveey/sistem-bk-online',
    liveLink: null,
    featured: false,
    image: '🏫',
    status: 'Completed'
  }
];

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  liveLink: string | null;
  featured: boolean;
  image: string;
  status: string;
}

const ProjectCard = ({ title, description, tech, link, liveLink, featured, image, status }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-gradient-to-br from-tertiary/80 to-primary/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl group w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {featured && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-purple-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 z-10">
          <FaStar className="w-2 h-2 sm:w-3 sm:h-3" />
          Featured
        </div>
      )}

      <div className="p-6 sm:p-8 h-full flex flex-col">
        <div className="flex items-center gap-3 sm:gap-4 mb-4">
          <div className="text-3xl sm:text-4xl">{image}</div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold text-lg sm:text-xl group-hover:text-accent transition-colors duration-300 truncate">
              {title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                status === 'Live' ? 'bg-green-500' :
                status === 'Development' ? 'bg-yellow-500' :
                'bg-blue-500'
              }`} />
              <span className="text-secondary text-xs sm:text-sm">{status}</span>
            </div>
          </div>
        </div>
        
        <p className="text-secondary text-sm sm:text-base leading-relaxed flex-grow mb-6">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t: string) => (
            <motion.span 
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-accent/10 border border-accent/30 text-accent px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex-shrink-0"
            >
              {t}
            </motion.span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
          <div className="flex space-x-3 sm:space-x-4">
            <motion.a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 sm:gap-2 text-secondary hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">Code</span>
            </motion.a>
            {liveLink && (
              <motion.a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1 sm:gap-2 text-secondary hover:text-accent transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Live Demo</span>
              </motion.a>
            )}
          </div>
          
          <motion.div
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-6 sm:w-8 sm:h-8 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300 flex-shrink-0"
          >
            <FaExternalLinkAlt className="w-2 h-2 sm:w-3 sm:h-3 text-accent" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-secondary mb-2">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
            Proyek <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">Saya</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-sm sm:text-base px-4">
            Berikut adalah beberapa proyek yang telah saya kerjakan, mulai dari aplikasi web full-stack 
            hingga sistem informasi yang kompleks.
          </p>
        </motion.div>

        {/* Featured Projects - Stack on mobile, grid on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {projects.filter(project => project.featured).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* Regular Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.filter(project => !project.featured).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-secondary mb-6 text-sm sm:text-base px-4">
            Tertarik dengan proyek-proyek saya? Mari berkolaborasi!
          </p>
          <motion.a
            href="#contact"
            className="inline-block bg-gradient-to-r from-accent to-purple-600 hover:from-purple-600 hover:to-accent text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-glow text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mari Bekerja Sama
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;