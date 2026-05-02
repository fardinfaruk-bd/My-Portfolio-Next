"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MyProject() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl  text-foreground reveal " data-purpose="projects-container">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Recent Projects</h2>
        <p className="text-muted text-xl max-w-2xl mx-auto font-medium">
          A collection of high-performance web applications built with Node.js, React, and MongoDB.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
        {[
          {
            title: "Dragon News",
            desc: "A modern news portal built with Next.js featuring seamless navigation and real-time updates.",
            img: "https://i.ibb.co.com/gZVH50ZD/Screenshot-2026-05-02-023519.png",
            tags: ["Next.js", "Daisy UI", "Tailwind", "MongoDB"],
            github: "https://github.com/fardinfaruk-bd/Dragon-News-Next",
            demo: "https://dragon-news-next-beryl.vercel.app/category/01",
          },
          {
            title: "KeenKeeper",
            desc: "Advanced contact management app to keep track of connections and communication history.",
            img: "https://i.ibb.co.com/TBGnfMcJ/Screenshot-2026-05-02-024423.png",
            tags: ["Next.js", "React", "Daisy UI", "MongoDB"],
            github: "https://github.com/fardinfaruk-bd/KeenKeeper-A7-Next.js",
            demo: "https://keenkeeper-alpha.vercel.app/",
          },
          {
            title: "Hero IO",
            desc: "Streamlined app installer portal helping users discover and setup software effortlessly.",
            img: "https://i.ibb.co.com/TD4yMzgG/Screenshot-2026-05-02-025547.png",
            tags: ["React", "Daisy UI", "Tailwind CSS"],
            github: "https://github.com/fardinfaruk-bd/Hero-Io-App-installer-Website",
            demo: "https://heroio-web.netlify.app/",
          },
        ].map((project, i) => (
          <motion.article
            key={i}
            whileHover={{ y: -10 }}
            className="reveal-item relative rounded-3xl p-[1px] bg-card border border-border group overflow-hidden shadow-xl"
          >
            <div className="bg-card/60 backdrop-blur-3xl rounded-[23px] p-6 flex flex-col h-full w-full z-10">
              <div className="rounded-2xl overflow-hidden mb-6 aspect-video bg-muted relative">
                <Image
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={500}
                  height={500}
                  src={project.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-violet-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted mb-6 leading-relaxed text-[15px]">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
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
                </Link>
                <Link
                  className="bg-violet-600 text-white flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm flex-1 hover:bg-violet-500 transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  href={project.demo}
                >
                  Demo
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
