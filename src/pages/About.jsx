import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { VscGithubInverted } from 'react-icons/vsc';
import { HiOutlineAcademicCap } from 'react-icons/hi2';

const githubTheme = {
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

const focusPoints = [
  {
    color: '#00C2FF',
    text: (
      <>Mostly <strong className="text-white font-medium">MERN</strong> — React on the front, Node/Express behind it, MongoDB doing the remembering.</>
    ),
  },
  {
    color: '#FF6C37',
    text: (
      <>I reach for <strong className="text-white font-medium">Socket.io</strong> when something needs to feel alive — live updates, chats, that sort of thing.</>
    ),
  },
  {
    color: '#27C93F',
    text: (
      <>Spend a fair bit of time on the small stuff — <strong className="text-white font-medium">micro-interactions</strong>, load states, the parts people don't notice unless they're missing.</>
    ),
  },
];

const About = () => {
  return (
    <section className="relative w-full bg-[#050507] py-20 sm:py-28 overflow-hidden" id="about">
      <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 relative z-10">

        {/* Header — same quiet register as the hero's whoami line */}
        <div className="mb-10 sm:mb-14">
          
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white/95">
            A bit about <span className="text-[#00C2FF]">me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">

          {/* Focus — bullets instead of 01/02/03, since this isn't actually a sequence */}
          <motion.div
            className="md:col-span-7 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors duration-300 hover:border-white/[0.15]"
          >
            <div>
              <span className="text-xs text-white/40 mb-6 block">What I actually spend time on</span>

              <div className="space-y-5">
                {focusPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: point.color }}
                    />
                    <p className="text-[13px] sm:text-sm text-white/60 leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-7 pt-6 border-t border-white/[0.06]">
              {['fullstack', 'websockets', 'ui details'].map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] text-white/50 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            className="md:col-span-5 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors duration-300 hover:border-white/[0.15]"
          >
            <div>
              <div className="flex items-center gap-2 text-xs text-white/40 mb-6">
                <HiOutlineAcademicCap className="text-[#FF6C37]" />
                <span>Education</span>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-medium text-white text-base">MCA</h4>
                    <span className="text-[11px] text-[#00C2FF]">2024 – 2026</span>
                  </div>
                  <p className="text-xs text-white/40">Lovely Professional University</p>
                </div>

                <div className="w-full h-px bg-white/[0.06]" />

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-medium text-white/80 text-base">BCA</h4>
                    <span className="text-[11px] text-white/35">2021 – 2023</span>
                  </div>
                  <p className="text-xs text-white/35">GGSIPU</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* GitHub activity — dropped the "Live" badge, kept just a small pulse to say the same thing quietly */}
          <motion.div
            className="md:col-span-12 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md rounded-2xl p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.15] overflow-hidden"
          >
            <div className="flex items-center gap-2 text-xs text-white/40 mb-6">
              <VscGithubInverted className="text-white/70 text-sm" />
              <span>Contributions this year</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse ml-1" />
            </div>

            <div className="w-full bg-black/20 p-4 rounded-xl border border-white/[0.05] flex items-center justify-center overflow-x-auto scrollbar-none">
              <GitHubCalendar
                username="shivanigujjar"
                year={2026}
                theme={githubTheme}
                fontSize={10}
                blockSize={10}
                blockMargin={4}
                colorScheme="dark"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;