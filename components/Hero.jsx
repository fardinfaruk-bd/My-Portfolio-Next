"use client";
import React from "react";
import MyImage from "../public/avatar.png";
import Link from "next/link";
import HeroVisual from "./HeroVisual";
import { TypeAnimation } from "react-type-animation";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <main
      id="hero"
      className="relative min-h-screen flex flex-col  justify-center pt-20 bg-transparent reveal"
    >
      <section className="max-w-360 mx-auto px-6 md:px-[64px] w-full">
        <div className="grid grid-cols-1  grid-rows-2 md:grid-rows-1 md:grid-cols-12 justify-between items-center">
          {/* Hero Content */}
          <div className="md:col-span-7 flex flex-col gap-8 text-center md:text-left ">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-border w-fit mb-4 reveal-item">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-[14px] font-semibold tracking-wider text-muted">
                Available for new opportunities
              </span>
            </div>
            <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-extrabold leading-[1.1] tracking-[-0.04em] text-foreground glow-text reveal-item text-center md:text-left">
              Hey, I'm {" "}
              <span className="text-violet-500">
                <TypeAnimation
                  sequence={[
                    "Md Fardin Faruk 👋",
                    5000,
                    "a MERN Stack Developer",
                    3000,
                    "a Frontend Developer",
                    3000,
                    "a JavaScript Enthusiast",
                    3000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </h1>
            <p
              className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] text-muted max-w-xl mt-4 reveal-item"
            >
              I build immersive, high-performance web experiences with a focus on
              modern aesthetics and fluid animations.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 reveal-item justify-center md:justify-start">
              <Link
                href="https://drive.google.com/uc?export=download&id=14BdAdDsDmD8lo7q-WgepdLuO80WfWuJR"
                target="_blank"
                className="bg-primary-container text-white px-8 py-4 rounded-2xl text-[16px] font-bold tracking-[0.05em] hover:opacity-90 transition-all flex items-center gap-2 shadow-2xl shadow-primary-container/20 hover:scale-105 active:scale-95"
              >
                <Download size={18} />
                Download Resume
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
