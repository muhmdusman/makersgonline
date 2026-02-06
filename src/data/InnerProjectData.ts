import { StaticImageData } from "next/image";
import { InnerProjectData } from "@/types/project.types";

import portfolioThumb_1 from "@/assets/img/project/9.webp";
import portfolioThumb_2 from "@/assets/img/project/10.webp";
import portfolioThumb_3 from "@/assets/img/project/12.webp";
import portfolioThumb_4 from "@/assets/img/project/11.webp";
import portfolioThumb_5 from "@/assets/img/project/15.webp";
import portfolioThumb_6 from "@/assets/img/project/13.webp";
import portfolioThumb_7 from "@/assets/img/project/14.webp";

const inner_project_data: InnerProjectData[] = [
   {
      id: 1,
      page:"project_1",
      thumb: portfolioThumb_1,
      title: "Data solution",
      desc: "Discover More",
      details: {
         type: "Web Application",
         languages: ["React", "Node.js", "MongoDB"],
         platform: "Web",
         country: "Pakistan",
         liveUrl: "https://example.com"
      }
   },
   {
      id: 2,
      page:"project_1",
      item_two: [{
         id: 1,
         thumb: portfolioThumb_2,
         title: "Data solution",
         desc: "Discover More",
         details: {
            type: "Mobile Application",
            languages: ["React Native", "Firebase"],
            platform: "iOS & Android",
            country: "Pakistan",
            liveUrl: "https://example.com"
         }
      }, {
         id: 2,
         thumb: portfolioThumb_4,
         title: "Data solution",
         desc: "Discover More",
         details: {
            type: "E-commerce",
            languages: ["Next.js", "Stripe"],
            platform: "Web",
            country: "Pakistan",
            liveUrl: "https://example.com"
         }
      },
      ]
   },
   {
      id: 3,
      page:"project_1",
      thumb: portfolioThumb_3,
      title: "Data solution",
      desc: "Discover More",
      details: {
         type: "Dashboard",
         languages: ["Vue.js", "Laravel"],
         platform: "Web",
         country: "Pakistan",
         liveUrl: "https://example.com"
      }
   },

   // project_2

   {
      id: 1,
      page:"project_2",
      thumb: portfolioThumb_1,
      title: "Data solution",
      desc: "Discover More",
      details: {
         type: "Web Application",
         languages: ["React", "Node.js", "MongoDB"],
         platform: "Web",
         country: "Pakistan",
         liveUrl: "https://example.com"
      }
   },
   {
      id: 2,
      page:"project_2",
      item_two: [{
         id: 1,
         thumb: portfolioThumb_2,
         title: "Data solution",
         desc: "Discover More",
         details: {
            type: "Mobile Application",
            languages: ["React Native", "Firebase"],
            platform: "iOS & Android",
            country: "Pakistan",
            liveUrl: "https://example.com"
         }
      }, {
         id: 2,
         thumb: portfolioThumb_4,
         title: "Data solution",
         desc: "Discover More",
         details: {
            type: "E-commerce",
            languages: ["Next.js", "Stripe"],
            platform: "Web",
            country: "Pakistan",
            liveUrl: "https://example.com"
         }
      },
      ]
   },
   {
      id: 3,
      page:"project_2",
      thumb: portfolioThumb_3,
      title: "Data solution",
      desc: "Discover More",
      details: {
         type: "Dashboard",
         languages: ["Vue.js", "Laravel"],
         platform: "Web",
         country: "Pakistan",
         liveUrl: "https://example.com"
      }
   },
   {
      id: 4,
      page:"project_2",
      thumb: portfolioThumb_5,
      title: "Data solution",
      desc: "Discover More",
      details: {
         type: "CMS Platform",
         languages: ["WordPress", "PHP"],
         platform: "Web",
         country: "Pakistan",
         liveUrl: "https://example.com"
      }
   },
   {
      id: 5,
      page:"project_2",
      item_two: [{
         id: 1,
         thumb: portfolioThumb_6,
         title: "Data solution",
         desc: "Discover More",
         details: {
            type: "Portfolio Website",
            languages: ["Next.js", "Tailwind CSS"],
            platform: "Web",
            country: "Pakistan",
            liveUrl: "https://example.com"
         }
      }, {
         id: 2,
         thumb: portfolioThumb_7,
         title: "Data solution",
         desc: "Discover More",
         details: {
            type: "SaaS Application",
            languages: ["React", "Express", "PostgreSQL"],
            platform: "Web",
            country: "Pakistan",
            liveUrl: "https://example.com"
         }
      },
      ]
   },
   {
      id: 6,
      page:"project_2",
      item_two: [{
         id: 1,
         thumb: portfolioThumb_4,
         title: "Data solution",
         desc: "Discover More",
         details: {
            type: "Social Platform",
            languages: ["Angular", "Firebase"],
            platform: "Web",
            country: "Pakistan",
            liveUrl: "https://example.com"
         }
      }, {
         id: 2,
         thumb: portfolioThumb_2,
         title: "Data solution",
         desc: "Discover More",
         details: {
            type: "Learning Management System",
            languages: ["Django", "Python", "PostgreSQL"],
            platform: "Web",
            country: "Pakistan",
            liveUrl: "https://example.com"
         }
      },
      ]
   },
];

export default inner_project_data;