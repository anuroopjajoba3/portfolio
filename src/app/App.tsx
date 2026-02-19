import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { EducationExperience } from "./components/EducationExperience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect } from "react";

// Dark theme portfolio for Anuroop Jajoba
export default function App() {
  useEffect(() => {
    // Ensure body allows scrolling
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
    
    // Force all elements to allow scroll
    const style = document.createElement('style');
    style.textContent = `
      * { 
        overscroll-behavior: auto !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Navigation />
      <About />
      <Projects />
      <Skills />
      <EducationExperience />
      <Contact />
      <Footer />
    </div>
  );
}
