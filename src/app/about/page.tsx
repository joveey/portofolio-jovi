// src/app/about/page.tsx
'use client';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const skills = [
    'Next.js', 'React.js', 'Vue.js', 'TypeScript',
    'Laravel', 'PHP', 'MySQL', 'PostgreSQL',
    'Tailwind CSS', 'Git', 'RESTful API'
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">Tentang Saya</h1>

        {/* Profile Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Profil</h2>
          <p className="text-gray-300 leading-relaxed">
            Saya adalah mahasiswa Sistem Informasi di Universitas Nasional dengan antusiasme tinggi terhadap teknologi, analisis data, dan pengembangan sistem. Saya fokus memanfaatkan teknologi untuk mengembangkan solusi inovatif dan mengoptimalkan proses.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Pendidikan</h2>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold">Universitas Nasional</h3>
            <p className="text-cyan-400">Sistem Informasi (2022 - Sekarang)</p>
            <p className="text-gray-400">IPK: 3.76/4.00</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Pengalaman</h2>
           <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-bold">PT. AIS Teknologi</h3>
            <p className="text-cyan-400">IT Intern (Mei 2024 - Agu 2024)</p>
            <p className="text-gray-400">Terlibat dalam pengembangan dan pemeliharaan sistem internal perusahaan.</p>
          </div>
           <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold">Ritz Carlton Mega Kuningan</h3>
            <p className="text-cyan-400">Housekeeping Intern (Jan 2021 - Jun 2021)</p>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Keterampilan Teknis</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-700 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;