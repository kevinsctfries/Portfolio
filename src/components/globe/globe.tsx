import React, { useEffect, useState } from "react";
import Globe from "react-globe.gl";
import "./globe.css";

const GlobeComponent: React.FC = () => {
  const [size, setSize] = useState({ width: 700, height: 700 });

  const updateSize = () => {
    // const newWidth = window.innerWidth * 0.5;
    // const newHeight = window.innerHeight * 0.5;
    const newWidth = window.innerWidth * 0.6;
    const newHeight = window.innerHeight * 0.6;
    setSize({ width: newWidth, height: newHeight });
  };

  useEffect(() => {
    updateSize(); // Set size initially
    window.addEventListener("resize", updateSize); // Update size on resize
    return () => window.removeEventListener("resize", updateSize); // Cleanup listener
  }, []);

  return (
    <div className="globeContainer">
      <Globe
        globeImageUrl="https://unpkg.com/three-globe@2.31.1/example/img/earth-night.jpg"
        backgroundImageUrl="https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png"
        backgroundColor="black"
        showAtmosphere={false}
        width={size.width}
        height={size.height}
      />
    </div>
  );
};

export default GlobeComponent;
