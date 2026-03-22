import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./i18n/LanguageProvider";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark font-body text-[#F0F0F0] overflow-x-hidden w-full">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
