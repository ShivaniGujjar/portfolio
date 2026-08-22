import React from 'react';
import SkillCard from '../components/SkillCard';

const skillData = [
  {
    label: "Frontend",
    title: "UI & Interaction",
    color: "#00C2FF",
    features: [
      { name: "Responsive Layouts", tag: "Tailwind / Grid" },
      { name: "Animation Physics", tag: "GSAP / Framer" },
      { name: "State Architecture", tag: "Redux Toolkit" }
    ],
    techList: ["React", "Tailwind", "GSAP", "Framer", "Redux"]
  },
  {
    label: "Backend",
    title: "Server & Real-Time",
    color: "#27C93F",
    features: [
      { name: "RESTful APIs", tag: "Node / Express" },
      { name: "Live Data Stream", tag: "Socket.io" },
      { name: "GenAI Integration", tag: "LangChain" }
    ],
    techList: ["Node.js", "Express", "MongoDB", "Socket.io", "LangChain"]
  },
  {
    label: "DevOps",
    title: "Workflow & Tooling",
    color: "#FF6C37",
    features: [
      { name: "Version Control", tag: "Git / GitHub" },
      { name: "Component Systems", tag: "Modular / DRY" },
      { name: "Cloud Hosting", tag: "Vercel / Hostinger" }
    ],
    techList: ["Git", "Vite", "Vercel", "Hostinger", "Postman"]
  }
];

const Capabilities = () => {
  return (
    <section className="w-full relative bg-[#FAFAF9] dark:bg-[#050507] py-20 sm:py-28 border-t border-black/[0.06] dark:border-white/[0.05]" id="capabilities">

      <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 relative z-10">

        {/* Header — heading only */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-black/90 dark:text-white/95">
            What I actually <span className="text-[#00C2FF] dark:text-[#00C2FF]">work with</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {skillData.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Capabilities;