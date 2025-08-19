export interface PortfolioRepo {
  name: string;
  desc: string;
  image: string;
  link: string;
}

export const portfolioRepos: PortfolioRepo[] = [
  {
    name: "ytt-gen",
    desc: "A tool to convert .ASS subtitles to .YTT format",
    image: "/logo.webp",
    link: "",
  },
  {
    name: "day-trader",
    desc: "A fun game I made to simulate the fluctuating prices of stocks",
    image: "/logo.webp",
    link: "daytrader.kevinsctfries.com",
  },
];
