import PDFIcon from "./assets/icons/pdf.png";
import CHROME from "./assets/icons/chrome.png";
import GITHUB from "./assets/icons/github.png";
import LINKEDIN from "./assets/icons/linkedin.png";
import NOTEPAD from "./assets/icons/notepad.webp";
import BAD_APPLE from "./assets/icons/bad_apple.png";
import GUESS_THE_GAME from "./assets/icons/guess_the_game.svg";
import { IApplications } from "./types";
const PDF = new URL('./assets/cv.pdf', import.meta.url);
const aboutme = new URL('./assets/aboutme.txt', import.meta.url);

export const MOBILE_NAVBAR_APPS: IApplications[] = [
  {
    name: "CV",
    icon: PDFIcon,
    src: PDF.href,
  },
  {
    name: "About me",
    icon: NOTEPAD,
    src: await fetch(aboutme.href).then(res => res.text()),
  },
];

export const MOBILE_APPS: IApplications[] = [
  {
    name: "CV",
    icon: PDFIcon,
    src: PDF.href,
  },
  {
    name: "About me",
    icon: NOTEPAD,
    src: await fetch(aboutme.href).then(res => res.text()),
  },
  {
    name: "Guess the anime",
    icon: GUESS_THE_GAME,
    src: "https://guesstheanime.app/",
  },
  {
    icon: CHROME,
    name: "Calendar",
    src: "https://css-calendary.vercel.app/",
  },
  {
    newTab: true,
    icon: GITHUB,
    name: "Github",
    src: "https://github.com/AnibalDBXD"
  },
  {
    newTab: true,
    icon: LINKEDIN,
    name: "LinkedIn",
    src: "https://www.linkedin.com/in/anibaloz"
  },
];

export const APPLICATIONS: IApplications[] = [
  {
    name: "CV",
    icon: PDFIcon,
    src: PDF.href,
  },
  {
    name: "About me",
    icon: NOTEPAD,
    src: await fetch(aboutme.href).then(res => res.text()),
  },
  {
    name: "Bad Apple ASCII",
    icon: BAD_APPLE,
    src: "https://bad-apple-ascii-textarea.vercel.app/",
    minWith: 950,
    minHeight: 600,
    defaultFullScreen: true,
  },
  {
    name: "Guess the anime",
    icon: GUESS_THE_GAME,
    minWith: 950,
    minHeight: 600,
    src: "https://guesstheanime.app/",
  }
];

export const DRAWS: IApplications[] = [
  {
    icon: CHROME,
    name: "Calendar",
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
  },
  {
    name: "Conway's game of life",
    icon: CHROME,
    src: "https://conway-game-of-life-eosin.vercel.app/",
  },
  {
    name: "About me",
    icon: NOTEPAD,
    src: await fetch(aboutme.href).then(res => res.text()),
  },
];

export const LINKS: IApplications[] = [
  {
    newTab: true,
    icon: GITHUB,
    name: "Github",
    src: "https://github.com/AnibalDBXD"
  },
  {
    newTab: true,
    icon: LINKEDIN,
    name: "LinkedIn",
    src: "https://www.linkedin.com/in/anibaloz"
  }
];