import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Reviews from "@/components/sections/Reviews";
import About from "@/components/sections/About";
import Classes from "@/components/sections/Classes";
import Instructors from "@/components/sections/Instructors";
import Contact from "@/components/sections/Contact";
import Promise from "@/components/sections/Promise";
import Style from "@/components/sections/Style";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reviews />
        <About />
        <Classes />
        <Instructors />
        <Promise />
        <Style />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
