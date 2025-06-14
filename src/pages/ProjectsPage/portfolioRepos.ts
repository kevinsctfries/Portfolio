import logo from "../../assets/logo.jpeg";
import ohnotation from "../../assets/ohnotation.png";
import unet from "../../assets/unet.png";
import chooseOptionHelper from "../../assets/chooseoptionhelper.png";
import flashy from "../../assets/flashy.png";

export interface PortfolioRepo {
  name: string;
  desc: string;
  image: string;
}

export const portfolioRepos: PortfolioRepo[] = [
  {
    name: "kevinsctfries.github.io",
    desc: "My portfolio site!",
    image: logo,
  },
  {
    name: "ohnotation",
    desc: "A learning resource for understanding time and space complexity",
    image: ohnotation,
  },
  {
    name: "UNet",
    desc: "Reddit-like social platform made from scratch!",
    image: unet,
  },
  {
    name: "ytt-gen",
    desc: "A tool to convert .ASS subtitles to .YTT format",
    image: logo,
  },
  {
    name: "choose-option-helper",
    desc: "A replication of the right-click menu in OSRS",
    image: chooseOptionHelper,
  },
  {
    name: "flashy",
    desc: "Locally ran AI powered flashcard generator",
    image: flashy,
  },
];
