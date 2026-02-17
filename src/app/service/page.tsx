import Service from "@/components/services/service";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Our Services - Web Development, SEO & IT Solutions | Makers Go Online",
   description: "Explore our comprehensive IT services: web design & development, SEO marketing, app deployment, ecommerce solutions, and custom app development. Tailored solutions for your business.",
   keywords: "web development services, SEO services Pakistan, app development, ecommerce solutions, web design agency, IT services, digital marketing",
   openGraph: {
      title: "IT Services - Makers Go Online",
      description: "Comprehensive IT services including web development, SEO, and app deployment.",
      url: "https://makersgoonline.com/service",
      type: "website",
   },
};

const index = () => {
   return (
      <Wrapper>
         <Service />
      </Wrapper>
   )
}

export default index