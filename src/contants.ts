interface IApplications {
    name: string;
    onClick?: () => JSX.Element;
    icon: string;
}

const APPLICATIONS: IApplications[] = [
  {
    name: "CV",
    icon: "src/assets/icons/pdf.png"
  },
  {
    name: "Portfolio",
    icon: "src/assets/icons/chrome.png"
  }
];

export default APPLICATIONS;