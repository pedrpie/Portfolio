import React, { useRef, lazy, Suspense } from "react";
import "./App.css";

// components
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
const Education = lazy(() => import("./components/Education"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Particles = lazy(() => import("./components/Particles"));

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

        <div ref={formacaoRef} className="scroll-mt-25">
          <Suspense fallback={<div className="sr-only">Loading section</div>}>
            <Education />
          </Suspense>
        </div>

        <div ref={projetosRef} className="scroll-mt-25">
          <Suspense fallback={<div className="sr-only">Loading section</div>}>
            <Projects />
          </Suspense>
        </div>

        <div ref={contatoRef}>
          <Suspense fallback={<div className="sr-only">Loading section</div>}>
            <Contact />
          </Suspense>
        </div>

        <Suspense fallback={<div className="sr-only">Loading footer</div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}
