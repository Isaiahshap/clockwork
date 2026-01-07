import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import BootcampBanner from "@/components/sections/BootcampBanner";
import Marquee from "@/components/sections/Marquee";
import Reviews from "@/components/sections/Reviews";
import About from "@/components/sections/About";
import Classes from "@/components/sections/Classes";
import BootcampPromo from "@/components/sections/BootcampPromo";
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
        <BootcampBanner />
        <Marquee />
        <Reviews />
        <About />
        <Classes />
        <BootcampPromo />
        <Instructors />
        <Promise />
        <Style />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
