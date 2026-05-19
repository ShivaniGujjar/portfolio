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
    emailjs.sendForm('service_4sp6weh', 'template_ie0ka9k', form.current, '6se8NWjesf5hBewkW')
      .then(() => {
        setBtnText("SUCCESS! ✅");
        form.current.reset();
        setTimeout(() => setBtnText("SEND MESSAGE →"), 3000);
      }, () => {
        setBtnText("FAILED! ❌");
        setTimeout(() => setBtnText("SEND MESSAGE →"), 3000);
      });
  };

  return (
    <section className="w-full bg-[#050507] py-24 md:py-32 px-6 overflow-hidden" id="contact">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT SIDE: IDENTITY & SOCIALS */}
        <div className="flex flex-col text-center lg:text-left">
          <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-1.5 font-jetbrains text-[10px] tracking-widest text-[#27C93F] uppercase rounded-full mx-auto lg:mx-0 mb-8 w-fit">
            <span className="w-2 h-2 bg-[#27C93F] rounded-full animate-pulse shadow-[0_0_8px_#27C93F]"></span> 
            Available For Work
          </div>
          
          <h2 className="font-outfit text-[3rem] md:text-[5rem] font-black leading-[0.9] tracking-tighter text-white mb-8 uppercase">
            LET'S WORK <br />
            <span className="text-[#00C2FF] drop-shadow-[0_0_20px_rgba(0,194,255,0.3)]">TOGETHER.</span>
          </h2>
          
          <p className="font-outfit text-lg text-[#666] leading-relaxed max-w-[450px] mb-12 mx-auto lg:mx-0">
            I’m currently seeking new opportunities and professional collaborations. 
            If you have a project in mind, let's connect.
          </p>
          
          <div className="flex gap-4 justify-center lg:justify-start">
            {[FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram].map((Icon, i) => (
              <a key={i} href="#" className="w-14 h-14 flex items-center justify-center bg-white/[0.03] border border-white/5 rounded-2xl text-white/50 hover:text-white hover:border-[#00C2FF]/50 transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: THE MESSAGE FORM (Post-it Style) */}
        <motion.div 
          className="relative bg-[#080808] border border-white/[0.08] rounded-[32px] p-8 md:p-10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Terminal Window Dots */}
          <div className="flex gap-2 mb-10">
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
          </div>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-10">
            
            {/* Input 1 */}
            <div className="relative">
              <span className="absolute -top-3.5 left-4 px-3 py-1 font-jetbrains text-[9px] font-bold text-black uppercase bg-[#FB7DA8] -rotate-1 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] z-10">Your Name</span>
              <input type="text" name="from_name" placeholder="Full Name" required className="w-full bg-transparent border-2 border-white/10 p-5 rounded-xl text-white outline-none focus:border-[#FB7DA8] transition-colors" />
            </div>

            {/* Input 2 */}
            <div className="relative">
              <span className="absolute -top-3.5 left-4 px-3 py-1 font-jetbrains text-[9px] font-bold text-black uppercase bg-[#FFC567] rotate-1 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] z-10">Email Address</span>
              <input type="email" name="reply_to" placeholder="email@address.com" required className="w-full bg-transparent border-2 border-white/10 p-5 rounded-xl text-white outline-none focus:border-[#FFC567] transition-colors" />
            </div>

            {/* Input 3 */}
            <div className="relative">
              <span className="absolute -top-3.5 left-4 px-3 py-1 font-jetbrains text-[9px] font-bold text-black uppercase bg-[#3ABFF8] -rotate-1 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] z-10">Tell Me About Your Project</span>
              <textarea name="message" placeholder="Message..." rows="4" required className="w-full bg-transparent border-2 border-white/10 p-5 rounded-xl text-white outline-none focus:border-[#3ABFF8] transition-colors" />
            </div>

            <button type="submit" className="w-full py-5 bg-[#27C93F]/10 border-2 border-[#27C93F] text-[#27C93F] font-black text-sm tracking-[0.2em] uppercase rounded-xl hover:bg-[#27C93F] hover:text-black transition-all">
              {btnText}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;