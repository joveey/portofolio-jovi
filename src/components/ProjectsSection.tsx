'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Cuswash - Car Wash Booking App',
    description:
      'Developed a web-based car wash booking application using Next.js and TypeScript, featuring real-time booking management and integrated payment gateway support with Midtrans.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'Midtrans'],
    githubLink: 'https://github.com/joveey/cuswash',
    liveLink: 'https://cuswash.vercel.app/',
  },
  {
    title: 'Event Registration Website',
    description:
      'Built a user-friendly event registration platform with form validation and an admin dashboard for managing participants efficiently.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    githubLink: 'https://github.com/joveey/event-web',
    liveLink: 'https://jagoevent.vercel.app/',
  },
  {
    title: 'BK Online System',
    description:
      'Developed a REST API-based counseling system using Laravel and Vue.js to enable communication between students and counselors.',
    tech: ['Laravel API', 'Vue.js', 'MySQL', 'JWT Auth'],
    githubLink: 'https://github.com/joveey/sistem-bk-online',
    liveLink: null,
  },
  {
    title: 'E-commerce Platform',
    description:
      'Collaborated in developing a full-stack e-commerce platform with product management, cart system, and payment integration.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
    githubLink: 'https://github.com/joveey/e-commerce',
    liveLink: null,
  },
];

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubLink: string;
  liveLink: string | null;
}

const ProjectCard = ({
  title,
  description,
  tech,
  githubLink,
  liveLink,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <div className="flex h-full flex-col">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-4 flex-grow text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>

        <div className="mt-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-200 pt-5">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <FaExternalLinkAlt className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Selected Projects
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            A focused portfolio built for recruiter review.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            These projects demonstrate my experience building practical web applications
            across booking systems, administrative platforms, APIs, and e-commerce
            workflows.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
