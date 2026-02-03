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
         { link: "#services", title: "Web design" },
         { link: "#services", title: "Digital marketing" },
         { link: "#services", title: "It management" },
      ]
   },
   {
      id: 2,
      title: "Useful link",
      nav_links: [
         { link: "#about", title: "About Us" },
         { link: "#team", title: "Team" },
         { link: "#project", title: "Portfolio" },
         { link: "#service", title: "Service" },
      ]
   },
]

export default footer_data;