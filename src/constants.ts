import PDFIcon from "./assets/icons/pdf.png";
import CHROME from "./assets/icons/chrome.png";
const PDF = new URL('./assets/cv.pdf', import.meta.url);
console.log(PDF);
interface IApplications {
    name: string;
    src?: string;
    icon: string;
  id: number;
}

const APPLICATIONS: IApplications[] = [
  {
    name: "CV",
    icon: PDFIcon,
    src: PDF.href,
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