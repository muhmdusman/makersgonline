import { StaticImageData } from "next/image";

export interface ProjectDetails {
   type: string;
   languages: string[];
   platform: string;
   country: string;
   liveUrl: string;
}

export interface ProjectItem {
   id: number;
   thumb: StaticImageData | string;
   title: string;
   desc: string;
   details: ProjectDetails;
}

export interface InnerProjectData {
   id: number;
   page: string;
   thumb?: StaticImageData | string;
   title?: string;
   desc?: string;
   details?: ProjectDetails;
   item_two?: ProjectItem[];
}
