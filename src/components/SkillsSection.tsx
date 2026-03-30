'use client';

import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Laravel', 'PHP'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'Prisma'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'REST API', 'Midtrans Integration'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Technical Skills
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Practical technologies used in my web development work.
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <p className="mb-4 text-lg font-semibold text-slate-900">{group.title}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
