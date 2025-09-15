// src/app/projects/page.tsx
'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Cuswash - Aplikasi Booking Cuci Mobil',
    description: 'Aplikasi berbasis Next.js untuk melakukan pemesanan layanan cuci mobil secara online, lengkap dengan integrasi pembayaran Midtrans.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'Midtrans'],
    link: 'https://github.com/joveey/cuswash'
  },
  {
    title: 'Website Pendaftaran Event',
    description: 'Sebuah website yang dibuat dengan Next.js untuk pendaftaran peserta pada sebuah acara atau event.',
    tech: ['Next.js', 'TypeScript', 'Prisma'],
    link: 'https://github.com/joveey/event-web'
  },
  {
    title: 'E-commerce Sederhana',
    description: 'Proyek e-commerce yang dibangun menggunakan framework Laravel, dengan fitur-fitur dasar seperti manajemen produk, keranjang, dan checkout.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    link: 'https://github.com/joveey/e-commerce'
  },
   {
    title: 'Sistem BK Online',
    description: 'Sistem informasi untuk Bimbingan Konseling (BK) di sekolah, dibangun dengan backend Laravel (API) dan frontend Vue.js.',
    tech: ['Laravel', 'Vue.js', 'API'],
    link: 'https://github.com/joveey/sistem-bk-online'
  }
];

const ProjectCard = ({ title, description, tech, link }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-2xl font-bold mb-2 text-cyan-400">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t: string) => (
            <span key={t} className="bg-gray-700 text-cyan-200 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 self-start"
      >
        Lihat di GitHub
      </a>
    </motion.div>
  );
};


const ProjectsPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">Proyek Saya</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;