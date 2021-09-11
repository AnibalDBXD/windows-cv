import PDF from "./assets/icons/pdf.png";
import CHROME from "./assets/icons/chrome.png";

interface IApplications {
    name: string;
    src?: string;
    icon: string;
  id: number;
}

const APPLICATIONS: IApplications[] = [
  {
    name: "CV",
    icon: PDF,
    src: "../src/assets/cv.pdf",
    id: 1
  },
  {
    name: "Portfolio",
    icon: CHROME,
    src: "https://anibal.cf",
    id: 2
  },
  {
    name: "Blog",
    icon: CHROME,
    src: "https://anibaldbxd.cf",
    id: 2
  },
];

export default APPLICATIONS;