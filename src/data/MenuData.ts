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
      link: "/service",
     
   },
   {
      id: 3,
      has_dropdown: false,
      title: "Projects",
      link: "/project",
   },
  
   {
      id: 4,
      has_dropdown: false,
      title: "Contact Us",
      link: "/contact",
   },
];
export default menu_data;
