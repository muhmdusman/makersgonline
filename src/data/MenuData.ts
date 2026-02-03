interface MenuItem {
   id: number;
   title: string;
   link: string;
   has_dropdown: boolean;
   sub_menus?: {
      link: string;
      title: string;
   }[];
}[];

const menu_data: MenuItem[] = [
   {
      id: 1,
      has_dropdown: false,
      title: "Home",
      link: "/",
     
   },
   {
      id: 2,
      has_dropdown: false,
      title: "Services",
      link: "#services",
     
   },
   {
      id: 3,
      has_dropdown: false,
      title: "Projects",
      link: "#projects",
      sub_menus: [
         { link: "/about", title: "About Us" },
         { link: "/team", title: "Team" },
         { link: "/team-details", title: "Team Details" },
         { link: "/project", title: "project" },
         { link: "/project-details", title: "project Details" },
      ],
   },
  
   {
      id: 4,
      has_dropdown: false,
      title: "Contact Us",
      link: "/contact",
   },
];
export default menu_data;
