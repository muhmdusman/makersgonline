interface DataType {
   id: number;
   page: string;
   count?: string;
   icon?: string;
   title: string;
   desc: string;
}[];

const work_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      count: "01",
      title: "Select a project",
      desc: "Vestibulum ante ipsumusn eratultrices posu world",
   },
   {
      id: 2,
      page: "home_1",
      count: "02",
      title: "Project analysis",
      desc: "Vestibulum ante ipsumusn eratultrices posu world",
   },
   {
      id: 3,
      page: "home_1",
      count: "03",
      title: "Execute",
      desc: "Vestibulum ante ipsumusn eratultrices posu world",
   },
   {
      id: 4,
      page: "home_1",
      count: "04",
      title: "Deliver result",
      desc: "Vestibulum ante ipsumusn eratultrices posu world",
   },

   // home_2

   {
      id: 1,
      page: "home_2",
      icon: "icomoon-project",
      title: "Discovery & Planning",
      desc: "We analyze your requirements and create a strategic roadmap for success.",
   },
   {
      id: 2,
      page: "home_2",
      icon: "icomoon-analysis",
      title: "Design & Development",
      desc: "Our experts build your solution using cutting-edge technologies and best practices.",
   },
   {
      id: 3,
      page: "home_2",
      icon: "icomoon-gear",
      title: "Testing & Optimization",
      desc: "Rigorous quality checks ensure everything works perfectly before launch.",
   },
   {
      id: 4,
      page: "home_2",
      icon: "icomoon-approval",
      title: "Launch & Support",
      desc: "We deploy your project and provide ongoing support for continued success.",
   },
]

export default work_data;