"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate an API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8  text-foreground reveal text-center md:text-left mx auto container"
      data-purpose="contact-us-layout"
    >

      <header className="text-center mb-16" data-purpose="section-header">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
        <p className="text-muted max-w-xl mx-auto text-lg">
          Have a project in mind? Let's connect and discuss how I can help bring
          your ideas to life.
        </p>
      </header>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

        <div className="space-y-8" data-purpose="contact-info-column">
          <h2 className="text-3xl font-semibold">Get in touch today</h2>
          <p className="text-muted text-lg leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>


          <div className="space-y-6 pt-4 flex flex-col items-center md:items-start">
            {/* Email */}
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted uppercase font-bold tracking-widest">Email Me</p>
                <span className="text-muted-foreground font-medium">fardinfaruktofu990@gmail.com</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted uppercase font-bold tracking-widest">Call Me</p>
                <span className="text-muted-foreground font-medium">+8801535485037</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted uppercase font-bold tracking-widest">Location</p>
                <span className="text-muted-foreground font-medium">Agrabad, Chittagong, Bangladesh</span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-sm font-bold text-foreground uppercase tracking-[0.2em] mb-6">Connect with me</p>
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                { icon: <FaGithub />, href: "https://github.com/fardinfaruk-bd", color: "hover:bg-[#333]" },
                { icon: <FaLinkedin />, href: "#", color: "hover:bg-[#0077b5]" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/_fardin_zz/", color: "hover:bg-[#e4405f]" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-xl text-muted-foreground hover:text-white transition-all duration-300 shadow-lg ${social.color} hover:-translate-y-1`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>



        <div
          className="relative rounded-3xl bg-card/30 backdrop-blur-3xl p-8 md:p-10 border-2 border-transparent bg-clip-padding shadow-[0_20px_50px_rgba(0,0,0,0.3)] before:absolute before:inset-0 before:-z-10 before:-m-[2px] before:rounded-[inherit] before:bg-gradient-to-br before:from-violet-600/50 before:via-indigo-600/50 before:to-purple-600/50 after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-tr after:from-white/5 after:to-transparent after:pointer-events-none"
          data-purpose="form-wrapper"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="flex flex-col space-y-2">
                <label
                  className="text-sm font-medium text-muted-foreground"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="bg-transparent border border-border text-foreground rounded-2xl w-full p-3 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  className="text-sm font-medium text-muted-foreground"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="bg-transparent border border-border text-foreground rounded-2xl w-full p-3 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  className="text-sm font-medium text-muted-foreground"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="bg-transparent border border-border text-foreground rounded-2xl w-full p-3 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors"
                  id="phone"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  className="text-sm font-medium text-muted-foreground"
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  className="bg-transparent border border-border text-foreground rounded-2xl w-full p-3 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors"
                  id="company"
                  name="company"
                  placeholder="Enter Your Company Name"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label
                className="text-sm font-medium text-muted-foreground"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="bg-transparent border border-border text-foreground rounded-2xl w-full p-3 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none resize-none transition-colors"
                id="message"
                name="message"
                placeholder="Please type your message here..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 text-sm font-medium bg-green-500/10 p-3 rounded-xl border border-green-500/20"
              >
                Message sent successfully!
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm font-medium bg-red-500/10 p-3 rounded-xl border border-red-500/20"
              >
                There was an error sending your message. Please try again.
              </motion.div>
            )}


            <div className="pt-4">
              <button
                className="w-full py-4 px-6 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-violet-500/20"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
