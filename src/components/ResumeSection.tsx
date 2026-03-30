'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'PT. AIS Teknologi',
    role: 'IT Intern',
    period: 'May 2025 - August 2025',
    points: [
      'Assisted in system support and troubleshooting.',
      'Supported basic development tasks and system implementation.',
    ],
  },
  {
    company: 'PT. Panasonic Gobel Indonesia',
    role: 'Management System Information (MIS) Intern',
    period: 'September 2025 - December 2025',
    points: [
      'Developed internal projects to support operational needs across other divisions.',
      'Built tools such as an Upload Center to help streamline document and workflow processes.',
    ],
  },
];

const cardClass =
  'rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]';

const ResumeSection = () => {
  return (
    <section id="resume" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Resume Highlights
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Education, certification, and internship experience.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="space-y-6"
          >
            <div className={cardClass}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Education
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">
                  Bachelor of Information Systems
                </h3>
                <p className="text-sm text-slate-600">National University | 2022 - 2026</p>
                <p className="text-base font-medium text-slate-800">
                  Cumulative GPA: 3.78/4.00
                </p>
              </div>
            </div>

            <div className={cardClass}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Certification
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">
                  Badan Nasional Sertifikasi Profesi (BNSP)
                </h3>
                <p className="text-base text-slate-700">Junior Web Developer (2026)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cardClass}
          >
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Experience
            </p>
            <div className="space-y-8">
              {experiences.map((experience) => (
                <div
                  key={`${experience.company}-${experience.role}`}
                  className="border-l border-slate-200 pl-5"
                >
                  <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {experience.company}
                      </h3>
                      <p className="text-base font-medium text-sky-700">{experience.role}</p>
                    </div>
                    <p className="text-sm text-slate-500">{experience.period}</p>
                  </div>
                  <ul className="space-y-2 text-sm leading-7 text-slate-600">
                    {experience.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-sky-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
