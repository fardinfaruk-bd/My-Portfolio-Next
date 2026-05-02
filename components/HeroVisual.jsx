"use client";

import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const HeroVisual = ({ imageSrc }) => {
  // Mouse move parallax values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-10, 10]);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const offsetX = clientX - innerWidth / 2;
      const offsetY = clientY - innerHeight / 2;
      x.set(offsetX);
      y.set(offsetY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <div className="md:col-span-5 relative flex justify-center items-center mx-auto reveal">
      <motion.div 
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="relative group w-fit h-fit reveal-item"
      >
        {/* Outer Halo Ring */}
        <div className="absolute -inset-8 border-2 border-violet-500/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
        
        {/* Main Avatar Container */}
        <div
          className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-violet-600 via-border to-blue-600 shadow-[0_0_50px_-12px_rgba(124,58,237,0.5)] overflow-hidden opacity-0 scale-90"
          id="hero-image"
        >
          <div className="w-full h-full rounded-full bg-background overflow-hidden border-4 border-background relative">
            <Image
              src={imageSrc}
              alt="Portrait of Fardin"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              priority
            />
          </div>
        </div>

        {/* Floating Badge */}
        <div
          className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 md:bottom-4 md:right-1 bg-card/90 backdrop-blur-2xl border border-border p-2 sm:p-3 rounded-3xl shadow-2xl flex items-center gap-2 sm:gap-4 group-hover:translate-y-[-10px] transition-transform duration-500 z-20 opacity-0 scale-50"
          id="hero-badge"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-violet-600 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.5)]">
            <span className="material-symbols-outlined text-white text-xl sm:text-2xl">
              terminal
            </span>
          </div>
          <div>
            <p className="text-[14px] sm:text-[16px] font-bold tracking-[0.05em] text-foreground">
              1+ Years
            </p>
            <p className="text-[10px] sm:text-[11px] text-muted uppercase font-bold tracking-widest">
              Experience
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroVisual;
