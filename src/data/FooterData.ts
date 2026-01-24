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
      title: "Services",
      nav_links: [
         { link: "service", title: "Web Development" },
         { link: "service", title: "App Development" },
         { link: "service", title: "SEO Services" },
         { link: "service", title: "Digital Marketing" },
         { link: "service", title: "Website Security" },
      ],
   },
   {
      id: 2,
      title: "Quick Links",
      nav_links: [
         { link: "about", title: "About Us" },
         { link: "team", title: "Our Team" },
         { link: "project", title: "Portfolio" },
         { link: "blog", title: "Blog" },
         { link: "contact", title: "Contact Us" },
      ]
   },
]

export default footer_data;