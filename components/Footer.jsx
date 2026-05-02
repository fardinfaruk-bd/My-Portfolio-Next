import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="bg-card w-full text-foreground border-t border-border  reveal">
            
                <div className="w-[85%] md:w-[90%] mx-auto space-y-7 pt-20 md:pt-32">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full mx-auto mb-20">
                        <div className="space-y-5">
                            <h1 className='text-2xl font-semibold'>Fardin.</h1>
                            <p className="text-muted font-normal">I'm a passionate frontend developer who loves creating beautiful, responsive, and user-friendly web applications.</p>
                        </div>


                        <div className="space-y-4">
                            <h1 className="text-xl ">About</h1>
                            <ol className="text-muted space-y-4">
                                <li>Blog</li>
                                <li>Work</li>
                                <li>Press</li>
                            </ol>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-xl ">Resources</h1>
                            <ol className="text-muted space-y-4">
                                <li>Documentation</li>
                                <li>Help Center</li>
                                <li>Community</li>
                                <li>Contact</li>
                            </ol>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-xl ">Social Links</h1>
                            <div className="flex items-center gap-5 cursor-pointer">
                                <Link href={"https://www.instagram.com/_fardin_zz/"} className="bg-foreground/5 w-10 h-10 rounded-full flex justify-center items-center hover:bg-foreground/10 transition-colors">
                                    <FaInstagram className="text-foreground" />
                                </Link>
                                <Link href={"https://www.facebook.com/fardin.faruk.tofu7/"} className="bg-foreground/5 w-10 h-10 rounded-full flex justify-center items-center hover:bg-foreground/10 transition-colors">
                                    <FaFacebook className="text-foreground" />
                                </Link>
                                <Link href={"https://github.com/fardinfaruk-bd"} className="bg-foreground/5 w-10 h-10 rounded-full flex justify-center items-center hover:bg-foreground/10 transition-colors">
                                    <FaGithub className="text-foreground" />
                                </Link>
                            </div>
                        </div>

                    </div>
                    <hr className="border border-border opacity-65" />
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center pb-8 text-center md:text-left">

                        <p className="text-muted">
                            © 2026 Fardin Faruk. All rights reserved.
                        </p>

                        <div className="flex  md:flex-row items-center gap-4 md:gap-8 text-muted mt-3 md:mt-0">
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Cookies</p>
                        </div>

                    </div>
                </div>
           
        </div>
    );
};

export default Footer;
