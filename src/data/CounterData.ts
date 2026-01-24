import { StaticImageData } from "next/image";

import counter_bg from "@/assets/img/home-cyber/service/fact-bg.webp";

interface DataType {
   id: number;
   page: string;
   title: string;
   count: number;
   counter_text: string
   count_bg?:StaticImageData
   desc?:string
}[];

const counter_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      title: "Years Experience",
      count: 8,
      counter_text: "+",
   },
   {
      id: 2,
      page: "home_2",
      title: "Happy Clients",
      count: 150,
      counter_text: "+",
   },
   {
      id: 3,
      page: "home_2",
      title: "Projects Completed",
      count: 300,
      counter_text: "+",
   },
   {
      id: 4,
      page: "home_2",
      title: "Team Members",
      count: 12,
      counter_text: "+",
   },

   // home_5
   
   {
      id: 1,
      page: "home_5",
      title:"Websites Built",
      desc: "High-performance websites created for various industries",
      count: 200,
      counter_text: "+",
      count_bg:counter_bg,
   },
   {
      id: 2,
      page: "home_5",
      title:"Mobile Apps Delivered",
      desc: "Innovative apps for iOS and Android platforms",
      count: 85,
      counter_text: "+",
      count_bg:counter_bg,
   },
   {
      id: 3,
      page: "home_5",
      title:"SEO Campaigns",
      desc: "Successful SEO strategies improving client rankings",
      count: 120,
      counter_text: "+",
      count_bg:counter_bg,
   },
]

export default counter_data;