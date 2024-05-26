import "./App.css";
import "./scripts/sidebarCtn";

function App() {
  return (
    <>
      <div>
        <header>
          <a href="">GitHub</a>
          <a href="">Resume</a>
          <a href="">LinkedIn</a>
        </header>
        <main>
          <div className="bodyCtn">
            <div className="introTitle">
              <h1>Hello,</h1>
              <h2>
                my name is <span className="name">Kevin Fries</span>
              </h2>
              <h3>I am a web developer</h3>
            </div>
          </div>
          <div className="sidebarCtn">View my projects</div>
        </main>
      </div>
    </>
  );
}

export default App;
