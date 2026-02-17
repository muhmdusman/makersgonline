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
      id: 2,
      page: "home_2",
      title: "Years Experience",
      count: 2,
      counter_text: "+",
   },
   {
      id: 2,
      page: "home_2",
      title: "Projects Completed",
      count: 20,
      counter_text: "+",
   },
   {
      id: 3,
      page: "home_2",
      title: "Happy Clients",
      count: 15,
      counter_text: "+",
   },
   

   // home_5
   
   {
      id: 1,
      page: "home_5",
      title:"Cyber Security Projects",
      desc: "Praesent pellentesque lacus lectuseu convallis ornare",
      count: 58,
      counter_text: "M",
      count_bg:counter_bg,
   },
   {
      id: 2,
      page: "home_5",
      title:"Smart Home Protection",
      desc: "Praesent pellentesque lacus lectuseu convallis ornare",
      count: 300,
      counter_text: "+",
      count_bg:counter_bg,
   },
   {
      id: 3,
      page: "home_5",
      title:"Programmers Team",
      desc: "Praesent pellentesque lacus lectuseu convallis ornare",
      count: 80,
      counter_text: "+",
      count_bg:counter_bg,
   },
]

export default counter_data;