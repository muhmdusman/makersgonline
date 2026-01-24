import { StaticImageData } from "next/image"

import introIcon_1 from "@/assets/img/icon/1.webp";
import introIcon_2 from "@/assets/img/icon/2.webp";
import introIcon_3 from "@/assets/img/icon/3.webp";
import introIcon_4 from "@/assets/img/home-cyber/service/1.webp";
import introIcon_5 from "@/assets/img/home-cyber/service/2.webp";
import introIcon_6 from "@/assets/img/home-cyber/service/3.webp";
import introHoverIcon_1 from "@/assets/img/home-cyber/service/01.webp";
import introHoverIcon_2 from "@/assets/img/home-cyber/service/02.webp";
import introHoverIcon_3 from "@/assets/img/home-cyber/service/03.webp";

interface DataType {
   id: number;
   page: string;
   icon?: string;
   icon_img?: StaticImageData;
   hover_icon_img?: StaticImageData;
   title: string;
   desc: string;
}[];

const intro_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      icon: "icomoon-gear",
      title: "Custom Solutions",
      desc: "We build tailored web and mobile solutions designed specifically for your business needs and goals.",
   },
   {
      id: 2,
      page: "home_2",
      icon: "icomoon-time",
      title: "On-Time Delivery",
      desc: "Reliable project management ensures your projects are delivered on schedule without compromising quality.",
   },
   {
      id: 3,
      page: "home_2",
      icon: "icomoon-money",
      title: "Competitive Pricing",
      desc: "Get premium development and SEO services at competitive rates with transparent, flexible pricing options.",
   },

   // home_4

   {
      id: 1,
      page: "home_4",
      icon_img: introIcon_1,
      title: "Affordable Rates",
      desc: "High-quality services at competitive prices without hidden costs",
   },
   {
      id: 2,
      page: "home_4",
      icon_img: introIcon_2,
      title: "Expert Team",
      desc: "Years of combined experience in web, app development, and SEO",
   },
   {
      id: 3,
      page: "home_4",
      icon_img: introIcon_3,
      title: "Fast Turnaround",
      desc: "Quick project delivery without sacrificing quality standards",
   },

   // home_5

   {
      id: 1,
      page: "home_5",
      icon_img: introIcon_4,
      hover_icon_img: introHoverIcon_1,
      title: "Web Development",
      desc: "Responsive, modern, and scalable web applications built with latest technologies",
   },
   {
      id: 2,
      page: "home_5",
      icon_img: introIcon_5,
      hover_icon_img: introHoverIcon_2,
      title: "Mobile App Development",
      desc: "iOS, Android, and cross-platform applications with intuitive user interfaces",
   },
   {
      id: 3,
      page: "home_5",
      icon_img: introIcon_6,
      hover_icon_img: introHoverIcon_3,
      title: "SEO Optimization",
      desc: "Strategic SEO services to improve your online visibility and rankings",
   },
]

export default intro_data;