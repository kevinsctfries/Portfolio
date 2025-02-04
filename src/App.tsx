import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>Kevin Fries | Web Developer Portfolio</title>
        <meta
          name="description"
          content="I'm Kevin Fries, a web developer specializing in Next.js, TypeScript, and backend services. Check out my projects and resume."
        />
        <meta
          name="keywords"
          content="Kevin Fries, web developer, Next.js, TypeScript, portfolio, React, JavaScript, full-stack development, backend services"
        />
        <meta name="author" content="Kevin Fries" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kevinsctfries.github.io/" />
        <meta
          property="og:title"
          content="Kevin Fries | Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore my web development projects, resume, and expertise in Next.js, TypeScript, and backend services."
        />
        <meta
          property="og:image"
          content="https://kevinsctfries.github.io/og-image.jpg"
        />

        {/* Favicon & Theme Color */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="theme-color" content="#000000" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Kevin Fries",
            jobTitle: "Web Developer",
            url: "https://kevinsctfries.github.io/",
            sameAs: [
              "https://github.com/kevinsctfries",
              "https://www.linkedin.com/in/kevin-fries-097377302",
            ],
          })}
        </script>
      </Helmet>

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
