interface IApplications {
    name: string;
    onClick?: () => void;
    icon: string;
}

const APPLICATIONS: IApplications[] = [
  {
    name: "CV",
    icon: "src/assets/icons/pdf.png",
    onClick: (): void => alert("CV")
  },
  {
    name: "Portfolio",
    icon: "src/assets/icons/chrome.png",
    onClick: (): void => alert("Portoflio")
  }
];

export default APPLICATIONS;