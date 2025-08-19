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
    image: "/daytrader.webp",
    link: "daytrader.kevinsctfries.com",
  },
  {
    name: "choose-option-helper",
    desc: "A tool to simulate the Choose Option menu in OSRS",
    image: "/chooseoptionhelper.webp",
    link: "",
  },
  {
    name: "flashy",
    desc: "A locally ran AI powered flash card and quizzing tool",
    image: "/flashy.webp",
    link: "",
  },
  {
    name: "UNet",
    desc: "A social networking platform inspired by Reddit",
    image: "/unet.webp",
    link: "",
  },
];
