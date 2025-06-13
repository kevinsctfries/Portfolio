import { useEffect, useState } from "react";
import "./projectspage.scss";
import { portfolioRepos } from "./portfolioRepos";

interface Repo {
  id: number;
  name: string;
  desc: string | null;
  html_url: string;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/kevinsctfries/repos")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects
          .filter(repo => portfolioRepos.some(pr => pr.name === repo.name))
          .map(repo => {
            const portfolio = portfolioRepos.find(pr => pr.name === repo.name);
            return (
              <div key={repo.id} className="project-card">
                <h3>{repo.name}</h3>
                <p>{portfolio?.desc || repo.desc}</p>
                {portfolio?.image && (
                  <img src={portfolio.image} alt={repo.name} />
                )}
                <div className="project-links">
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectsPage;
