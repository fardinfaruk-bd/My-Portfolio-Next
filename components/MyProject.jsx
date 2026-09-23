"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { IoIosLink } from "react-icons/io";

export default function MyProject() {
  return (
    <section id="projects" className="py-32 px-6 text-foreground reveal mx-auto max-w-7xl">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Recent Projects</h2>
        <p className="text-muted text-xl max-w-2xl mx-auto font-medium">
          A collection of high-performance web applications built with Node.js, React, and MongoDB.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
        {[
          {
            title: "MediQueue",
            desc: "MediQueue is a web platform built with Next.js and MongoDB that connects students with tutors. It allows students to discover tutors and book preferred time slots while enabling tutors to set up profiles, list available hours, and manage bookings.",
            img: "https://i.ibb.co.com/gZC98KFJ/Screenshot-2026-08-07-194348.png",
            tags: ["Next.js", "Hero Ui", "Daisy UI", "Tailwind", "MongoDB"],
            github: "https://github.com/fardinfaruk-bd/MediQueue-Next",
            demo: "https://mediqueue-next.vercel.app",
          },
          {
            title: "StartupForge",
            desc: "StartupForge is a Next.js 15 platform that connects startup founders with collaborators to build team projects. Founders can post roles and manage applicants, while collaborators can browse listings, apply with portfolios, and track their application status.",
            img: "https://i.ibb.co.com/c44Rd7n/Startup-Forge.png",
            tags: ["Next.js", "React", "Daisy UI","Express","MongoDB"],
            github: "https://github.com/fardinfaruk-bd/StartupForge-Next",
            demo: "https://startupforge-next-ecru.vercel.app",
          },
          {
            title: "Bookify",
            desc: "Bookify is a modern book discovery and management web application built with Next.js. It allows users to explore books, filter them by categories, view detailed information, and manage their profile with a smooth and interactive user experience.",
            img: "https://i.ibb.co.com/DHvK4t51/Bookify.png",
            tags: ["Next.js", "React", "Daisy UI","Express","MongoDB"],
            github: "https://github.com/fardinfaruk-bd/Bookify-Next-App",
            demo: "https://bookify-next-app.vercel.app/",
          },
        ].map((project, i) => (
          <motion.article
            key={i}
            whileHover={{ y: -10 }}
            className="reveal-item relative rounded-3xl p-px bg-card border border-border group overflow-hidden shadow-xl"
          >
            <div className="bg-card/60 backdrop-blur-3xl rounded-[23px] p-6 flex flex-col h-full w-full z-10">
              <div className="rounded-2xl overflow-hidden mb-6 aspect-video bg-muted relative">
                <Image
                  alt={project?.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={500}
                  height={500}
                  src={project?.img}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>

              <div className="grow">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-violet-500 transition-colors">
                  {project?.title}
                </h3>
                <p className="text-muted mb-6 leading-relaxed text-[15px]">
                  {project?.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project?.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-foreground/5 text-muted-foreground text-[12px] font-bold rounded-lg border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-auto">
                <Link
                  className="bg-foreground/5 text-foreground border border-border flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm flex-1 hover:bg-foreground/10 transition-all"
                  href={project.github}
                >
                  GitHub
                  <HiExternalLink/>
                </Link>
                <Link
                  className="bg-violet-600 text-white flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm flex-1 hover:bg-violet-500 transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  href={project.demo}
                >
                  Demo
                  <IoIosLink />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
