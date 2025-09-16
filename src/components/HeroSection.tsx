// src/components/HeroSection.tsx
'use client';
import { motion } from 'framer-motion';
import ComputersCanvas from './canvas/Computers';

const HeroSection = () => {
    return (
        <section id="home" className="relative w-full h-screen mx-auto">
            {/* Konten Teks */}
            <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row items-start gap-5 z-10">
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-accent' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>
                <div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        Hai, Saya <span className="text-accent">Jovi</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-secondary mt-4">
                        Saya mengembangkan aplikasi web <br className='sm:block hidden' />
                        yang modern dan fungsional.
                    </p>
                </div>
            </div>
            
            {/* Canvas 3D */}
            <ComputersCanvas />

            {/* Indikator Scroll (di luar alur konten utama) */}
            <div className='absolute bottom-10 w-full flex justify-center items-center z-10'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
}

export default HeroSection;