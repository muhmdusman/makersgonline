import { StaticImageData } from "next/image";

import projectThumb_1 from "@/assets/img/project/1.webp";
import projectThumb_2 from "@/assets/img/project/2.webp";
import projectThumb_3 from "@/assets/img/project/3.webp";
import project2Thumb_1 from "@/assets/img/project/6.webp";

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
      title: "Data solution",
   },
   {
      id: 2,
      page: "home_1",
      img: projectThumb_2,
      title: "It management",
   },
   {
      id: 3,
      page: "home_1",
      img: projectThumb_3,
      title: "Market research",
   },
   {
      id: 4,
      page: "home_1",
      img: projectThumb_1,
      title: "Data solution",
   },
   {
      id: 5,
      page: "home_1",
      img: projectThumb_2,
      title: "It management",
   },
   {
      id: 6,
      page: "home_1",
      img: projectThumb_3,
      title: "Market research",
   },

];

export default project_data;