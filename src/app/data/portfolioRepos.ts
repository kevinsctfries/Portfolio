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
  {
    name: "day-trader",
    desc: "A fun game I made to simulate the fluctuating prices of stocks aaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa",
    image: "/logo.webp",
  },
];
