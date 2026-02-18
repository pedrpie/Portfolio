import { useRef } from "react";
import "./App.css";

// components
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";

export default function App() {

  const formacaoRef = useRef(null);
  const projetosRef = useRef(null);
  const contatoRef = useRef(null);

    function scrollToRef(ref) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }

  return (
    <>
      <div className="background-container">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="app-content">
        <Header
          goFormacao={() => scrollToRef(formacaoRef)}
          goProjetos={() => scrollToRef(projetosRef)}
          goContato={() => scrollToRef(contatoRef)}
        />

        <ProfileCard />
        
        <div ref={formacaoRef} className="scroll-mt-[100px]">
          <Education />
        </div>
        
        <div ref={projetosRef} className="scroll-mt-[100px]">
          <Projects />
        </div>
        
        <div ref={contatoRef}>
          <Contact/>
        </div>
        
        <Footer />
        
      </div>
    </>
  );
}
