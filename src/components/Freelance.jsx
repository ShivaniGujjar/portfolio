import React from 'react';
import { HiOutlineArrowUpRight, HiOutlineCheck } from 'react-icons/hi2';
import { HiOutlineExternalLink } from 'react-icons/hi';
import akshayImg from '../assets/akshay.png';

// ---- Edit these -------------------------------------------------------------
const AKSHAY_LIVE_LINK = 'https://akshayshrivastava.com/';

const packages = [
  {
    name: 'Starter',
    price: '₹4,999',
    note: 'One-page portfolio',
    delivery: '5–7 days',
    features: [
      'Hero, about, work gallery, contact',
      'Mobile-first responsive design',
      'Social and WhatsApp links',
      'Free hosting included (Netlify / Vercel)',
      'Custom domain optional (₹1,000 extra setup)',
      '1 round of revisions',
    ],
  },
  {
    name: 'Standard',
    price: '₹11,999',
    note: 'Custom multi-section site',
    delivery: '10–14 days',
    popular: true,
    features: [
      'Everything in Starter',
      'Custom design shared before building',
      'Video and project embeds',
      'Smooth scrolling and light animations',
      'Contact form that emails you',
      'Custom domain connected (domain fee extra)',
      '2 rounds of revisions',
    ],
  },
  {
    name: 'Premium',
    price: '₹22,999',
    note: 'Full custom experience',
    delivery: '3–4 weeks',
    features: [
      'Everything in Standard',
      'Advanced animation (GSAP / Framer)',
      'Content you can edit without code',
      'Basic SEO and fast load times',
      'Analytics setup',
      '30 days of free support',
    ],
  },
];

const work = [
  {
    title: 'Akshay – Video Editor',
    desc: 'Kinetic layouts, smooth scrolling and a showreel-first design for a professional video editor.',
    stack: ['React', 'GSAP', 'Framer', 'Lenis'],
    imageSrc: akshayImg,
    liveLink: AKSHAY_LIVE_LINK,
  },
];

const steps = [
  ['Brief', 'You share your goals, content and sites you like.'],
  ['Design', 'I send a mockup. You approve it before I write code.'],
  ['Build', 'You review a live preview link and request changes.'],
  ['Launch', 'Domain, hosting, and a walkthrough on how to update it.'],
];
// -----------------------------------------------------------------------------

const cardBase =
  'bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.09] dark:border-white/[0.08] backdrop-blur-md rounded-2xl transition-colors duration-300';

