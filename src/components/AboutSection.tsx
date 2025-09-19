// src/components/AboutSection.tsx
'use client';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Next.js', level: 75, color: 'from-blue-500 to-blue-600' },
  { name: 'Vue.js', level: 80, color: 'from-emerald-500 to-slate-700' },
  { name: 'PostgreSQL', level: 75, color: 'from-blue-600 to-blue-700' },
  { name: 'Laravel', level: 85, color: 'from-red-500 to-red-600' },
  { name: 'MySQL', level: 80, color: 'from-orange-500 to-orange-600' },
  { name: 'Tailwind CSS', level: 80, color: 'from-teal-500 to-teal-600' },
  { name: 'Git', level: 85, color: 'from-gray-500 to-gray-600' }
];

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-secondary mb-2">Pengenalan</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4">
            Tentang <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">Saya</span>
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-tertiary/80 to-primary/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">🎓 Background Pendidikan</h4>
                <p className="text-secondary text-base sm:text-lg leading-relaxed">
                  Mahasiswa <span className="text-accent font-semibold">Sistem Informasi</span> yang berfokus pada pengembangan aplikasi web modern. 
                  Saya memiliki passion yang kuat dalam <span className="text-white">full-stack development</span> dan selalu eager untuk mempelajari teknologi terbaru.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">💼 Pengalaman & Fokus</h4>
                <p className="text-secondary text-base sm:text-lg leading-relaxed">
                  Dengan pengalaman lebih dari <span className="text-accent font-semibold">2 tahun</span> dalam coding, saya telah menguasai berbagai teknologi 
                  dari frontend hingga backend. Saya sangat menikmati proses mengubah ide kompleks menjadi aplikasi yang 
                  <span className="text-white font-semibold"> fungsional</span>, <span className="text-white font-semibold">user-friendly</span>, dan <span className="text-white font-semibold">scalable</span>.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">🚀 Visi & Misi</h4>
                <p className="text-secondary text-base sm:text-lg leading-relaxed">
                  Saya percaya bahwa teknologi harus <span className="text-accent">memudahkan hidup manusia</span>. 
                  Setiap project yang saya kerjakan adalah opportunity untuk menciptakan sesuatu yang bermakna dan memberikan 
                  <span className="text-white font-semibold"> impact positif</span> bagi user dan stakeholders.
                </p>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {['🚀 Fast Learner', '💡 Creative Problem Solver', '🎨 UI/UX Enthusiast', '📱 Mobile-First Design', '⚡ Performance Focused', '🔧 Clean Code Advocate'].map((trait, index) => (
                <motion.div
                  key={trait}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-accent/10 border border-accent/30 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm text-center"
                >
                  {trait}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-tertiary/80 to-primary/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 sm:p-8 shadow-2xl order-1 lg:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Keterampilan Teknis</h3>
            <div className="space-y-4 sm:space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                    <span className="text-secondary text-xs sm:text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;