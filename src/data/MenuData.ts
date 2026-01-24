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
      title: "About",
      link: "/about",
   },
   {
      id: 3,
      has_dropdown: true,
      title: "Services",
      link: "#",
      sub_menus: [
         { link: "/service", title: "Our Services" },
         { link: "/service-details", title: "Service Details" },
      ],
   },
   {
      id: 4,
      has_dropdown: true,
      title: "Projects",
      link: "#",
      sub_menus: [
         { link: "/project", title: "Projects" },
         { link: "/project-details", title: "Project Details" },
      ],
   },
   {
      id: 5,
      has_dropdown: false,
      title: "Team",
      link: "/team",
   },
   {
      id: 6,
      has_dropdown: false,
      title: "Blog",
      link: "/blog",
   },
   {
      id: 7,
      has_dropdown: false,
      title: "Contact",
      link: "/contact",
   },
];
export default menu_data;
