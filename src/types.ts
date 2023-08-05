export interface IApplications {
  name: string;
  src: string;
  icon: string;
  newTab?: boolean;
  minWith?: number;
  minHeight?: number;
  defaultFullScreen?: boolean;
}