// src/components/ContactSection.tsx
'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
            {
                // PERUBAHAN DI SINI: Sesuaikan nama variabel dengan template Anda
                name: form.name,       // Sebelumnya: from_name
                email: form.email,     // Sebelumnya: from_email
                message: form.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
        )
        .then(() => {
            setLoading(false);
            alert("Terima kasih! Saya akan segera menghubungi Anda kembali.");
            setForm({ name: '', email: '', message: '' });
        }, (error) => {
            setLoading(false);
            console.error(error);
            alert("Maaf, terjadi kesalahan. Silakan coba lagi.");
        });
    };

    return (
        <section id="contact" className="w-full py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='flex-[0.75] bg-tertiary p-8 rounded-2xl border border-gray-800 shadow-card'
                >
                    <p className="text-sm uppercase tracking-wider text-secondary">Get in touch</p>
                    <h3 className="text-white font-black md:text-5xl sm:text-4xl text-3xl">Kontak.</h3>

                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Nama Anda</span>
                            <input type='text' name='name' value={form.name} onChange={handleChange} placeholder="Siapa nama Anda?"
                                   className='bg-primary/50 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' required/>
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Email Anda</span>
                            <input type='email' name='email' value={form.email} onChange={handleChange} placeholder="Apa alamat email Anda?"
                                   className='bg-primary/50 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' required/>
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Pesan Anda</span>
                            <textarea rows={7} name='message' value={form.message} onChange={handleChange} placeholder='Apa yang ingin Anda sampaikan?'
                                      className='bg-primary/50 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' required/>
                        </label>

                        <button type='submit'
                                className='bg-accent py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:bg-accent/90 transition-all duration-300'>
                            {loading ? "Mengirim..." : "Kirim"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;