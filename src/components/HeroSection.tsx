// src/components/HeroSection.tsx
'use client';
import { motion } from 'framer-motion';
import ComputersCanvas from './canvas/Computers';

const HeroSection = () => {
    return (
        <section id="home" className="relative w-full h-screen mx-auto">
            {/* Konten Teks */}
            <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center text-center z-10">
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
            
            {/* Bagian "Kapsul" Scroll SUDAH DIHAPUS */}
        </section>
    );
}

export default HeroSection;