// src/components/ProjectsSection.tsx
'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Cuswash - Aplikasi Booking Cuci Mobil',
    description: 'Aplikasi berbasis Next.js untuk pemesanan layanan cuci mobil online, lengkap dengan integrasi pembayaran Midtrans.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    link: 'https://github.com/joveey/cuswash',
    liveLink: 'https://cuswash.vercel.app/'
  },
  {
    title: 'Website Pendaftaran Event',
    description: 'Sebuah website yang dibuat dengan Next.js untuk pendaftaran peserta pada sebuah acara atau event.',
    tech: ['Next.js', 'TypeScript', 'Prisma'],
    link: 'https://github.com/joveey/event-web',
    liveLink: 'https://jagoevent.vercel.app/'
  },
  {
    title: 'E-commerce Sederhana',
    description: 'Proyek e-commerce yang dibangun menggunakan framework Laravel, dengan fitur-fitur dasar seperti manajemen produk, keranjang, dan checkout.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    link: 'https://github.com/joveey/e-commerce',
    liveLink: null // Tidak ada live link untuk proyek ini
  },
   {
    title: 'Sistem BK Online',
    description: 'Sistem informasi untuk Bimbingan Konseling (BK) di sekolah, dibangun dengan backend Laravel (API) dan frontend Vue.js.',
    tech: ['Laravel', 'Vue.js', 'API'],
    link: 'https://github.com/joveey/sistem-bk-online',
    liveLink: null // Tidak ada live link untuk proyek ini
  }
];

const ProjectCard = ({ title, description, tech, link, liveLink }: any) => {
  return (
    <motion.div
      className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col shadow-card border border-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-white font-bold text-2xl">{title}</h3>
      <p className="mt-2 text-secondary text-sm flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2 my-4">
        {tech.map((t: string) => (
          <span key={t} className="text-purple-300 text-xs font-semibold">#{t}</span>
        ))}
      </div>
      
      <div className="flex space-x-6 mt-auto pt-4 border-t border-gray-800/50">
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-white transition-colors duration-300">
            <FaGithub /> GitHub
        </a>
        {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-white transition-colors duration-300">
                <FaExternalLinkAlt /> Live Demo
            </a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-24 px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-secondary text-center">My Work</p>
          <h2 className="text-white font-black md:text-5xl sm:text-4xl text-3xl text-center">
            Proyek Saya.
          </h2>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;