"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Tech", href: "#tech", id: "tech" },
  { name: "Qualification", href: "#qualification", id: "qualification" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const MotionLink = motion.create(Link);

const Navbar = () => {
  const sectionIds = useMemo(() => navLinks.map((link) => link.id), []);
  const activeSection = useScrollSpy(sectionIds);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const navRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        delay: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50  bg-background/80 backdrop-blur-xl border-b border-border shadow-2xl font-sans antialiased"
    >
      <div className=" flex justify-between items-center px-6 py-4">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-extrabold tracking-tight text-foreground cursor-pointer"
          >
            Fardin
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link, i) => (
            <MotionLink
              key={link.id}
              href={link.href}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-xl ${
                activeSection === link.id
                  ? "text-violet-500 bg-violet-500/10 shadow-[0_0_20px_rgba(167,139,250,0.1)]"
                  : "text-muted hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {link.name}
            </MotionLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-xl bg-foreground/5 border border-border text-foreground hover:bg-foreground/10 transition-all active:scale-95"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
          </button>

          <MotionLink
            href="#contact"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block bg-violet-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-violet-500 transition-all text-[14px] tracking-[0.05em]"
          >
            Contact
          </MotionLink>
          
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    activeSection === link.id ? "text-violet-500" : "text-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-violet-600 text-white px-6 py-3 rounded-xl font-bold text-center"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

