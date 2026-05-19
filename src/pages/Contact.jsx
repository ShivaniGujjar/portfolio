import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();
  const [btnText, setBtnText] = useState("SEND MESSAGE →");

  const sendEmail = (e) => {
    e.preventDefault();
    setBtnText("SENDING...");

    emailjs.sendForm(
      'service_4sp6weh',   
      'template_ie0ka9k',  
      form.current,
      '6se8NWjesf5hBewkW'    
    )
    .then((result) => {
        setBtnText("SUCCESS! ✅");
        form.current.reset();
        setTimeout(() => setBtnText("SEND MESSAGE →"), 3000);
    }, (error) => {
        setBtnText("FAILED! ❌");
        setTimeout(() => setBtnText("SEND MESSAGE →"), 3000);
    });
  };

  return (
    // 🛠️ Shifted mt margin strictly to 0 to safely separate terminal from builds grid viewports
    <section className="px-6 py-12 md:px-16 bg-brand-black overflow-hidden mt-0 pt-16 pb-16 relative" id="contact">
      
      {/* ⚡ FUTURISTIC SECTION SEPARATOR */}
      <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent md:hidden" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#00C2FF]/30 to-transparent md:hidden" />

      <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-center text-center lg:text-left">
        
        {/* LEFT SIDE: IDENTITY & SOCIALS */}
        <motion.div 
          className="flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#111] text-[#27C93F] border border-white/10 px-4 py-2 font-mono text-xs font-black mb-8 rounded-sm mx-auto lg:mx-0">
            <span className="w-2.5 h-2.5 bg-[#27C93F] rounded-full relative flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27C93F] opacity-75"></span>
            </span>
            AVAILABLE FOR WORK
          </div>
          
          <h2 className="text-[2.4rem] md:text-[clamp(3rem,7vw,4.5rem)] font-black leading-[0.95] tracking-tighter text-white mb-6 uppercase">
            LET'S WORK <br className="hidden lg:block"/> 
            <span className="text-[#00C2FF]">TOGETHER.</span>
          </h2>
          
          <p className="text-sm md:text-[1.15rem] text-[#94A3B8] leading-relaxed max-w-[480px] mb-8 lg:mb-12 mx-auto lg:mx-0">
            I’m currently seeking new opportunities and professional collaborations. 
            If you have a project in mind or just want to discuss a role, feel free to reach out.
          </p>
          
          {/* Social Icons Grid */}
          <div className="flex flex-wrap gap-[15px] md:gap-4.5 mt-4 lg:mt-6 justify-center lg:justify-start">
            <motion.a 
              whileHover={{ y: -5 }} 
              href="https://github.com/ShivaniGujjar" 
              target="_blank" 
              rel="noreferrer" 
              className="w-[45px] h-[45px] md:w-[58px] md:h-[58px] flex items-center justify-center bg-[#0D0D0D] border border-white/10 rounded-xl text-xl md:text-2xl text-[#64748B] transition-all duration-300 hover:border-[#27C93F] hover:text-white hover:shadow-[0_0_25px_rgba(39,201,63,0.25)]"
            >
              <FaGithub className="transition-transform duration-300 hover:scale-110" />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5 }} 
              href="#" 
              target="_blank" 
              rel="noreferrer" 
              className="w-[45px] h-[45px] md:w-[58px] md:h-[58px] flex items-center justify-center bg-[#0D0D0D] border border-white/10 rounded-xl text-xl md:text-2xl text-[#64748B] transition-all duration-300 hover:border-[#00C2FF] hover:text-white hover:shadow-[0_0_25px_rgba(0,194,255,0.25)]"
            >
              <FaLinkedinIn className="transition-transform duration-300 hover:scale-110" />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5 }} 
              href="https://x.com/Inavish_Buttar" 
              target="_blank" 
              rel="noreferrer" 
              className="w-[45px] h-[45px] md:w-[58px] md:h-[58px] flex items-center justify-center bg-[#0D0D0D] border border-white/10 rounded-xl text-xl md:text-2xl text-[#64748B] transition-all duration-300 hover:border-white hover:text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              <FaXTwitter className="transition-transform duration-300 hover:scale-110" />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5 }} 
              href="https://www.instagram.com/shivani_gujjar04/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-[45px] h-[45px] md:w-[58px] md:h-[58px] flex items-center justify-center bg-[#0D0D0D] border border-white/10 rounded-xl text-xl md:text-2xl text-[#64748B] transition-all duration-300 hover:border-[#FF60A8] hover:text-white hover:shadow-[0_0_25px_rgba(255,96,168,0.25)]"
            >
              <FaInstagram className="transition-transform duration-300 hover:scale-110" />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE: THE MESSAGE FORM WINDOW */}
        <motion.div 
          className="w-full max-w-[400px] lg:max-w-none mx-auto bg-[#080808] border border-white/10 rounded-2xl lg:rounded-xl shadow-[8px_8px_0px_rgba(255,255,255,0.05)] overflow-hidden lg:shadow-[20px_20px_0px_rgba(255,255,255,0.05)]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-[#1A1A1A] px-6 py-4 flex items-center gap-4">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-[2px] border-2 border-white" />
              <span className="w-2.5 h-2.5 rounded-[2px] border-2 border-white" />
            </div>
            <p className="text-white font-mono text-[0.75rem] font-black tracking-widest uppercase">SEND A MESSAGE</p>
          </div>
          
          <form ref={form} onSubmit={sendEmail} className="p-6 md:p-12 flex flex-col gap-10 md:gap-11">
            
            {/* Input 1 */}
            <div className="relative flex flex-col">
              <label className="absolute -top-2.5 left-4 lg:-top-3.5 lg:left-[15px] font-mono text-[0.55rem] lg:text-[0.7rem] font-black px-2 py-1 lg:px-3 lg:py-1.25 border-3 border-[#1A1A1A] w-fit z-10 shadow-[4px_4px_0px_#1A1A1A] uppercase bg-[#FB7DA8] text-black -rotate-2">
                YOUR NAME
              </label>
              <input 
                type="text" 
                name="from_name" 
                placeholder="Full Name" 
                required 
                className="border-4 border-[#1A1A1A] lg:border-white/10 p-[12px_15px] lg:p-[22px_18px_18px_18px] font-extrabold text-sm lg:text-base bg-black text-white outline-none rounded-sm"
              />
            </div>
            
            {/* Input 2 */}
            <div className="relative flex flex-col">
              <label className="absolute -top-2.5 left-4 lg:-top-3.5 lg:left-[15px] font-mono text-[0.55rem] lg:text-[0.7rem] font-black px-2 py-1 lg:px-3 lg:py-1.25 border-3 border-[#1A1A1A] w-fit z-10 shadow-[4px_4px_0px_#1A1A1A] uppercase bg-[#FFC567] text-black rotate-[1.5deg]">
                EMAIL ADDRESS
              </label>
              <input 
                type="email" 
                name="reply_to" 
                placeholder="email@address.com" 
                required 
                className="border-4 border-[#1A1A1A] lg:border-white/10 p-[12px_15px] lg:p-[22px_18px_18px_18px] font-extrabold text-sm lg:text-base bg-black text-white outline-none rounded-sm"
              />
            </div>

            {/* Input 3 */}
            <div className="relative flex flex-col">
              <label className="absolute -top-[14px] left-4 lg:-top-3.5 lg:left-[15px] font-mono text-[0.52rem] lg:text-[0.7rem] font-black px-1.5 py-0.5 lg:px-3 lg:py-1.25 border-3 border-[#1A1A1A] w-fit z-10 shadow-[4px_4px_0px_#1A1A1A] uppercase bg-[#3ABFF8] text-black -rotate-1 whitespace-nowrap">
                TELL ME ABOUT YOUR PROJECT
              </label>
              <textarea 
                name="message" 
                placeholder="Message..." 
                rows="4" 
                required 
                className="border-4 border-[#1A1A1A] lg:border-white/10 p-[15px_15px] lg:p-[25px_18px_18px_18px] font-extrabold text-sm lg:text-base bg-black text-white outline-none rounded-sm min-h-[100px]"
              />
            </div>

            {/* Submit Button */}
            <motion.button 
              type="submit" 
              className="w-full p-3.5 md:p-[1.2rem] bg-black text-[#27C93F] font-mono font-black text-xs md:text-lg border-2 border-[#27C93F] rounded-lg cursor-pointer uppercase tracking-[1px] md:tracking-wider shadow-[0_0_15px_rgba(39,174,96,0.2)] transition-all duration-300 hover:bg-[#27C93F] hover:text-black hover:shadow-[0_0_40px_rgba(39,174,96,0.6)]"
              whileTap={{ scale: 0.98 }}
            >
              {btnText}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;