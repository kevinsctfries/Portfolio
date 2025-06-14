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
    desc: "A learning resource for understanding time and space complexity",
    image: "/public/ohnotation.png",
  },
  {
    name: "UNet",
    desc: "Reddit-like social platform made from scratch!",
    image: "/public/unet.png",
  },
  {
    name: "ytt-gen",
    desc: "A tool to convert .ASS subtitles to .YTT format",
    image: "/public/logo.jpeg",
  },
  {
    name: "choose-option-helper",
    desc: "A replication of the right-click menu in OSRS",
    image: "/public/chooseoptionhelper.png",
  },
  {
    name: "flashy",
    desc: "Locally ran AI powered flashcard generator",
    image: "/public/flashy.png",
  },
];
