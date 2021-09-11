interface IApplications {
    name: string;
    src?: string;
    icon: string;
  id: number;
}

const PDF = "src/assets/icons/pdf.png";
const CHROME = "src/assets/icons/chrome.png";

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