// src/app/page.tsx
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hai, Saya <span className="text-cyan-400">Jovi Syawal</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8">
          Seorang Mahasiswa Sistem Informasi dengan minat pada Pengembangan Web.
        </p>
        <Link
          href="/projects"
          className="bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-colors duration-300"
        >
          Lihat Proyek Saya
        </Link>
      </motion.div>
    </div>
  );
}