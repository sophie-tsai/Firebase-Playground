import React, { useRef, useState, useEffect } from "react";
import Authentication from "../Authentication/Authentication";
import "./LandingPage.css";
import NET from "vanta/dist/vanta.net.min";

import * as THREE from "three";

function LandingPage() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const backgroundRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: backgroundRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x2e5168,
          backgroundColor: 0xe5dada,
          points: 7.0,
          maxDistance: 21.0,
          spacing: 19.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={backgroundRef} className="landing-page">
      <h1 className="title-landing-page">HomeQuarters</h1>
      <h2 className="subtitle-landing-page">connect with your housemates</h2>
      <Authentication />
    </div>
  );
}

export default LandingPage;
