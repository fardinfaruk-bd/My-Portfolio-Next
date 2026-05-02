"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollReveal() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll(".reveal");

    sections.forEach((section) => {
      // Create a reveal animation for each section
      gsap.fromTo(
        section,
        {
          autoAlpha: 0,
          y: 40,
          scale: 0.98,
          filter: "blur(10px)",
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%", 
            toggleActions: "play none none none",
          },
        }
      );

      // Stagger children if they have the .reveal-item class
      const items = section.querySelectorAll(".reveal-item");
      if (items.length > 0) {
        gsap.fromTo(
          items,
          {
            autoAlpha: 0,
            y: 20,
            scale: 0.95,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
          }
        );
      }

      // Special handling for Hero Visual elements if present
      const heroImage = section.querySelector("#hero-image");
      const heroBadge = section.querySelector("#hero-badge");
      if (heroImage) {
        gsap.to(heroImage, {
          autoAlpha: 1,
          scale: 1,
          duration: 1.5,
          ease: "expo.out",
          delay: 0.5,
        });
      }
      if (heroBadge) {
        gsap.to(heroBadge, {
          autoAlpha: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          delay: 1,
        });
      }
    });
  }, []);

  return null;
}
