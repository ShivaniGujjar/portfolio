import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const formCardRef = useRef(null);
  const leftSideRef = useRef(null);
  const form = useRef();
  const [btnText, setBtnText] = useState("SEND MESSAGE →");

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. ASUS Sci-Fi Staggered Reveal
      gsap.from(leftSideRef.current.children, {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      // 2. ASUS 3D Holographic Glitch Card Entrance
      gsap.fromTo(formCardRef.current, 
        { 
          rotateX: 30, 
          rotateY: -15,
          z: -100,
          y: 100, 
          scale: 0.85,
          opacity: 0 
        }, 
        {
          rotateX: 0,
          rotateY: 0,
          z: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 3. Continuous Hologram Levitation
      gsap.to(formCardRef.current, {
        y: "+=10",
        rotateX: "+=2",
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.4
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // ASUS ROG HUD Focus Reactive Effects
  const handleFocus = (e, color) => {
    // Pop label tag
    gsap.to(e.target.previousElementSibling, {
      scale: 1.15,
      y: -3,
      rotate: 0,
      duration: 0.3,
      ease: "back.out(2)"
    });
    // Glow laser effect on container
    gsap.to(e.target, {
      boxShadow: `0 0 25px ${color}33`,
      duration: 0.3
    });
  };

  const handleBlur = (e) => {
    gsap.to(e.target.previousElementSibling, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(e.target, {
      boxShadow: "none",
      duration: 0.3
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setBtnText("INITIALIZING...");
    emailjs.sendForm('service_4sp6weh', 'template_ie0ka9k', form.current, '6se8NWjesf5hBewkW')
      .then(() => {
        setBtnText("TRANSMISSION SUCCESS ✅");
        form.current.reset();
        setTimeout(() => setBtnText("SEND MESSAGE →"), 3000);
      }, () => {
        setBtnText("SYSTEM ERROR ❌");
        setTimeout(() => setBtnText("SEND MESSAGE →"), 3000);
      });
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#050507] py-24 md:py-32 px-6 overflow-hidden select-none" 
      id="contact" 
      style={{ perspective: "1200px" }}
    >
      {/* 💻 ASUS ROG CYBER GRID & SCANLINE BACKDROP */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c2ff0a_1px,transparent_1px),linear-gradient(to_bottom,#00c2ff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.4)_51%)] bg-[size:100%_4px] pointer-events-none opacity-30" />
      
      {/* Ambient Laser Spotlights */}
      <div className="absolute top-1/3 left-10 w-[45vw] h-[45vw] bg-[#00C2FF]/[0.035] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[45vw] h-[45vw] bg-[#27C93F]/[0.025] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* LEFT SIDE (ASUS HUD TYPOGRAPHY) */}
        <div ref={leftSideRef} className="flex flex-col text-center lg:text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 bg-black/60 border border-[#27C93F]/30 px-4 py-1.5 font-jetbrains text-[10px] tracking-[0.25em] text-[#27C93F] uppercase rounded-full mx-auto lg:mx-0 mb-8 w-fit backdrop-blur-md shadow-[0_0_15px_rgba(39,201,63,0.15)]">
            <span className="w-2 h-2 bg-[#27C93F] rounded-full animate-ping shadow-[0_0_8px_#27C93F]"></span> 
            AVAILABLE
          </div>
          
          <h2 className="font-outfit text-[3rem] md:text-[5rem] font-black leading-[0.9] tracking-tighter text-white mb-8 uppercase">
            LET'S WORK <br />
            <span className="text-[#00C2FF] drop-shadow-[0_0_30px_rgba(0,194,255,0.4)]">TOGETHER.</span>
          </h2>
          
          <p className="font-outfit text-lg text-[#888] leading-relaxed max-w-[450px] mb-12 mx-auto lg:mx-0">
            I’m currently seeking new opportunities and professional collaborations. 
            If you have a project in mind, let's connect.
          </p>
          
          {/* Social Icons with Cyber Borders */}
          <div className="flex gap-4 justify-center lg:justify-start">
            {[FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="relative w-14 h-14 flex items-center justify-center bg-[#0a0a12] border border-white/10 rounded-2xl text-white/50 hover:text-[#00C2FF] hover:border-[#00C2FF]/60 hover:bg-[#00C2FF]/10 transition-all duration-300 shadow-xl group"
              >
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
                {/* HUD Corner Accents */}
                <span className="absolute top-1 left-1 w-1 h-1 bg-[#00C2FF]/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-1 right-1 w-1 h-1 bg-[#00C2FF]/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (ASUS ROG HARDWARE GLASS TERMINAL) */}
        <div 
          ref={formCardRef}
          className="relative bg-[#08080c]/90 border border-white/10 rounded-[32px] p-8 md:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.95)] backdrop-blur-2xl will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* ASUS Sci-Fi Corner Brackets (+ / +) */}
          
          
          

          {/* Header Lights */}
          <div className="flex justify-between items-center mb-10 pt-2 border-b border-white/10 pb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ef4444] shadow-[0_0_8px_#ef4444]" />
              <div className="w-3 h-3 rounded-full bg-[#eab308] shadow-[0_0_8px_#eab308]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_#27C93F]" />
            </div>
           
          </div>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-10">
            
            {/* NAME INPUT */}
            <div className="relative">
              <span className="absolute -top-3.5 left-4 px-3 py-1 font-jetbrains text-[9px] font-bold text-black uppercase bg-[#FB7DA8] -rotate-1 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] z-10 transition-transform">Your Name</span>
              <input 
                type="text" 
                name="from_name" 
                placeholder="Full Name" 
                required 
                onFocus={(e) => handleFocus(e, "#FB7DA8")}
                onBlur={handleBlur}
                className="w-full bg-[#040407] border-2 border-white/10 p-5 rounded-xl text-white outline-none focus:border-[#FB7DA8] transition-all font-outfit" 
              />
            </div>

            {/* EMAIL INPUT */}
            <div className="relative">
              <span className="absolute -top-3.5 left-4 px-3 py-1 font-jetbrains text-[9px] font-bold text-black uppercase bg-[#FFC567] rotate-1 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] z-10 transition-transform">Email Address</span>
              <input 
                type="email" 
                name="reply_to" 
                placeholder="email@address.com" 
                required 
                onFocus={(e) => handleFocus(e, "#FFC567")}
                onBlur={handleBlur}
                className="w-full bg-[#040407] border-2 border-white/10 p-5 rounded-xl text-white outline-none focus:border-[#FFC567] transition-all font-outfit" 
              />
            </div>

            {/* MESSAGE INPUT */}
            <div className="relative">
              <span className="absolute -top-3.5 left-4 px-3 py-1 font-jetbrains text-[9px] font-bold text-black uppercase bg-[#3ABFF8] -rotate-1 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] z-10 transition-transform">Tell Me About Your Project</span>
              <textarea 
                name="message" 
                placeholder="Message..." 
                rows="4" 
                required 
                onFocus={(e) => handleFocus(e, "#3ABFF8")}
                onBlur={handleBlur}
                className="w-full bg-[#040407] border-2 border-white/10 p-5 rounded-xl text-white outline-none focus:border-[#3ABFF8] transition-all font-outfit resize-none" 
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button 
              type="submit" 
              className="relative w-full py-5 bg-[#27C93F]/10 border-2 border-[#27C93F] text-[#27C93F] font-black text-sm tracking-[0.25em] uppercase rounded-xl hover:bg-[#27C93F] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(39,201,63,0.2)] active:scale-95 overflow-hidden group"
            >
              <span className="relative z-10">{btnText}</span>
              {/* Laser Hover Fill Animation */}
              <div className="absolute inset-0 bg-[#27C93F] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out -z-0" />
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;