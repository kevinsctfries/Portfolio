import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <div>
        <header>
          <NavBar />
        </header>
        <div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
