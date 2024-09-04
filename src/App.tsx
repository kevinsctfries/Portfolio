import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { useEffect, useState } from "react";
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
            <p>
              I'M STILL WORKING ON THIS SITE. UNDER CONSTRUCTION. PLEASE DON'T
              JUDGE!
            </p>
            <p>
              I'M STILL WORKING ON THIS SITE. UNDER CONSTRUCTION. PLEASE DON'T
              JUDGE!
            </p>
            <p>
              I'M STILL WORKING ON THIS SITE. UNDER CONSTRUCTION. PLEASE DON'T
              JUDGE!
            </p>
          </main>
        </div>
        <GlobeComponent />
      </div>
    </>
  );
}

export default App;
