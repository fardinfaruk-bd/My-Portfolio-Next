import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MyTechStack = () => {
    return (
        <section id="tech" className='min-h-[60vh] md:min-h-[80vh] reveal mt-20 mx-auto reveal'>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 md:mb-20 text-center text-foreground reveal-item">
              My Tech Stack
            </h1>
            <div className="reveal-item">
              <Marquee 
                pauseOnHover={true} 
                speed={80} 
                gradient={true} 
                gradientColor="var(--background)"
                gradientWidth={100}
                className='overflow-hidden'
              >
                {[
                  { src: "https://i.ibb.co.com/LDTKLd2X/HTML.png", alt: "Html" },
                  { src: "https://i.ibb.co.com/tTg4FqMJ/CSS.png", alt: "CSS" },
                  { src: "https://i.ibb.co.com/rR2wWPqm/Js.png", alt: "JavaScript" },
                  { src: "https://i.ibb.co.com/zHQkGk0j/Next-js.png", alt: "Next js" },
                  { src: "https://i.ibb.co.com/vxKZLc92/Mongo-Db-2.png", alt: "Mongo DB" },
                ].map((tech, i) => (
                  <div key={i} className="mx-12 grayscale-0 hover:grayscale-100 transition-all duration-500 opacity-50 hover:opacity-100 transform hover:scale-110">
                    <Image src={tech.src} alt={tech.alt} width={120} height={120} className="object-contain" />
                  </div>
                ))}
              </Marquee>
            </div>
        </section>
    );
};

export default MyTechStack;