const Freelance = () => {
  // Tell the Contact form which package was picked, then scroll to it.
  const choosePackage = (name) => {
    window.dispatchEvent(new CustomEvent('select-package', { detail: name }));
  };

  return (
    <section
      id="freelance"
      className="w-full relative bg-[#FAFAF9] dark:bg-[#050507] pt-32 sm:pt-40 pb-20 sm:pb-28"
    >
      <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-black/90 dark:text-white/95">
            Need a portfolio? I <span className="text-[#00C2FF]">build them</span>
          </h2>
          <p className="mt-4 max-w-xl text-[13px] sm:text-sm text-black/45 dark:text-white/50 leading-relaxed">
            I design and build personal and work portfolios for editors, designers,
            photographers, developers and other creators: fast, mobile-first, and
            made to look like you.
          </p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`${cardBase} flex flex-col p-5 sm:p-6 ${
                p.popular
                  ? 'border-[#00C2FF]/50 dark:border-[#00C2FF]/50'
                  : 'hover:border-black/[0.15] dark:hover:border-white/[0.15]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold text-black/90 dark:text-white/95 tracking-tight">
                  {p.name}
                </h3>
                {p.popular && (
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-[#00C2FF]/10 text-[#00C2FF] border border-[#00C2FF]/20 rounded-full">
                    Most chosen
                  </span>
                )}
              </div>
              <p className="text-xs text-black/40 dark:text-white/40">{p.note}</p>

              <p className="mt-5 text-3xl font-semibold tracking-tight text-black/90 dark:text-white/95">
                {p.price}
                <span className="ml-1.5 text-xs font-normal text-black/40 dark:text-white/40">
                  starting
                </span>
              </p>
              <p className="mt-1 text-xs text-[#FF6C37]">Delivery in {p.delivery}</p>

              <ul className="mt-5 mb-6 flex-1 space-y-2.5 pt-4 border-t border-black/[0.07] dark:border-white/[0.06]">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-[13px] text-black/55 dark:text-white/60"
                  >
                    <HiOutlineCheck size={14} className="mt-0.5 shrink-0 text-[#00C2FF]" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => choosePackage(p.name)}
                className="bg-black text-white dark:bg-white dark:text-black hover:bg-[#00C2FF] hover:text-black text-sm font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 group/btn"
              >
                <span>Choose {p.name}</span>
                <HiOutlineArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-black/40 dark:text-white/40">
          50% to start, 50% on delivery. Hosting is free on all packages. A custom domain
          (about ₹600–1,000 per year) is bought by you in your own name, so you
          own it and handle the yearly renewal; I set it up for you. Need something different? Tell me and I'll quote it.
        </p>

        {/* Work */}
        <h3 className="mt-16 sm:mt-20 mb-6 text-xl sm:text-2xl font-semibold tracking-tight text-black/90 dark:text-white/95">
          Portfolios I've <span className="text-[#FF6C37]">built</span>
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:gap-5">
          {work.map((w) => (
            <div key={w.title} className={`${cardBase} p-5 sm:p-6 hover:border-black/[0.15] dark:hover:border-white/[0.15] md:grid md:grid-cols-2 md:gap-8 md:items-center`}>
              {w.imageSrc && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.07] dark:border-white/[0.06] mb-5 md:mb-0">
                  <img src={w.imageSrc} alt={w.title} className="w-full h-full object-cover opacity-90" />
                  {w.liveLink && (
                    <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-lg flex items-center gap-1.5 text-[10px] font-medium text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                      live
                    </div>
                  )}
                </div>
              )}
              <div>
              <h4 className="text-lg font-semibold text-black/90 dark:text-white/95 tracking-tight mb-2">
                {w.title}
              </h4>
              <p className="text-[13px] text-black/45 dark:text-white/50 leading-relaxed mb-5">
                {w.desc}
              </p>
              <div className="flex flex-wrap items-center gap-1.5">
                {w.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.07] dark:border-white/[0.06] rounded-md text-[11px] text-black/55 dark:text-white/60"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-black/[0.07] dark:border-white/[0.06]">
                {w.liveLink ? (
                  <a
                    href={w.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-black text-white dark:bg-white dark:text-black hover:bg-[#00C2FF] hover:text-black text-sm font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 group/btn"
                  >
                    <span>View live demo</span>
                    <HiOutlineExternalLink size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                ) : (
                  <div className="bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-black/50 dark:text-white/50 text-xs font-mono py-2.5 px-4 rounded-xl flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                    <span>Demo coming soon</span>
                  </div>
                )}
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process: a real sequence, so numbered steps make sense */}
        <h3 className="mt-16 sm:mt-20 mb-6 text-xl sm:text-2xl font-semibold tracking-tight text-black/90 dark:text-white/95">
          How it works
        </h3>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(([title, text], i) => (
            <li key={title} className={`${cardBase} p-5`}>
              <span className="text-xs text-[#00C2FF]">Step {i + 1}</span>
              <p className="mt-1 text-sm font-medium text-black/90 dark:text-white/95">{title}</p>
              <p className="mt-1.5 text-[13px] text-black/45 dark:text-white/50 leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="bg-black text-white dark:bg-white dark:text-black hover:bg-[#00C2FF] hover:text-black text-sm font-medium py-2.5 px-5 rounded-xl transition-colors duration-200"
          >
            Start your portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Freelance;