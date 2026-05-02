import React from "react";
import MyImage from "../public/avatar.png";
import Link from "next/link";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <main
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-20 bg-transparent reveal reveal"
    >
      <section className="max-w-[1280px] mx-auto px-6 md:px-[64px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[48px] items-center">
          {/* Hero Content */}
          <div className="md:col-span-7 flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-border w-fit mb-4 reveal-item">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-[14px] font-semibold tracking-[0.05em] text-muted">
                Available for new opportunities
              </span>
            </div>
            <h1
              className="text-[40px] sm:text-[56px] md:text-[64px] lg:text-[74px] font-extrabold leading-[1.1] tracking-[-0.04em] text-foreground glow-text reveal-item"
            >
              Hey, I'm Fardin <span className="inline-block ml-2">👋</span> <br />
              <span className="text-violet-500">Frontend Developer</span>
            </h1>
            <p
              className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] text-muted max-w-xl mt-4 reveal-item"
            >
              I build immersive, high-performance web experiences with a focus on
              modern aesthetics and fluid animations.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 reveal-item">
              <Link
                href="#contact"
                className="bg-primary-container text-white px-8 py-4 rounded-2xl text-[16px] font-bold tracking-[0.05em] hover:opacity-90 transition-all flex items-center gap-2 shadow-2xl shadow-primary-container/20 hover:scale-105 active:scale-95"
              >
                Get In Touch
                <span className="material-symbols-outlined text-white">arrow_forward</span>
              </Link>
              <Link
                href="#projects"
                className="bg-foreground/5 text-foreground border border-border px-8 py-4 rounded-2xl text-[16px] font-bold tracking-[0.05em] hover:bg-foreground/10 transition-all hover:scale-105 active:scale-95"
              >
                Browse Projects
              </Link>
            </div>
          </div>

          {/* Hero Visual (Client Side) */}
          <HeroVisual imageSrc={MyImage} />
        </div>
      </section>
    </main>
  );
};

export default Hero;
