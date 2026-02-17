import Project from "@/components/inner-pages/project";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Our Projects - Portfolio & Case Studies | Makers Go Online",
   description: "Explore our successful web development projects and IT solutions. See how Makers Go Online has helped businesses transform their digital presence.",
   keywords: "web development portfolio, IT projects Pakistan, case studies, website portfolio, app development projects",
   openGraph: {
      title: "Projects - Makers Go Online",
      description: "View our portfolio of successful web development and IT projects.",
      url: "https://makersgoonline.com/project",
      type: "website",
   },
};

const index = () => {
   return (
      <Wrapper>
         <Project />
      </Wrapper>
   )
}

export default index