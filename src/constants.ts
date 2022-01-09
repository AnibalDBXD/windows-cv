import PDFIcon from "./assets/icons/pdf.png";
import CHROME from "./assets/icons/chrome.png";
import { IApplications } from "./types";
const PDF = new URL('./assets/cv.pdf', import.meta.url);

export const APPLICATIONS: IApplications[] = [
  {
    name: "CV",
    icon: PDFIcon,
    src: PDF.href,
  },
  {
    name: "Portfolio",
    icon: CHROME,
    src: "https://anibal.cf",
  },
  {
    name: "Blog",
    icon: CHROME,
    src: "https://anibaldbxd.cf",
  },
];

export const DRAWS: IApplications[] = [
  {
    icon: CHROME,
    name: "Calendary",
    src: "https://css-calendary.vercel.app/",
  },
  {
    icon: CHROME,
    name: "Clock",
    src: "https://css-clock.vercel.app/",
  },
  {
    icon: CHROME,
    name: "3D Cube",
    src: "https://css-minecraft-cube.vercel.app/",
  },
  {
    icon: CHROME,
    name: "Cake",
    src: "https://css-cake.vercel.app/",
  }
];