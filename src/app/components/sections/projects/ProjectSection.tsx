"use client";

import { useEffect, useState } from "react";
import { portfolioRepos } from "@/app/data/portfolioRepos";
import styles from "./ProjectSection.module.scss";

interface Repo {
  id: number;
  name: string;
  desc: string | null;
  html_url: string;
}

const ProjectSection = () => {
  const [projects, setProjects] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/kevinsctfries/repos")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const filteredAndSortedProjects = projects
    .filter(repo => portfolioRepos.some(pr => pr.name === repo.name))
    .sort((a, b) => {
      const idxA = portfolioRepos.findIndex(pr => pr.name === a.name);
      const idxB = portfolioRepos.findIndex(pr => pr.name === b.name);
      return idxA - idxB;
    });

  return (
    <div className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectsGrid}>
        {filteredAndSortedProjects.map(repo => {
          const portfolio = portfolioRepos.find(pr => pr.name === repo.name);
          return (
            <div key={repo.id} className={styles.projectCard}>
              <h3>{repo.name}</h3>
              <p>{portfolio?.desc || repo.desc}</p>
              {portfolio?.image && (
                // <img src={portfolio.image} alt={repo.name} />
                <img src="/logo.webp" alt={repo.name} />
              )}
              <div className={styles.projectLinks}>
                <a
                  className={styles.button}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer">
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

export default ProjectSection;
