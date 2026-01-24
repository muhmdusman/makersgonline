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
      title: "E-Commerce Platform",
   },
   {
      id: 2,
      page: "home_1",
      img: projectThumb_2,
      title: "Mobile App Development",
   },
   {
      id: 3,
      page: "home_1",
      img: projectThumb_3,
      title: "SEO Optimization Project",
   },
   {
      id: 4,
      page: "home_1",
      img: projectThumb_1,
      title: "Corporate Website",
   },
   {
      id: 5,
      page: "home_1",
      img: projectThumb_2,
      title: "SaaS Application",
   },
   {
      id: 6,
      page: "home_1",
      img: projectThumb_3,
      title: "Digital Marketing Campaign",
   },

   // home_2

   {
      id: 1,
      page: "home_2",
      img: project2Thumb_1,
      title: "E-Commerce Platform",
      desc:"Successfully built and deployed a full-featured e-commerce platform generating 300% ROI.",
   },
   {
      id: 2,
      page: "home_2",
      img: project2Thumb_1,
      title: "Mobile App Development",
      desc:"Created iOS and Android applications with 50K+ active users worldwide.",
   },
   {
      id: 3,
      page: "home_2",
      img: project2Thumb_1,
      title: "SEO Optimization",
      desc:"Improved organic traffic by 250% and achieved top rankings for competitive keywords.",
   },
   {
      id: 4,
      page: "home_2",
      img: project2Thumb_1,
      title: "Corporate Website Redesign",
      desc:"Modernized legacy website resulting in 40% increase in conversions.",
   },
];

export default project_data;