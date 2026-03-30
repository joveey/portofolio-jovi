'use client';

import { motion } from 'framer-motion';

const quickHighlights = [
  'Bachelor of Information Systems, National University',
  'Cumulative GPA: 3.78/4.00',
  'BNSP Junior Web Developer Certification',
  'Internship experience in IT and Management System Information',
  'Focused on practical web application development',
];

const HeroSection = () => {
  return (
    <section id="home" className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            Open to Junior Web Developer opportunities
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Muhammad Jovi Syawal Difa
          </h1>
          <p className="mt-4 text-lg font-medium text-sky-700 sm:text-xl">
            Junior Web Developer
          </p>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            I am a fresh graduate in Information Systems with a strong interest in web
            development and software engineering. My strongest experience is in building
            web applications with Laravel and PHP, supported by hands-on work with
            Next.js, React.js, Vue.js, and various database systems.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)] transition hover:bg-slate-800"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.10)]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Professional Snapshot
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
              Professional Summary
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A concise summary of my academic background, certification, internship
              experience, and technical focus in web development.
            </p>

            <div className="mt-6 space-y-4">
              {quickHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                  <p className="text-sm leading-6 text-slate-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
