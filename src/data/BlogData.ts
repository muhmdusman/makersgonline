import { StaticImageData } from "next/image";

import blogThumb_1 from "@/assets/img/blog/5.webp";
import blogThumb_2 from "@/assets/img/blog/6.webp";
import blogThumb_3 from "@/assets/img/blog/7.webp";
import blogThumb_4 from "@/assets/img/blog/10.webp";
import blogThumb_5 from "@/assets/img/blog/11.webp";
import blogThumb_6 from "@/assets/img/blog/12.webp";
import blogThumb_7 from "@/assets/img/blog/8.webp";
import blogThumb_8 from "@/assets/img/blog/9.webp";

interface DataType {
   id: number;
   page: string;
   img: StaticImageData;
   date: string;
   comment?: number;
   title: string;
   desc?: string;
}[];

const blog_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      img: blogThumb_1,
      date: "15 Jan 2024",
      title: "Top 10 Web Development Trends in 2024",
      desc: "Discover the latest trends in web development including AI integration, performance optimization, and modern frameworks",
   },
   {
      id: 2,
      page: "home_1",
      img: blogThumb_2,
      date: "10 Jan 2024",
      title: "Complete Guide to SEO Success",
      desc: "Learn proven SEO strategies to boost your organic traffic and improve your search engine rankings",
   },
   {
      id: 3,
      page: "home_1",
      img: blogThumb_3,
      date: "05 Jan 2024",
      title: "Mobile App Development Best Practices",
      desc: "Explore best practices for creating engaging, performant mobile applications for iOS and Android",
   },

   // home_3

   {
      id: 1,
      page: "home_3",
      img: blogThumb_7,
      date: "15",
      comment: 12,
      title: "Web Development Best Practices",
      desc: "Essential tips and tricks for building scalable, maintainable web applications",
   },
   {
      id: 2,
      page: "home_3",
      img: blogThumb_8,
      date: "12",
      comment: 8,
      title: "SEO Tips for E-Commerce Sites",
      desc: "Maximize your online store visibility with effective SEO strategies tailored for e-commerce",
   },

   // home_4

   {
      id: 1,
      page: "home_4",
      img: blogThumb_1,
      date: "January 2024",
      title: "Digital Transformation Through Web Technology",
   },
   {
      id: 2,
      page: "home_4",
      img: blogThumb_2,
      date: "January 2024",
      title: "Mobile First: Designing for Every Device",
   },
   {
      id: 3,
      page: "home_4",
      img: blogThumb_3,
      date: "January 2024",
      title: "Organic Growth Through SEO Excellence",
   },

   // home_5

   {
      id: 1,
      page: "home_5",
      img: blogThumb_4,
      date: "20 Jan 2024",
      title: "React.js and Modern JavaScript Frameworks",
      desc: "Understanding the power of modern frameworks in building responsive web applications",
   },
   {
      id: 2,
      page: "home_5",
      img: blogThumb_5,
      date: "18 Jan 2024",
      title: "Keyword Research: The Foundation of SEO",
      desc: "Learn how to find the right keywords to boost your website's search engine visibility",
   },
   {
      id: 3,
      page: "home_5",
      img: blogThumb_6,
      date: "16 Jan 2024",
      title: "User Experience in App Development",
      desc: "Creating intuitive and engaging user experiences for mobile and desktop applications",
   },
]

export default blog_data;