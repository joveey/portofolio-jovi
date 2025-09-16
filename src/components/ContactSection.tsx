// src/components/ContactSection.tsx
'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaUser, FaComment, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<{[key: string]: string}>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateForm = () => {
        const newErrors: {[key: string]: string} = {};
        
        if (!form.name.trim()) newErrors.name = 'Nama harus diisi';
        if (!form.email.trim()) newErrors.email = 'Email harus diisi';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Format email tidak valid';
        if (!form.message.trim()) newErrors.message = 'Pesan harus diisi';
        else if (form.message.length < 10) newErrors.message = 'Pesan minimal 10 karakter';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setLoading(true);

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
            {
                name: form.name,
                email: form.email,
                message: form.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
        )
        .then(() => {
            setLoading(false);
            alert("Terima kasih! Pesan Anda berhasil dikirim. Saya akan segera menghubungi Anda kembali.");
            setForm({ name: '', email: '', message: '' });
        }, (error) => {
            setLoading(false);
            console.error(error);
            alert("Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi saya melalui media sosial.");
        });
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'jovisywl@gmail.com',
            href: 'mailto:jovisywl@gmail.com',
            color: 'from-red-500 to-red-600'
        },
        {
            icon: FaGithub,
            label: 'GitHub',
            value: '@joveey',
            href: 'https://github.com/joveey',
            color: 'from-gray-600 to-gray-700'
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            value: 'Jovi Syawal',
            href: 'https://www.linkedin.com/in/jovi-syawal',
            color: 'from-blue-600 to-blue-700'
        }
    ];

    return (
        <section id="contact" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <p className="text-sm uppercase tracking-wider text-secondary mb-2">Hubungi Saya</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                        Mari <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">Berkolaborasi</span>
                    </h2>
                    <p className="text-secondary max-w-2xl mx-auto text-sm sm:text-base px-4">
                        Punya proyek menarik atau ingin berdiskusi tentang teknologi? 
                        Saya siap untuk mendengar ide Anda!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-tertiary/80 to-primary/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 sm:p-8 shadow-2xl"
                    >
                        <h3 className="text-white font-bold text-xl sm:text-2xl mb-6 sm:mb-8">Kirim Pesan</h3>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-white font-medium block text-sm sm:text-base">Nama Lengkap</label>
                                <div className="relative">
                                    <FaUser className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-secondary w-4 h-4" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Masukkan nama lengkap Anda"
                                        className={`w-full bg-primary/50 pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl outline-none border-2 transition-all duration-300 text-white placeholder:text-secondary text-sm sm:text-base ${
                                            errors.name ? 'border-red-500' : 'border-gray-700 focus:border-accent'
                                        }`}
                                        required
                                    />
                                </div>
                                {errors.name && <p className="text-red-400 text-xs sm:text-sm">{errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-white font-medium block text-sm sm:text-base">Email</label>
                                <div className="relative">
                                    <FaEnvelope className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-secondary w-4 h-4" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="nama@email.com"
                                        className={`w-full bg-primary/50 pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl outline-none border-2 transition-all duration-300 text-white placeholder:text-secondary text-sm sm:text-base ${
                                            errors.email ? 'border-red-500' : 'border-gray-700 focus:border-accent'
                                        }`}
                                        required
                                    />
                                </div>
                                {errors.email && <p className="text-red-400 text-xs sm:text-sm">{errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-white font-medium block text-sm sm:text-base">Pesan</label>
                                <div className="relative">
                                    <FaComment className="absolute left-3 sm:left-4 top-5 sm:top-6 text-secondary w-4 h-4" />
                                    <textarea
                                        rows={5}
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Ceritakan tentang proyek atau ide yang ingin Anda diskusikan..."
                                        className={`w-full bg-primary/50 pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl outline-none border-2 transition-all duration-300 text-white placeholder:text-secondary resize-none text-sm sm:text-base ${
                                            errors.message ? 'border-red-500' : 'border-gray-700 focus:border-accent'
                                        }`}
                                        required
                                    />
                                </div>
                                {errors.message && <p className="text-red-400 text-xs sm:text-sm">{errors.message}</p>}
                            </div>

                            <motion.button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-accent to-purple-600 hover:from-purple-600 hover:to-accent text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                                whileHover={{ scale: loading ? 1 : 1.02 }}
                                whileTap={{ scale: loading ? 1 : 0.98 }}
                            >
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Mengirim...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane className="w-3 h-3 sm:w-4 sm:h-4" />
                                        Kirim Pesan
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 sm:space-y-8"
                    >
                        <div className="bg-gradient-to-br from-tertiary/80 to-primary/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
                            <h3 className="text-white font-bold text-xl sm:text-2xl mb-4 sm:mb-6">Informasi Kontak</h3>
                            <div className="space-y-4">
                                {contactInfo.map((contact, index) => (
                                    <motion.a
                                        key={contact.label}
                                        href={contact.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary/30 hover:bg-primary/50 transition-all duration-300 group"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center flex-shrink-0`}>
                                            <contact.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-secondary text-xs sm:text-sm">{contact.label}</p>
                                            <p className="text-white font-medium group-hover:text-accent transition-colors text-sm sm:text-base truncate">
                                                {contact.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-br from-tertiary/80 to-primary/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 sm:p-8 shadow-2xl"
                        >
                            <h4 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">Response Time</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0" />
                                    <span className="text-secondary text-xs sm:text-sm">Email: Dalam 24 jam</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span className="text-secondary text-xs sm:text-sm">LinkedIn: Dalam 12 jam</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full flex-shrink-0" />
                                    <span className="text-secondary text-xs sm:text-sm">Project Inquiry: Segera</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;