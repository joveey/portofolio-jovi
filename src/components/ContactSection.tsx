'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'jovisywl@gmail.com',
    href: 'mailto:jovisywl@gmail.com?subject=Junior%20Web%20Developer%20Opportunity',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jovi-syawal',
    href: 'https://www.linkedin.com/in/jovi-syawal',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/joveey',
    href: 'https://github.com/joveey',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Easy ways to reach me for roles and project opportunities.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            If you are hiring for a Junior Web Developer role or would like to discuss a
            project, I would be glad to connect. Email and LinkedIn are the fastest ways
            to reach me.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Availability
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">
              Ready to contribute as a junior web developer.
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-600">
              My portfolio focuses on practical web application work, internship
              experience, and technologies relevant to entry-level developer roles.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.linkedin.com/in/jovi-syawal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.08 + index * 0.06 }}
                className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:border-slate-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                  <contact.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-500">{contact.label}</p>
                  <p className="truncate text-base font-semibold text-slate-900">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
