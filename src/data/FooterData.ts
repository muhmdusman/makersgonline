interface DataType {
   id: number;
   title: string;
   nav_links: {
      link: string;
      title: string
   }[];
}[];

const footer_data: DataType[] = [
   {
      id: 1,
      title: "Service",
      nav_links: [
         { link: "/service", title: "Web design" },
         { link: "/service", title: "Digital marketing" },
         { link: "/service", title: "Web development" },
         { link: "/service", title: "SEO" },
         { link: "/service", title: "E-commerce Solutions" },
      ]
   },
   {
      id: 2,
      title: "Useful links",
      nav_links: [
         { link: "/#about", title: "About Us" },
         { link: "/#team", title: "Team" },
         { link: "/#projects", title: "Portfolio" },
         { link: "/#services", title: "Service" },
      ]
   },
]

export default footer_data;