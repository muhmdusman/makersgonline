import ServiceDetails from "@/components/services/service-details";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Service Details - Professional IT Solutions | Makers Go Online",
   description: "Explore detailed information about our IT services including web design, development, SEO, and app deployment. Get tailored solutions for your business.",
   keywords: "IT service details, web development services, SEO packages, app development details, Makers Go Online services",
};

interface PageProps {
   searchParams: { service?: string };
}

const index = ({ searchParams }: PageProps) => {
   return (
      <Wrapper>
         <ServiceDetails service={searchParams.service} />
      </Wrapper>
   )
}

export default index