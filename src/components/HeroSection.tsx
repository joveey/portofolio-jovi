// src/components/HeroSection.tsx
'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';

const HeroSection = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <section id="home" className="relative w-full h-screen mx-auto flex items-center overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-accent via-purple-600 to-blue-500 p-1 mb-6 sm:mb-8">
                            <div className="w-full h-full rounded-full bg-tertiary flex items-center justify-center">
                                <span className="text-2xl sm:text-4xl font-bold text-white">J</span>
                            </div>
                        </div>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
                            Hai, Saya{' '}
                            <span className="bg-gradient-to-r from-accent via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Muhammad Jovi Syawal Difa
                            </span>
                        </h1>
                        
                        <div className="text-lg sm:text-xl md:text-2xl text-secondary mb-6 sm:mb-8 h-12 sm:h-16">
                            <span>Full Stack Developser</span>
                        </div>
                        
                        <p className="text-base sm:text-lg text-secondary max-w-2xl mb-8 sm:mb-12 leading-relaxed px-4">
                            Saya adalah mahasiswa Sistem Informasi yang bersemangat menciptakan 
                            solusi digital yang elegan, efisien, dan berdampak positif.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="home" className="relative w-full h-screen mx-auto flex items-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-tertiary to-primary opacity-50" />
            
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-accent/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>
            
            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-accent via-purple-600 to-blue-500 p-1 mb-6 sm:mb-8"
                    >
                        <div className="w-full h-full rounded-full bg-tertiary flex items-center justify-center">
                            <span className="text-2xl sm:text-4xl font-bold text-white">J</span>
                        </div>
                    </motion.div>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2">
                        Hai, Saya{' '}
                        <span className="bg-gradient-to-r from-accent via-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Muhammad Jovi Syawal Difa
                        </span>
                    </h1>
                    
                    <div className="text-lg sm:text-xl md:text-2xl text-secondary mb-6 sm:mb-8 h-12 sm:h-16 px-4 flex items-center justify-center">
                        <TypeAnimation
                            sequence={[
                                2000,
                                'Junior Web Developer | Next.js, Vue.js & Laravel',
                                2000,
                                'Laravel Enthusiast',
                                2000,
                                'Software Developer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            style={{ display: 'inline-block' }}
                        />
                    </div>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-base sm:text-lg text-secondary max-w-3xl mb-8 sm:mb-12 leading-relaxed px-4"
                    >
                        Saya adalah mahasiswa <span className="text-accent font-semibold">Sistem Informasi</span> yang passionate dalam menciptakan 
                        solusi digital yang <span className="text-white font-semibold">elegan</span>, <span className="text-white font-semibold">efisien</span>, dan <span className="text-white font-semibold">berdampak positif</span>. 
                        Dengan keahlian dalam <span className="text-accent">Next.js</span>, <span className="text-accent">Laravel</span>, dan teknologi modern lainnya, 
                        saya siap mengubah ide kreatif menjadi aplikasi web yang powerful.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-12"
                    >
                        <a
                            href="#projects"
                            className="bg-gradient-to-r from-accent to-purple-600 hover:from-purple-600 hover:to-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-glow transform hover:scale-105 text-center text-sm sm:text-base w-full sm:w-auto max-w-xs"
                        >
                            Lihat Proyek Saya
                        </a>
                        <a
                            href="#contact"
                            className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-center text-sm sm:text-base w-full sm:w-auto max-w-xs"
                        >
                            Hubungi Saya
                        </a>
                    </motion.div>
                    
                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                        className="grid grid-cols-3 gap-6 sm:gap-8 max-w-md mx-auto"
                    >
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">4+</div>
                            <div className="text-xs sm:text-sm text-secondary">Proyek</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">8+</div>
                            <div className="text-xs sm:text-sm text-secondary">Teknologi</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">2+</div>
                            <div className="text-xs sm:text-sm text-secondary">Tahun Coding</div>
                        </div>
                    </motion.div>
                </motion.div>
                

            </div>
        </section>
    );
}

export default HeroSection;