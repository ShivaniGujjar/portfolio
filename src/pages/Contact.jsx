import React, { useState } from 'react';
import { HiOutlineEnvelope, HiOutlineCheck, HiOutlineArrowUpRight } from 'react-icons/hi2';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "shivanigujjar.dev@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full relative bg-[#FAFAF9] dark:bg-[#050507] py-20 sm:py-28 border-t border-black/[0.06] dark:border-white/[0.05] overflow-hidden">

      {/* One soft glow, same restraint as the hero — not doubled, not centered */}
      <div className="absolute bottom-0 right-0 w-[36vw] h-[36vw] bg-[#FF6C37]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 relative z-10">

        {/* Header — heading only */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-black/90 dark:text-white/95">
            Let's <span className="text-[#00C2FF] dark:text-[#00C2FF]">talk</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT: statement + direct contact */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-black/90 dark:text-white/95 tracking-tight leading-snug mb-4">
                Got a project in mind, or looking for a <span className="text-[#FF6C37] dark:text-[#FF6C37]">fullstack engineer</span>?
              </h3>

              <p className="text-[13px] sm:text-sm text-black/45 dark:text-white/50 leading-relaxed mb-8">
                I'm open to full-time roles and freelance work right now. Send
                a message and tell me what you're building — I'll get back to
                you quickly.
              </p>

              

              {/* Social — rounded-full circles, consistent with the repo-link icon on project cards */}
              <div>
                <span className="text-xs text-black/40 dark:text-white/40 mb-3 block">
                  Elsewhere
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://github.com/ShivaniGujjar"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.09] dark:border-white/[0.08] rounded-full text-black/45 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-colors duration-200"
                    title="GitHub"
                  >
                    <FiGithub size={17} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.09] dark:border-white/[0.08] rounded-full text-black/45 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-colors duration-200"
                    title="LinkedIn"
                  >
                    <FiLinkedin size={17} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.09] dark:border-white/[0.08] rounded-full text-black/45 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-colors duration-200"
                    title="Twitter"
                  >
                    <FiTwitter size={17} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.09] dark:border-white/[0.08] rounded-full text-black/45 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-colors duration-200"
                    title="Instagram"
                  >
                    <FiInstagram size={17} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: form — same glass panel as About/Capabilities cards */}
          <div className="lg:col-span-7 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.09] dark:border-white/[0.08] backdrop-blur-md rounded-2xl p-6 sm:p-8 transition-colors duration-300 hover:border-black/[0.15] dark:border-white/[0.15]">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">

              <div>
                <label className="text-xs text-black/40 dark:text-white/40 block mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-black/[0.03] dark:bg-black/20 border border-black/[0.09] dark:border-white/[0.08] focus:border-[#00C2FF]/50 rounded-xl px-4 py-3 text-[13px] text-black dark:text-white placeholder-black/25 dark:placeholder-white/25 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-black/40 dark:text-white/40 block mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-black/[0.03] dark:bg-black/20 border border-black/[0.09] dark:border-white/[0.08] focus:border-[#00C2FF]/50 rounded-xl px-4 py-3 text-[13px] text-black dark:text-white placeholder-black/25 dark:placeholder-white/25 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-black/40 dark:text-white/40 block mb-2">
                  Project details / message
                </label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your project or opportunity..."
                  className="w-full bg-black/[0.03] dark:bg-black/20 border border-black/[0.09] dark:border-white/[0.08] focus:border-[#00C2FF]/50 rounded-xl px-4 py-3 text-[13px] text-black dark:text-white placeholder-black/25 dark:placeholder-white/25 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white dark:bg-white dark:text-black hover:bg-[#00C2FF] hover:text-black text-sm font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer group"
              >
                <span>Send message</span>
                <HiOutlineArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;