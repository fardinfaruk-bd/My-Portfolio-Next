import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MyTechStack = () => {
    return (
        <section id="tech" className='min-h-[50vh] md:min-h-[80vh] reveal mt-10 md:mt-40  reveal'>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 md:mb-20 text-center text-foreground reveal-item">
              My Tech Stack
            </h1>
            <div className="reveal-item">
              <Marquee 
                pauseOnHover={true} 
                speed={100} 
                gradient={true} 
                gradientColor="var(--background)"
                gradientWidth={100}
                className='overflow-hidden'

                >
                {[
                  { src: "https://i.ibb.co.com/3YpsCdvJ/HTML.png", alt: "Html" },
                  { src: "https://i.ibb.co.com/6RhMdYqc/CSS.png", alt: "CSS" },
                  { src: "https://i.ibb.co.com/9msLphCT/Js.png", alt: "JavaScript" },
                  { src: "https://i.ibb.co.com/mF2whX51/Type-Script.png", alt: "Type Script" },
                  { src: "https://i.ibb.co.com/1GRZb7Jq/Next.png", alt: "Next js" },
                  { src: "https://i.ibb.co.com/gL4QscCD/Node.png", alt: "Node js" },
                  { src: "https://i.ibb.co.com/Q3zt1Cjb/Express.png", alt: "Express" },
                  { src: "https://i.ibb.co.com/1tyJzNVB/Mongo-DB.png", alt: "Mongo DB" },
                ].map((tech, i) => (
                  <div key={i} className="mx-12 grayscale-0 hover:grayscale-100 transition-all duration-500 opacity-50 hover:opacity-100 transform hover:scale-110">
                    <Image src={tech.src} alt={tech.alt} width={200} height={200} className="object-contain" />
                  </div>
                ))}
              </Marquee>
            </div>
        </section>
    );
};

export default MyTechStack;