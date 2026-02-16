import { StaticImageData } from "next/image";

import projectThumb_1 from "@/assets/img/project/project6.png";
import projectThumb_2 from "@/assets/img/project/popup-project-2.png";
import projectThumb_3 from "@/assets/img/project/altaj.png";
import projectThumb_4 from "@/assets/img/project/popup-project-1.png";
import projectThumb_5 from "@/assets/img/project/popup-project-3.png";
import projectThumb_6 from "@/assets/img/project/media.png";

interface DataType {
   id: number,
   page: string;
   img: StaticImageData;
   title: string;
   desc?:string;
}[];

const project_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      img: projectThumb_1,
      title: "Taleem ka Safar",
   },
   {
      id: 2,
      page: "home_1",
      img: projectThumb_2,
      title: "AQ Solar Solutions",
   },
   {
      id: 3,
      page: "home_1",
      img: projectThumb_3,
      title: "Al Taj Ristorante",
   },
   {
      id: 4,
      page: "home_1",
      img: projectThumb_4,
      title: "Zocial Plug",
   },
   {
      id: 5,
      page: "home_1",
      img: projectThumb_5,
      title: "Digitaluq",
   },
   {
      id: 6,
      page: "home_1",
      img: projectThumb_6,
      title: "Money Makers Media",
   },

];

export default project_data;