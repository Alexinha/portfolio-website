import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { themeMain } from "./theme";

// tab title
export const metadata = {
  title: "Alexina's Portfolio",
};

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: themeMain.colors.background }}
    >
      <Navbar />
      <div className="container mt-32 mx-auto px-6 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
