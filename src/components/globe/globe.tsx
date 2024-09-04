import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import type { GlobeMethods } from "react-globe.gl";
import "./globe.css";

const GlobeComponent = () => {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);

  useEffect(() => {
    if (globeEl.current) {
      const globe = globeEl.current;

      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = -0.35;
    }
  }, []);

  return (
    <div className="globeContainer">
      <Globe
        ref={globeEl} // Pass the ref to the Globe component
        globeImageUrl="https://unpkg.com/three-globe@2.31.1/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        showAtmosphere={true}
      />
    </div>
  );
};

export default GlobeComponent;
