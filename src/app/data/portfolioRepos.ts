export interface PortfolioRepo {
  name: string;
  desc: string;
  image: string;
  link: string;
}

export const portfolioRepos: PortfolioRepo[] = [
  {
    name: "day-trader",
    desc: "A fun game I made to simulate the fluctuating prices of stocks",
    image: "/daytrader.webp",
    link: "daytrader.kevinsctfries.com",
  },
  {
    name: "FingerTapJS",
    desc: "A browser-based finger tapping test built with JavaScript and MediaPipe",
    image: "/fingertapjs.webp",
    link: "fingertapjs.kevinsctfries.com",
  },
  {
    name: "ytt-gen",
    desc: "A tool to convert .ASS subtitles to .YTT format",
    image: "/logo.webp",
    link: "",
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
