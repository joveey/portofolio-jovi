'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const credentialRows = [
  { label: 'Education', value: 'Information Systems, National University' },
  { label: 'GPA', value: '3.78 / 4.00' },
  { label: 'Certification', value: 'BNSP Junior Web Developer' },
  { label: 'Focus', value: 'Laravel, PHP, Next.js' },
];

const HeroSection = () => {
  return (
    <section id="home" className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
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
          className="relative mx-auto w-full max-w-[30rem] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.10)] sm:p-5 lg:ml-auto"
        >
          <div className="absolute inset-x-8 top-0 h-24 rounded-full bg-sky-100/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-sky-50 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between bg-slate-950 px-5 py-4 text-white">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200">
                  Professional ID
                </p>
                <p className="mt-1 text-sm font-medium text-slate-200">
                  Portfolio Identity Card
                </p>
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100">
                ID 2026
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="grid gap-5 sm:grid-cols-[150px_1fr] sm:items-center">
                <div className="mx-auto w-full max-w-[160px]">
                  <div className="rounded-[1.45rem] bg-gradient-to-br from-sky-100 via-white to-cyan-50 p-2.5 shadow-[0_18px_50px_rgba(14,165,233,0.14)]">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[1.1rem] border border-white/80 bg-slate-100">
                      <Image
                        src="/profile.jpg"
                        alt="Portrait of Muhammad Jovi Syawal Difa"
                        fill
                        priority
                        sizes="(min-width: 1280px) 160px, (min-width: 1024px) 150px, (min-width: 640px) 180px, 50vw"
                        className="object-cover object-[center_12%]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
                    Verified Candidate
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                    Muhammad Jovi Syawal Difa
                  </h2>
                  <p className="mt-2 text-base font-medium text-slate-700">
                    Junior Web Developer
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Fresh graduate with internship experience in IT and Management
                    System Information, focused on practical web application delivery.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <div className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                      Fresh Graduate
                    </div>
                    <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                      GPA 3.78/4.00
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-[1.4rem] border border-slate-200 bg-white/80 p-4">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Credentials
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-900">
                      Core profile details
                    </p>
                  </div>
                  <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:block">
                    Active
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {credentialRows.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
