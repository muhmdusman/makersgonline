import { StaticImageData } from "next/image";

import testiThumb_1 from "@/assets/img/testimonial/1.webp";
import testiThumb_2 from "@/assets/img/testimonial/2.webp";
import testiThumb_3 from "@/assets/img/team/1.webp";
import testiThumb_4 from "@/assets/img/team/2.webp";
import testiThumb_5 from "@/assets/img/team/3.webp";
import testiThumb_6 from "@/assets/img/team/4.webp";
import testimonialIcon_1 from "@/assets/img/testimonial/4.webp"
import testimonialIcon_2 from "@/assets/img/about/h5-2.webp"
import testimonialIcon_3 from "@/assets/img/testimonial/02.webp"

interface DataType {
   id: number;
   page: string;
   img: StaticImageData | string;
   name: string;
   designation: string;
   desc: string;
}[];

const testimonial_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Ahmed Hassan",
      designation: "CEO, Tech Solutions Pakistan",
      desc: "Working with Makers Go Online was an outstanding experience. Their team delivered a professional website that exceeded our expectations. The attention to detail and commitment to quality is remarkable. Highly recommended for anyone looking for web development services.",
   },
   {
      id: 2,
      page: "home_1",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Fatima Khan",
      designation: "Director, Global Retail",
      desc: "The e-commerce platform they built for us has transformed our business. Sales have increased significantly, and customer feedback has been overwhelmingly positive. Their expertise in Shopify development is unmatched. Great team to work with!",
   },
   {
      id: 3,
      page: "home_1",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
      name: "Muhammad Ali",
      designation: "Founder, Education Hub",
      desc: "They created an amazing educational platform for our students. The custom features and user-friendly interface have made learning more accessible. Professional, responsive, and delivered on time. We couldn't be happier with the results!",
   },
   {
      id: 4,
      page: "home_1",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Ayesha Malik",
      designation: "Marketing Manager, UAE",
      desc: "Our new website has completely changed how we connect with clients. The SEO optimization and modern design have brought in more leads than ever before. Their WordPress expertise is top-notch. Excellent service from start to finish!",
   },

   // home_2

   {
      id: 1,
      page: "home_2",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Usman Tariq",
      designation: "Business Owner, Karachi",
      desc: "Professional web development services with exceptional results. Our online presence has grown tremendously since launching the new site. Fast, reliable, and truly understanding of business needs. Highly recommend their services!",
   },
   {
      id: 2,
      page: "home_2",
      img: "https://randomuser.me/api/portraits/women/32.jpg",
      name: "Sana Iqbal",
      designation: "Restaurant Owner, Italy",
      desc: "They built a beautiful website for our restaurant that perfectly captures our brand. The online ordering system works flawlessly, and customers love it. Great communication throughout the project. Five stars!",
   },
   {
      id: 3,
      page: "home_2",
      img: "https://randomuser.me/api/portraits/men/67.jpg",
      name: "Bilal Ahmed",
      designation: "Digital Marketing Agency, USA",
      desc: "Outstanding web development work! Our agency website now stands out from competitors. The custom design and fast loading speed have impressed all our clients. Professional team with great expertise.",
   },
   {
      id: 4,
      page: "home_2",
      img: "https://randomuser.me/api/portraits/women/55.jpg",
      name: "Zainab Hussain",
      designation: "Solar Company Director",
      desc: "The website they created has been instrumental in growing our solar business. Lead generation has increased by 300%. SEO-optimized, mobile-friendly, and exactly what we needed. Excellent work!",
   },
   {
      id: 5,
      page: "home_2",
      img: "https://randomuser.me/api/portraits/men/78.jpg",
      name: "Hassan Raza",
      designation: "Startup Founder, Pakistan",
      desc: "From concept to launch, they handled everything professionally. Our e-commerce store is performing beyond expectations. Great pricing, excellent quality, and fantastic support. Will definitely work with them again!",
   },
   {
      id: 6,
      page: "home_2",
      img: "https://randomuser.me/api/portraits/women/72.jpg",
      name: "Mariam Sheikh",
      designation: "News Magazine Editor, UAE",
      desc: "They transformed our news magazine website into a modern, fast-loading platform. Reader engagement has doubled, and content delivery is seamless. Professional WordPress development at its best!",
   },

   // home_3

   {
      id: 1,
      page: "home_3",
      img: "https://randomuser.me/api/portraits/men/23.jpg",
      name: "Omar Farooq",
      designation: "IT Consultant",
      desc: "Exceptional web development services with cutting-edge technology. Clean code, modern design, and outstanding performance. They truly understand what businesses need online!",
   },
   {
      id: 2,
      page: "home_3",
      img: "https://randomuser.me/api/portraits/women/28.jpg",
      name: "Hina Abbas",
      designation: "Brand Manager",
      desc: "Our website redesign was handled perfectly from start to finish. The new look has elevated our brand significantly. Professional, creative, and technically excellent!",
   },
   {
      id: 3,
      page: "home_3",
      img: "https://randomuser.me/api/portraits/men/36.jpg",
      name: "Imran Yousaf",
      designation: "E-Commerce Director",
      desc: "Best decision we made was hiring them for our online store. Sales are up, customers are happy, and the backend is easy to manage. Highly skilled team!",
   },
   {
      id: 4,
      page: "home_3",
      img: "https://randomuser.me/api/portraits/women/41.jpg",
      name: "Rabia Noor",
      designation: "Education Platform Owner",
      desc: "They built our educational platform with custom features that perfectly fit our needs. Student satisfaction has soared. Brilliant work and great support!",
   },

   // home_4

   {
      id: 1,
      page: "home_4",
      img: "https://randomuser.me/api/portraits/men/59.jpg",
      name: "Kamran Shah",
      designation: "Tech Entrepreneur, Lahore",
      desc: "Outstanding technical expertise and professional service. Our product launch website was delivered ahead of schedule with all features working perfectly. Communication was excellent throughout!",
   },
   {
      id: 2,
      page: "home_4",
      img: "https://randomuser.me/api/portraits/women/63.jpg",
      name: "Nadia Saleem",
      designation: "Marketing Director, Dubai",
      desc: "The team delivered exactly what we envisioned and more. Our website now converts visitors into customers at an impressive rate. SEO optimization has brought organic traffic beyond expectations!",
   },

   // home_5

   {
      id: 1,
      page: "home_5",
      img: "https://randomuser.me/api/portraits/men/71.jpg",
      name: "Saad Malik",
      designation: "Business Consultant",
      desc: "Professional web development with measurable results. Our online presence has completely transformed our business growth. Modern design, fast performance, and excellent SEO!",
   },
   {
      id: 2,
      page: "home_5",
      img: "https://randomuser.me/api/portraits/women/81.jpg",
      name: "Amna Baig",
      designation: "Retail Business Owner",
      desc: "From initial consultation to final delivery, everything was handled with professionalism. Our e-commerce site is user-friendly and has significantly boosted our sales. Highly recommended!",
   },

   // inner_page

   {
      id: 1,
      page: "inner_page",
      img: "https://randomuser.me/api/portraits/men/14.jpg",
      name: "Ali Haider",
      designation: "Tech Startup Founder",
      desc: "Exceptional service and outstanding results! They built our platform with Next.js and the performance is incredible. Fast, secure, and scalable. Best web developers we've worked with!",
   },
   {
      id: 2,
      page: "inner_page",
      img: "https://randomuser.me/api/portraits/women/19.jpg",
      name: "Khadija Riaz",
      designation: "Restaurant Chain Owner",
      desc: "Our multi-location restaurant website is stunning and functional. Online orders have increased dramatically. The team understood our needs perfectly and delivered excellence!",
   },
   {
      id: 3,
      page: "inner_page",
      img: "https://randomuser.me/api/portraits/men/89.jpg",
      name: "Hamza Aziz",
      designation: "Digital Agency Manager",
      desc: "Working with this team has been a pleasure. They created a sophisticated website that showcases our services beautifully. Client inquiries have tripled since launch!",
   },
   {
      id: 4,
      page: "inner_page",
      img: "https://randomuser.me/api/portraits/women/90.jpg",
      name: "Sara Jamil",
      designation: "Solar Energy Consultant",
      desc: "The website they built for our solar company generates quality leads every day. Professional design, great SEO, and mobile-optimized. Investment that paid off quickly!",
   },
]

export default testimonial_data;