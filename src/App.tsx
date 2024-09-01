import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { useEffect, useState } from "react";
// import "./components/globe/globe.js";
import GlobeComponent from "./components/globe/globe.tsx";

function App() {
  const [animate, setAnimate] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 10);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <div>
        <header>
          <NavBar />
        </header>
        <div className="row">
          <main className={animate ? "animate" : ""}>
            <Outlet />
          </main>
          <main className="content">
            <GlobeComponent />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              amet adipisci vel autem minus odio unde labore. Minus libero
              dolores nobis eius mollitia sapiente expedita, modi animi id a
              iure?
            </p>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
