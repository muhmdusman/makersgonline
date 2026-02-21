import { StaticImageData } from "next/image";

import priceIcon_1 from "@/assets/img/icon/6.webp";
import priceIcon_2 from "@/assets/img/icon/7.webp";
import priceIcon_3 from "@/assets/img/icon/8.webp";


interface DataType {
   id: number;
   page: string;
   price_icon?: string;
   price_icon_img?: StaticImageData;
   plan: string;
   price: number;
   sub_price?: string;
   pricing_list: {
      icon?: string
      list: string;
      class_name?: string;
   }[];
}[];

const pricing_data: DataType[] = [

  {
    id: 1,
    page: "home_1",
    plan: "Starter Plan",
     price_icon: "icomoon-save-money",
    price: 5000,
    pricing_list: [
      { list: "1 Professional Website" },
      { list: "Responsive Web Design" },
      { list: "Basic On-Page SEO Setup" },
      { list: "Fast Loading & Performance Optimized" },
      { list: "Social Media Integration" },
      { list: "Contact Form Setup" },
      { list: "10 Days Free Support" }
    ],
  },



   // home_2

   {
      id: 1,
      page: "home_2",
      plan: "Basic plan",
      price: 12,
      pricing_list: [{ icon: "fa fa-check", list: "30 Days Trial Features" }, { icon: "fa fa-check", list: "Synced To Cloud Database", }, { icon: "fa fa-check", list: "10 Hours Of Support" }, { icon: "fa fa-times", list: "Social Media Integration", class_name: "close" }, { icon: "fa fa-times", list: "Unlimited Features", class_name: "close" }],
   },
   {
      id: 2,
      page: "home_2",
      plan: "Gold plan",
      price: 59,
      pricing_list: [{ icon: "fa fa-check", list: "30 Days Trial Features" }, { icon: "fa fa-check", list: "Synced To Cloud Database", }, { icon: "fa fa-check", list: "10 Hours Of Support" }, { icon: "fa fa-times", list: "Social Media Integration", class_name: "close" }, { icon: "fa fa-times", list: "Unlimited Features", class_name: "close" }],
   },
   {
      id: 3,
      page: "home_2",
      plan: "Platinum plan",
      price: 59,
      pricing_list: [{ icon: "fa fa-check", list: "30 Days Trial Features" }, { icon: "fa fa-check", list: "Synced To Cloud Database", }, { icon: "fa fa-check", list: "10 Hours Of Support" }, { icon: "fa fa-times", list: "Social Media Integration", class_name: "close" }, { icon: "fa fa-times", list: "Unlimited Features", class_name: "close" }],
   },

   // home_3


   {
      id: 2,
      page: "home_1",
      price_icon: "icomoon-solution",
      plan: "Business Plan",
      price: 10000,
      pricing_list: [
         { list: "Up to 5 Pages Website" },
         { list: "Fully Responsive Design" },
         { list: "Advanced SEO Optimization" },
         { list: "Social Media Integration" },
         { list: "Contact Form & Email Setup" },
         { list: "Google Analytics Integration" },
         { list: "30 Days Support" }
      ],
   },
   {
      id: 3,
      page: "home_1",
      price_icon: "icomoon-solution",
      plan: "Professional Plan",
      price: 15000,
      pricing_list: [
         { list: "Up to 10 Pages Website" },
         { list: "Custom Design & Development" },
         { list: "Complete SEO Package" },
         { list: "Social Media Integration" },
         { list: "CMS Integration (WordPress)" },
         { list: "E-commerce Functionality" },
         { list: "60 Days Support & Maintenance" }
      ],
   },
   // {
   //    id: 4,
   //    page: "home_1",
   //    price_icon: "icomoon-idea",
   //    plan: "Enterprise Plan",
   //    price: 25000,
   //    pricing_list: [
   //       { list: "Unlimited Pages" },
   //       { list: "Custom Web Application" },
   //       { list: "Premium SEO & Marketing" },
   //       { list: "Advanced E-commerce Features" },
   //       { list: "Payment Gateway Integration" },
   //       { list: "API & Mobile App Development" },
   //       { list: "90 Days Priority Support" }
   //    ],
   // },

   // home_5

   {
      id: 1,
      page: "home_5",
      price_icon_img: priceIcon_1,
      plan: "Basic Plan",
      price: 19,
      sub_price: ".50$",
      pricing_list: [{ list: "30 Days Trial Features" }, { list: "Synced To Cloud Database", }, { list: "10 Hours Of Support" }, { list: "Social Media Integration" }, { list: "Unlimited Features" }],
   },
   {
      id: 2,
      page: "home_5",
      price_icon_img: priceIcon_2,
      plan: "Standard Plan",
      price: 56,
      sub_price: ".00$",
      pricing_list: [{ list: "30 Days Trial Features" }, { list: "Synced To Cloud Database", }, { list: "10 Hours Of Support" }, { list: "Social Media Integration" }, { list: "Unlimited Features" }],
   },
   {
      id: 3,
      page: "home_5",
      price_icon_img: priceIcon_3,
      plan: "Premium Plan",
      price: 56,
      sub_price: ".50$",
      pricing_list: [{ list: "30 Days Trial Features" }, { list: "Synced To Cloud Database", }, { list: "10 Hours Of Support" }, { list: "Social Media Integration" }, { list: "Unlimited Features" }],
   },
];

export default pricing_data;