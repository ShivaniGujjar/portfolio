import React from 'react';
import SkillCard from '../components/SkillCard';
import { 
  SiReact, SiNodedotjs, SiMongodb, 
  SiTailwindcss, SiExpress, SiGit, SiFramer, SiJavascript 
} from 'react-icons/si';

const Capabilities = () => {
  const skillData = [
    { label: "Frontend", icons: [<SiTailwindcss key="tw"/>, <SiJavascript key="js"/>, <SiReact key="rc"/>], title: "UI ARCHITECTURE", desc: "Crafting high-performance MERN interfaces.", color: "#00C2FF", percentage: 90 },
    { label: "Backend", icons: [<SiNodedotjs key="nd"/>, <SiExpress key="ex"/>, <SiMongodb key="mg"/>], title: "SYSTEM LOGIC", desc: "Engineered scalable server environments.", color: "#00ED64", percentage: 85 },
    { label: "Workflow", icons: [<SiGit key="gt"/>, <SiFramer key="fr"/>], title: "DEV WORKFLOW", desc: "Optimized deployment & animations.", color: "#FF6C37", percentage: 80 }
  ];

  return (
    <section className="w-full relative bg-[#050507] pt-12 pb-20" id="capabilities">
      
      {/* 🏆 EXACT HEADING AS PER SCREENSHOT */}
      <div className="w-full text-center mb-16">
        <h2 className="w-full text-[clamp(2.5rem,8vw,6rem)] font-black leading-[1] tracking-tighter uppercase m-0 px-4">
          <span className="text-white">DETAILED</span> <span className="text-[#00C2FF]">CAPABILITIES</span>
        </h2>
        {/* Short Cyan Divider */}
        <div className="w-16 h-1 bg-[#00C2FF] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* STICKY STACKING ENGINE */}
      <div className="flex flex-col relative z-10 gap-[20vh] max-w-[1250px] mx-auto px-4 md:px-8">
        {skillData.map((skill, index) => (
          <SkillCard key={index} index={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Capabilities;