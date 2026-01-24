import { StaticImageData } from "next/image";

import serviceIcon_1 from "@/assets/img/home-cyber/service/service-01.webp";
import serviceIcon_2 from "@/assets/img/home-cyber/service/service-02.webp";
import serviceIcon_3 from "@/assets/img/home-cyber/service/service-03.webp";
import serviceIcon_4 from "@/assets/img/home-cyber/service/service-04.webp";
import serviceIcon_5 from "@/assets/img/home-cyber/service/service-05.webp";
import serviceIcon_6 from "@/assets/img/home-cyber/service/service-06.webp";

import serviceHoverIcon_1 from "@/assets/img/home-cyber/service/service-001.webp";
import serviceHoverIcon_2 from "@/assets/img/home-cyber/service/service-002.webp";
import serviceHoverIcon_3 from "@/assets/img/home-cyber/service/service-003.webp";
import serviceHoverIcon_4 from "@/assets/img/home-cyber/service/service-004.webp";
import serviceHoverIcon_5 from "@/assets/img/home-cyber/service/service-005.webp";
import serviceHoverIcon_6 from "@/assets/img/home-cyber/service/service-006.webp";

interface DataType {
   id: number;
   page: string;
   icon?: string;
   title: string;
   desc: string;
   icon_img?:StaticImageData;
   hover_icon_img?:StaticImageData;
}[];

const service_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      icon: "icomoon-layer",
      title: "Web Development",
      desc: "Build responsive, modern websites using latest technologies. We create high-performance web applications tailored to your business needs.",
   },
   {
      id: 2,
      page: "home_1",
      icon: "icomoon-application",
      title: "App Development",
      desc: "Develop powerful mobile and desktop applications for iOS, Android, and cross-platform solutions with intuitive user interfaces.",
   },
   {
      id: 3,
      page: "home_1",
      icon: "icomoon-cloud-data",
      title: "SEO Services",
      desc: "Optimize your online presence with proven SEO strategies. Increase visibility, drive organic traffic, and boost your rankings on search engines.",
   },
   {
      id: 4,
      page: "home_1",
      icon: "icomoon-megaphone",
      title: "Digital Marketing",
      desc: "Comprehensive digital marketing solutions including social media, content marketing, and paid advertising to grow your brand.",
   },

   // home_2
   {
      id: 1,
      page: "home_2",
      icon: "icomoon-layer",
      title: "Web Development",
      desc: "Build responsive, modern websites using latest technologies. We create high-performance web applications tailored to your business needs.",
   },
   {
      id: 2,
      page: "home_2",
      icon: "icomoon-application",
      title: "App Development",
      desc: "Develop powerful mobile and desktop applications for iOS, Android, and cross-platform solutions with intuitive user interfaces.",
   },
   {
      id: 3,
      page: "home_2",
      icon: "icomoon-cloud-data",
      title: "SEO Services",
      desc: "Optimize your online presence with proven SEO strategies. Increase visibility, drive organic traffic, and boost your rankings on search engines.",
   },
   {
      id: 4,
      page: "home_2",
      icon: "icomoon-megaphone",
      title: "Digital Marketing",
      desc: "Comprehensive digital marketing solutions including social media, content marketing, and paid advertising to grow your brand.",
   },
   {
      id: 5,
      page: "home_2",
      icon: "icomoon-lock",
      title: "Website Security",
      desc: "Protect your digital assets with robust security implementations, SSL certificates, and regular security audits.",
   },
   {
      id: 6,
      page: "home_2",
      icon: "icomoon-magnifiying-glass",
      title: "Analytics & Insights",
      desc: "Track and analyze user behavior with advanced analytics to make data-driven decisions for your business.",
   },

   // home_5
   
   {
      id: 1,
      page: "home_5",
      icon_img:serviceIcon_1,
      hover_icon_img:serviceHoverIcon_1,
      title: "Responsive Web Design",
      desc: "Create stunning, responsive websites that work perfectly on all devices and provide excellent user experiences.",
   },
   {
      id: 2,
      page: "home_5",
      icon_img:serviceIcon_2,
      hover_icon_img:serviceHoverIcon_2,
      title: "Native Mobile Apps",
      desc: "Build powerful iOS and Android applications with intuitive interfaces and seamless performance.",
   },
   {
      id: 3,
      page: "home_5",
      icon_img:serviceIcon_3,
      hover_icon_img:serviceHoverIcon_3,
      title: "E-Commerce Solutions",
      desc: "Develop complete e-commerce platforms with payment integration and inventory management systems.",
   },
   {
      id: 4,
      page: "home_5",
      icon_img:serviceIcon_4,
      hover_icon_img:serviceHoverIcon_4,
      title: "SEO Optimization",
      desc: "Boost your organic visibility with comprehensive SEO strategies and keyword optimization.",
   },
   {
      id: 5,
      page: "home_5",
      icon_img:serviceIcon_5,
      hover_icon_img:serviceHoverIcon_5,
      title: "Digital Marketing",
      desc: "Comprehensive digital marketing campaigns including social media, content, and paid advertising.",
   },
   {
      id: 6,
      page: "home_5",
      icon_img:serviceIcon_6,
      hover_icon_img:serviceHoverIcon_6,
      title: "Analytics & Reporting",
      desc: "Track performance with advanced analytics and detailed reporting to optimize your digital presence.",
   },

   // inner_page
   
   {
      id: 1,
      page: "inner_page",
      icon:"icomoon-profile",
      title: "Front-End Development",
      desc: "Modern, responsive front-end development using latest frameworks and best practices.",
   }, 
   {
      id: 2,
      page: "inner_page",
      icon:"icomoon-layer",
      title: "Back-End Development",
      desc: "Robust server-side solutions with scalable architecture and secure data management.",
   },
   {
      id: 3,
      page: "inner_page",
      icon:"icomoon-application",
      title: "Mobile Application Development",
      desc: "Native and cross-platform mobile app development for iOS and Android platforms.",
   },
   {
      id: 4,
      page: "inner_page",
      icon:"icomoon-cloud-data",
      title: "Cloud Integration",
      desc: "Seamless cloud services integration for scalability and reliability of your applications.",
   },
   {
      id: 5,
      page: "inner_page",
      icon:"icomoon-megaphone",
      title: "Content Marketing",
      desc: "Strategic content creation and marketing to drive engagement and build brand authority.",
   },
   {
      id: 6,
      page: "inner_page",
      icon:"icomoon-lock",
      title: "Website Security",
      desc: "Implement SSL certificates, secure authentication, and best security practices.",
   },
   {
      id: 7,
      page: "inner_page",
      icon:"icomoon-magnifiying-glass",
      title: "Technical SEO",
      desc: "Technical optimization including site speed, structure, and indexing improvements.",
   },
   {
      id: 8,
      page: "inner_page",
      icon:"icomoon-computer",
      title: "UI/UX Design",
      desc: "Beautiful and intuitive user interface and experience design for web and mobile apps.",
   },
   {
      id: 9,
      page: "inner_page",
      icon:"icomoon-deep-learning",
      title: "Performance Optimization",
      desc: "Optimize website and app performance for faster load times and better user experience.",
   },
]

export default service_data;