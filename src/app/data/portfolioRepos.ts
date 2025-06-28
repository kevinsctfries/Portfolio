export interface PortfolioRepo {
  name: string;
  desc: string;
  image: string;
}

export const portfolioRepos: PortfolioRepo[] = [
  {
    name: "kevinsctfries.github.io",
    desc: "My portfolio site!",
    image: "/portfolio.webp",
  },
  {
    name: "ohnotation",
    desc: "A site I made to assist me in learning time and space complexity",
    image: "/ohnotation.webp",
  },
  {
    name: "UNet",
    desc: "Reddit-like social platform made from scratch!",
    image: "/unet.webp",
  },
  {
    name: "ytt-gen",
    desc: "A tool to convert .ASS subtitles to .YTT format",
    image: "/logo.webp",
  },
  {
    name: "choose-option-helper",
    desc: "A replication of the right-click menu in OSRS",
    image: "/chooseoptionhelper.webp",
  },
  {
    name: "flashy",
    desc: "Locally ran AI powered flashcard generator",
    image: "/flashy.webp",
  },
];
