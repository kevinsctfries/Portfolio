export interface PortfolioRepo {
  name: string;
  desc: string;
  image: string;
}

export const portfolioRepos: PortfolioRepo[] = [
  {
    name: "kevinsctfries.github.io",
    desc: "My portfolio site!",
    image: "/public/logo.jpeg",
  },
  {
    name: "ohnotation",
    desc: "A tool to visualize algorithm complexity!",
    image: "/public/logo.jpeg",
  },
  {
    name: "UNet",
    desc: "Reddit-like social platform made from scratch!",
    image: "/public/logo.jpeg",
  },
  {
    name: "ytt-gen",
    desc: "A tool to convert .ASS subtitles to .YTT format",
    image: "/public/logo.jpeg",
  },
  {
    name: "choose-option-helper",
    desc: "A replication of the right-click menu in OSRS",
    image: "/public/logo.jpeg",
  },
  {
    name: "flashy",
    desc: "Locally ran AI powered flashcard generator",
    image: "/public/logo.jpeg",
  },
];
