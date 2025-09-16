// src/components/AboutSection.tsx
'use client';
import { motion } from 'framer-motion';

const skills = [
  'Next.js', 'React.js', 'TypeScript', 'Laravel', 
  'PHP', 'MySQL', 'Tailwind CSS', 'Git'
];

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Tentang <span className="text-accent">Saya</span>
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-tertiary border border-gray-800 rounded-2xl p-8 md:p-12 shadow-card backdrop-blur-sm"
        >
          <p className='text-secondary text-lg leading-relaxed text-center max-w-3xl mx-auto'>
            Saya adalah mahasiswa Sistem Informasi yang bersemangat dalam menciptakan solusi digital yang efisien dan elegan. Dengan pondasi kuat dalam pengembangan web, saya menikmati proses mengubah ide kompleks menjadi aplikasi yang fungsional dan ramah pengguna.
          </p>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center text-white mb-6">Keterampilan Teknis</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-primary/50 text-white px-5 py-2 rounded-lg text-sm font-medium border border-gray-700"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;