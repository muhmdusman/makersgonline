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

// Import detail page images (you can add more later)
import serviceDetail_1 from "@/assets/img/service/service-single.webp";
import serviceDetail_2 from "@/assets/img/service/01.webp";

interface DataType {
   id: number;
   page: string;
   icon?: string;
   title: string;
   desc: string;
   icon_img?:StaticImageData;
   hover_icon_img?:StaticImageData;
   detailImage?: StaticImageData;
   detailImage2?: StaticImageData;
   detailDescription?: string;
   keyBenefits?: {
      icon: string;
      title: string;
      desc: string;
   }[];
}[];

const service_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      icon: "icomoon-layer",
      title: "Web design",
      desc: "We provide and create user-focused designs that are visually appealing, intuitive, and optimized for engagement and conversions.",
      detailImage: serviceDetail_1,
      detailImage2: serviceDetail_2,
      detailDescription: "Our web design services combine aesthetics with functionality to create stunning, user-friendly websites that drive results.",
      keyBenefits: [
         {
            icon: "icomoon-gear",
            title: "User-Centric Design",
            desc: "Designs tailored to your target audience for maximum engagement"
         },
         {
            icon: "icomoon-time",
            title: "Responsive Layouts",
            desc: "Beautiful designs that work perfectly on all devices and screen sizes"
         },
         {
            icon: "icomoon-team",
            title: "Brand Consistency",
            desc: "Cohesive visual identity that strengthens your brand presence"
         },
         {
            icon: "icomoon-profile",
            title: "Fast Loading",
            desc: "Optimized designs for lightning-fast page load times"
         }
      ]
   },
   {
      id: 2,
      page: "home_1",
      icon: "icomoon-application",
      title: "Web development",
      desc: "makers go online build fast, scalable websites tailored to your business goals. Clean code, modern tech, and seamless performance.",
      detailImage: serviceDetail_1,
      detailImage2: serviceDetail_2,
      detailDescription: "We build robust, scalable web applications using cutting-edge technologies to ensure your digital success.",
      keyBenefits: [
         {
            icon: "icomoon-gear",
            title: "Modern Tech Stack",
            desc: "Built with latest frameworks and technologies for optimal performance"
         },
         {
            icon: "icomoon-time",
            title: "Scalable Architecture",
            desc: "Solutions that grow with your business needs"
         },
         {
            icon: "icomoon-team",
            title: "Clean Code",
            desc: "Maintainable, well-documented code following best practices"
         },
         {
            icon: "icomoon-profile",
            title: "Security First",
            desc: "Built-in security measures to protect your data and users"
         }
      ]
   },
   {
      id: 3,
      page: "home_1",
      icon: "icomoon-search",
      title: "SEO Marketing",
      desc: "Optimize your online presence with our expert SEO services. We boost your rankings, drive traffic, and increase conversions.",
      detailImage: serviceDetail_1,
      detailImage2: serviceDetail_2,
      detailDescription: "Our SEO strategies are data-driven and designed to improve your visibility, increase organic traffic, and maximize ROI.",
      keyBenefits: [
         {
            icon: "icomoon-gear",
            title: "Higher Rankings",
            desc: "Proven strategies to improve your search engine positions"
         },
         {
            icon: "icomoon-time",
            title: "Increased Traffic",
            desc: "Drive more qualified visitors to your website organically"
         },
         {
            icon: "icomoon-team",
            title: "Better Conversions",
            desc: "Optimize for keywords that convert visitors into customers"
         },
         {
            icon: "icomoon-profile",
            title: "Analytics & Reporting",
            desc: "Detailed insights into your SEO performance and ROI"
         }
      ]
   },
   {
      id: 4,
      page: "home_1",
      icon: "icomoon-computer",
      title: "App Deployment",
      desc: "Seamless deployment from code to production. We ensure fast, secure, and reliable launches with zero downtime and maximum performance",
      detailImage: serviceDetail_1,
      detailImage2: serviceDetail_2,
      detailDescription: "Professional deployment services ensuring your applications go live smoothly with continuous monitoring and support.",
      keyBenefits: [
         {
            icon: "icomoon-gear",
            title: "Zero Downtime",
            desc: "Deploy updates without interrupting your users"
         },
         {
            icon: "icomoon-time",
            title: "Automated Pipelines",
            desc: "CI/CD workflows for faster and safer deployments"
         },
         {
            icon: "icomoon-team",
            title: "24/7 Monitoring",
            desc: "Real-time monitoring and instant issue resolution"
         },
         {
            icon: "icomoon-profile",
            title: "Rollback Ready",
            desc: "Quick rollback capabilities if issues arise"
         }
      ]
   },
{
  id: 5,
  page: "home_1",
  icon: "icomoon-money",
  title: "Ecommerce Solutions",
  desc: "We build secure, scalable ecommerce platforms with smooth user experiences, easy product management, and conversion-focused design.",
  detailImage: serviceDetail_1,
  detailImage2: serviceDetail_2,
  detailDescription: "Complete ecommerce solutions from design to deployment, with payment integration and inventory management.",
  keyBenefits: [
     {
        icon: "icomoon-gear",
        title: "Secure Payments",
        desc: "PCI-compliant payment processing with multiple gateway options"
     },
     {
        icon: "icomoon-time",
        title: "Inventory Management",
        desc: "Powerful tools to manage products, stock, and orders efficiently"
     },
     {
        icon: "icomoon-team",
        title: "Conversion Optimization",
        desc: "Design and features focused on maximizing sales"
     },
     {
        icon: "icomoon-profile",
        title: "Mobile Commerce",
        desc: "Seamless shopping experience on mobile devices"
     }
  ]
},
{
  id: 6,
  page: "home_1",
  icon: "icomoon-laptop",
  title: "App Development",
  desc: "Custom mobile and web applications built for performance, scalability, and seamless user experiences across all devices.",
  detailImage: serviceDetail_1,
  detailImage2: serviceDetail_2,
  detailDescription: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
  keyBenefits: [
     {
        icon: "icomoon-gear",
        title: "Cross-Platform",
        desc: "Build once, deploy on iOS and Android"
     },
     {
        icon: "icomoon-time",
        title: "Native Performance",
        desc: "Fast, responsive apps that feel native to each platform"
     },
     {
        icon: "icomoon-team",
        title: "Offline Support",
        desc: "Apps that work seamlessly even without internet connection"
     },
     {
        icon: "icomoon-profile",
        title: "Push Notifications",
        desc: "Engage users with timely notifications and updates"
     }
  ]
},

   // home_2
   {
      id: 1,
      page: "home_2",
      icon: "icomoon-layer",
      title: "App Development",
      desc: "Custom mobile and web applications built for performance, scalability, and seamless user experiences across all devices.",
   },
   {
      id: 2,
      page: "home_2",
      icon: "icomoon-application",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 3,
      page: "home_2",
      icon: "icomoon-cloud-data",
      title: "It Mangement",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 4,
      page: "home_2",
      icon: "icomoon-megaphone",
      title: "Digital Marketing",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 5,
      page: "home_2",
      icon: "icomoon-lock",
      title: "Cloud Service",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 6,
      page: "home_2",
      icon: "icomoon-magnifiying-glass",
      title: "Machine learning",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },

   // home_5
   
   {
      id: 1,
      page: "home_5",
      icon_img:serviceIcon_1,
      hover_icon_img:serviceHoverIcon_1,
      title: "Application Security",
      desc: "What is application security and examples? Image result for application security",
   },
   {
      id: 2,
      page: "home_5",
      icon_img:serviceIcon_2,
      hover_icon_img:serviceHoverIcon_2,
      title: "Cloud Security",
      desc: "What is application security and examples? Image result for application security",
   },
   {
      id: 3,
      page: "home_5",
      icon_img:serviceIcon_3,
      hover_icon_img:serviceHoverIcon_3,
      title: "Structure Security",
      desc: "What is application security and examples? Image result for application security",
   },
   {
      id: 4,
      page: "home_5",
      icon_img:serviceIcon_4,
      hover_icon_img:serviceHoverIcon_4,
      title: "Threat Hunter",
      desc: "What is application security and examples? Image result for application security",
   },
   {
      id: 5,
      page: "home_5",
      icon_img:serviceIcon_5,
      hover_icon_img:serviceHoverIcon_5,
      title: "Incident Responder",
      desc: "What is application security and examples? Image result for application security",
   },
   {
      id: 6,
      page: "home_5",
      icon_img:serviceIcon_6,
      hover_icon_img:serviceHoverIcon_6,
      title: "Data Security",
      desc: "What is application security and examples? Image result for application security",
   },

   // inner_page
   
   {
      id: 1,
      page: "inner_page",
      icon:"icomoon-profile",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   }, 
   {
      id: 2,
      page: "inner_page",
      icon:"icomoon-layer",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 3,
      page: "inner_page",
      icon:"icomoon-application",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 4,
      page: "inner_page",
      icon:"icomoon-cloud-data",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 5,
      page: "inner_page",
      icon:"icomoon-megaphone",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 6,
      page: "inner_page",
      icon:"icomoon-lock",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 7,
      page: "inner_page",
      icon:"icomoon-magnifiying-glass",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 8,
      page: "inner_page",
      icon:"icomoon-computer",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 9,
      page: "inner_page",
      icon:"icomoon-deep-learning",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
]

export default service_data;