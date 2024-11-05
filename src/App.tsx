import {  BgGridWrapper } from "./components/BgGridWrapper";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsAndAchievementsSection } from "./components/ProjectsAndAchievementsSection";
import { ServiceSection } from "./components/ServicesSection";

export const App = () => {
  return (
    <main>
      <BgGridWrapper>
        <section className="flex flex-col min-h-screen text-white">
          <Navbar />
          <section className="flex-grow">
            <HeroSection/>
            <ServiceSection/>
            <ProjectsAndAchievementsSection/>
            <ContactSection/>
          </section>
          <Footer />
        </section>
      </BgGridWrapper>
    </main>
  );
};
