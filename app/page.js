import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Qualification from "@/components/Qualification";
import MyProject from "@/components/MyProject";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import MyTechStack from "@/components/MyTechStack";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen container mx-auto">
      <ScrollReveal />
      <Navbar />
      <Hero />
      <About />
      <MyProject />
      <MyTechStack />
      <Qualification />
      <ContactMe />
      <Footer />
    </div>
  );
}
