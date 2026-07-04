'use client';

import { Reveal } from '@/components/ui/Reveal';

const FOUNDER = {
  initials: 'SL',
  name: 'Dr. Sri Lakshmi E',
  title: 'Founder',
  education: [
    'Ph.D., Electrical & Electronics Engineering — IIT (BHU), Varanasi',
    'M.Tech., Electrical Power Engineering — JNTU, Hyderabad',
    'B.Tech., Electrical & Electronics Engineering — JNTU, Hyderabad',
  ],
  bio: [
    `Dr. Sri Lakshmi E is the Founder of Steadcore Industries and a distinguished academician, researcher, and engineering professional with extensive expertise in electrical, electronics, and manufacturing technologies. She earned her Ph.D. in Electrical and Electronics Engineering from Indian Institute of Technology (BHU), Varanasi, one of India's premier institutions for engineering education and research. She also holds an M.Tech. in Electrical Power Engineering from Jawaharlal Nehru Technological University (JNTU), Hyderabad, and a Bachelor's degree in Electrical and Electronics Engineering from JNTU Hyderabad.`,

    `With a strong foundation in both academia and industry-oriented research, Dr. Sri Lakshmi has served as an Assistant Professor and Head of the Department, contributing significantly to engineering education, curriculum development, research, and academic leadership. Throughout her career, she has worked across multidisciplinary domains, including Electrical Engineering, Electronics Engineering, and Computer Science, fostering innovation and interdisciplinary collaboration.`,

    `Her research interests encompass Electric Vehicles (EVs), Renewable Energy Systems, Control Systems, Power Electronics, and Smart Energy Technologies. She has authored numerous research papers published in reputed National and International journals and conference proceedings, making valuable contributions to the advancement of modern engineering and sustainable technologies.`,

    `In recognition of her outstanding research contributions, Dr. Sri Lakshmi received the Academic Excellence Award (AEA) 2023 for Best Research. She has also served as a reviewer for leading international journals, ensuring the quality and integrity of scholarly publications, and has guided and supervised Ph.D. research scholars in advanced engineering research.`,

    `Driven by a vision to strengthen India's electronics manufacturing ecosystem, Dr. Sri Lakshmi founded Steadcore Industries with the objective of delivering high-quality Printed Circuit Boards (PCBs) that meet global standards. Her blend of academic excellence, technical expertise, research leadership, and commitment to innovation forms the foundation of the company's mission to support the rapidly growing electronics industry with reliable, precision-engineered PCB solutions.`,
  ],
};

const EXPERTISE = [
  'Electric Vehicles',
  'Renewable Energy',
  'Power Electronics',
  'Control Systems',
  'Smart Energy Systems',
];

const VALUES = [
  'Quality',
  'Integrity',
  'Innovation',
  'Customer Commitment',
];

export function AboutLeadership() {
  return (
    <section
      aria-labelledby="leadership-heading"
      className="py-16 sm:py-20 lg:py-24 border-b border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16 items-start">
          <Reveal from="left">
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-5">
                Leadership
              </span>

              <h2
                id="leadership-heading"
                className="font-black font-montserrat leading-[1.15] tracking-tight text-2xl sm:text-3xl mb-5"
              >
                <span className="text-primary">Meet Our</span>{' '}
                <span className="text-slate-900 dark:text-white">
                  Founder
                </span>
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                Founder-led from day one — the person accountable for every
                board we ship.
              </p>
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.05}>
              <article className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-slate-200 dark:hover:border-slate-600 transition-all duration-300 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Initials */}
                  <div
                    className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center bg-primary/10 text-primary text-3xl font-black font-montserrat"
                    aria-hidden="true"
                  >
                    {FOUNDER.initials}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {FOUNDER.name}
                    </h3>

                    <p className="text-primary font-semibold mt-1">
                      {FOUNDER.title}
                    </p>

                    {/* Education */}
                    <ul
                      className="mt-3 space-y-1"
                      aria-label="Education"
                    >
                      {FOUNDER.education.map((item) => (
                        <li
                          key={item}
                          className="text-[12px] text-slate-500 dark:text-slate-400"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Biography */}
                    <div className="mt-2 space-y-2">
                      {FOUNDER.bio.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-[14px] text-slate-600 dark:text-slate-300 text-justify"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Expertise */}
                    <div
                      className="flex flex-wrap gap-2 mt-4"
                      aria-label="Research & Expertise"
                    >
                      {EXPERTISE.map((item) => (
                        <span
                          key={item}
                          className="px-4 py-2 rounded-full text-sm font-semibold bg-primary/5 border border-primary/20 text-primary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Values */}
                    <div
                      className="flex flex-wrap gap-2 mt-4"
                      aria-label="Core Values"
                    >
                      {VALUES.map((item) => (
                        <span
                          key={item}
                          className="px-4 py-2 rounded-full text-sm font-medium bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="px-1 text-sm italic text-slate-400 dark:text-slate-500">
                Steadcore is founder-led today, by design — as the team grows,
                this is where you'll meet the engineers and quality leaders who
                join her in delivering world-class PCB solutions.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}