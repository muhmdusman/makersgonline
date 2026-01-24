import { StaticImageData } from "next/image";

import teamThumb_1 from "@/assets/img/team/1.webp";
import teamThumb_2 from "@/assets/img/team/2.webp";
import teamThumb_3 from "@/assets/img/team/3.webp";
import teamThumb_4 from "@/assets/img/team/4.webp";

interface DataType {
   id: number;
   page: string;
   img: StaticImageData;
   title: string;
   designation: string;
}[];

const team_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      img: teamThumb_1,
      title: "Alex Johnson",
      designation: "Founder & Lead Developer",
   },
   {
      id: 2,
      page: "home_1",
      img: teamThumb_2,
      title: "Sarah Mitchell",
      designation: "App Development Lead",
   },
   {
      id: 3,
      page: "home_1",
      img: teamThumb_3,
      title: "David Chen",
      designation: "SEO & Marketing Specialist",
   },
   {
      id: 4,
      page: "home_1",
      img: teamThumb_4,
      title: "Emma Watson",
      designation: "Full Stack Developer",
   },

   // inner_page

   {
      id: 1,
      page: "inner_page",
      img: teamThumb_1,
      title: "Alex Johnson",
      designation: "Founder & Lead Developer",
   },
   {
      id: 2,
      page: "inner_page",
      img: teamThumb_2,
      title: "Sarah Mitchell",
      designation: "App Development Lead",
   },
   {
      id: 3,
      page: "inner_page",
      img: teamThumb_3,
      title: "David Chen",
      designation: "SEO & Marketing Specialist",
   },
   {
      id: 4,
      page: "inner_page",
      img: teamThumb_4,
      title: "Emma Watson",
      designation: "Full Stack Developer",
   },
   {
      id: 5,
      page: "inner_page",
      img: teamThumb_1,
      title: "James Rodriguez",
      designation: "UI/UX Designer",
   },
   {
      id: 6,
      page: "inner_page",
      img: teamThumb_2,
      title: "Lisa Anderson",
      designation: "QA & Testing Lead",
   },
   {
      id: 7,
      page: "inner_page",
      img: teamThumb_3,
      title: "Michael Thompson",
      designation: "DevOps Engineer",
   },
   {
      id: 8,
      page: "inner_page",
      img: teamThumb_4,
      title: "Jessica Garcia",
      designation: "Project Manager",
   },
]

export default team_data;