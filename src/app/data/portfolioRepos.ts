export interface PortfolioRepo {
  name: string;
  desc: string;
  image: string;
}

export const portfolioRepos: PortfolioRepo[] = [
  {
    name: "ytt-gen",
    desc: "A tool to convert .ASS subtitles to .YTT format",
    image: "/logo.webp",
  },
];
