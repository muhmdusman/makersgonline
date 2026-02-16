import { StaticImageData } from "next/image";
import { InnerProjectData } from "@/types/project.types";

import portfolioThumb_1 from "@/assets/img/project/project6.png";
import portfolioThumb_2 from "@/assets/img/project/popup-project-2.png";
import portfolioThumb_3 from "@/assets/img/project/altaj.png";
import portfolioThumb_4 from "@/assets/img/project/popup-project-1.png";
import portfolioThumb_5 from "@/assets/img/project/popup-project-3.png";
import portfolioThumb_6 from "@/assets/img/project/media.png";
import portfolioThumb_7 from "@/assets/img/project/ync.png";
import portfolioThumb_8 from "@/assets/img/project/popup-project-4.png";
import portfolioThumb_9 from "@/assets/img/project/popup-project-4.jpg";

const inner_project_data: InnerProjectData[] = [
   {
      id: 1,
      page:"project_2",
      thumb: portfolioThumb_1,
      title: "Taleem ka Safar",
      desc: " Development",
      details: {
         type: "Website",
         languages: ["Next js", "Clerk"],
         platform: "Custom (Built with Code)",
         country: "Pakistan",
         liveUrl: "https://www.taleemkasafar.com"
      }
   },
   {
      id: 2,
      page:"project_2",
      thumb: portfolioThumb_2,
      title: "AQ Solar Solutions",
      desc: "Website Development",
      details: {
         type: "Website",
         languages: ["PHP", "HTML", "CSS", "JS"],
         platform: "WordPress",
         country: "Pakistan",
         liveUrl: "https://www.aqsolarsolution.com"
      }
   },
   {
      id: 3,
      page:"project_2",
      thumb: portfolioThumb_3,
      title: "Al Taj Ristorante",
      desc: " Ristorante",
      details: {
         type: "Website",
         languages: ["Next js"],
         platform: "Custom (Built with Code)",
         country: "Pakistan",
         liveUrl: "https://www.altaj-ristorante.it"
      }
   },
   {
      id: 4,
      page:"project_2",
      thumb: portfolioThumb_4,
      title: "Zocial Plug",
      desc: " Development",
      details: {
         type: "Website",
         languages: ["HTML", "CSS", "JS"],
         platform: "Custom (Built with Code)",
         country: "USA",
         liveUrl: "https://www.zocialplug.vercel.app"
      }
   },
   {
      id: 5,
      page:"project_2",
      thumb: portfolioThumb_5,
      title: "Digitaluq",
      desc: "Website Development",
      details: {
         type: "Website",
         languages: ["HTML", "CSS", "JS"],
         platform: "Custom (Built with Code)",
         country: "USA",
         liveUrl: "https://www.digitaluq.vercel.app"
      }
   },
   {
      id: 6,
      page:"project_2",
      thumb: portfolioThumb_6,
      title: "Money Makers Media",
      desc: "News Magazine Website Development",
      details: {
         type: "Website",
         languages: ["Html", "CSS", "JS", "Jquery"],
         platform: "WordPress",
         country: "UAE",
         liveUrl: "https://www.moneymakersmedia.com"
      }
   },
   {
      id: 7,
      page:"project_2",
      thumb: portfolioThumb_7,
      title: "Yousaf n Company",
      desc: "News Magazine Website Development",
      details: {
         type: "Website",
         languages: ["Html", "CSS", "JS", "Jquery"],
         platform: "WordPress",
         country: "UAE",
         liveUrl: "https://www.moneymakersmedia.com"
      }
   },
   {
      id: 8,
      page:"project_2",
      thumb: portfolioThumb_8,
      title: "Theignite.pk",
      desc: "Ecommerce Store  Development",
      details: {
         type: "Website",
         languages: ["Liquid", "CSS", "JS"],
         platform: "Shopify",
         country: "Pakistan",
         liveUrl: "https://www.theignite.pk"
      }
   },
];

export default inner_project_data;