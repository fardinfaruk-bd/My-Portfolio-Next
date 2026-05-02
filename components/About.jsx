import Image from "next/image";

export default function About() {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-20 md:py-32 px-6 md:px-8 lg:px-15 reveal"
      data-purpose="about-me-section"
      id="about"
    >
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
        data-purpose="content-grid"
      >
        <div className="flex justify-center reveal-item" data-purpose="image-column">
          <div className="relative w-full max-w-[500px] group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/20 to-blue-600/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              alt="Professional headshot"
              className="rounded-[2rem] shadow-2xl w-full object-cover aspect-square border border-border"
              width={500}
              height={500}
              src="https://i.ibb.co.com/dwr2P061/My-Image2.png"
            />
          </div>
        </div>

        <div className="space-y-8 reveal-item" data-purpose="text-column">
          <h2
            className="text-5xl md:text-6xl font-bold tracking-tight text-foreground"
            data-purpose="section-heading"
          >
            About Me
          </h2>
          <div
            className="space-y-6 text-muted leading-relaxed text-xl"
            data-purpose="bio-content"
          >
            <p>
              I am a <span className="text-foreground font-bold">Frontend Web Developer</span> dedicated to building
              production-ready applications that merge high-end aesthetics with extreme performance.
            </p>
            <p>
              My passion lies in creating fluid, interactive user interfaces that feel alive. I follow clean
              architecture principles and modern development patterns, ensuring that every line of code is 
              maintainable, scalable, and secure.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              {['MERN Stack', 'Next.js', 'UI/UX Design', 'Performance Opt.'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-foreground/5 border border-border rounded-xl text-sm font-bold text-muted-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
