'use client';

import { motion } from 'framer-motion';

const focusAreas = [
  {
    title: 'Problem Solving',
    description:
      'I enjoy translating real-world requirements into clear, practical web solutions.',
  },
  {
    title: 'Scalable Development',
    description:
      'My work focuses on maintainable structure, efficient implementation, and user-friendly delivery.',
  },
  {
    title: 'Continuous Learning',
    description:
      'I actively improve my technical and analytical skills through projects and hands-on experience.',
  },
];

const traits = [
  'Detail-oriented',
  'Motivated',
  'Adaptable',
  'Team-oriented',
  'Problem solver',
  'Continuous learner',
];

const AboutSection = () => {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Profile summary aligned with my CV and project work.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
          >
            <p className="text-lg leading-8 text-slate-600">
              I am a detail-oriented and motivated developer with hands-on experience
              through internships in IT and Management System Information. I enjoy
              solving real-world problems and building efficient, scalable, and
              user-friendly applications. I am continuously learning new technologies
              to improve my technical and analytical skills.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {focusAreas.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.06 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="lg:col-span-2 rounded-3xl border border-sky-100 bg-sky-50/80 p-6 shadow-[0_20px_60px_rgba(14,116,144,0.08)]"
          >
            <div className="flex flex-wrap gap-3">
              {traits.map((trait) => (
                <div
                  key={trait}
                  className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {trait}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
