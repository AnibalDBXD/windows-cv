interface IApplications {
    name: string;
    src?: string;
    icon: string;
  id: number;
}

const APPLICATIONS: IApplications[] = [
  {
    name: "CV",
    icon: "src/assets/icons/pdf.png",
    src: "../src/assets/cv.pdf",
    id: 1
  },
  {
    name: "Portfolio",
    icon: "src/assets/icons/chrome.png",
    src: "../src/assets/cv.pdf",
    id: 2

  }
];

export default APPLICATIONS;