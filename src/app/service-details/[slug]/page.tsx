import ServiceDetails from "@/components/services/service-details";
import Wrapper from "@/layouts/Wrapper";
import service_data from "@/data/ServiceData";
import { notFound } from "next/navigation";

export const metadata = {
   title: "Service Details - IT Solutions and Services",
};

interface PageProps {
   params: { slug: string };
}

// Generate static paths for all services (optional but recommended for SSG)
export async function generateStaticParams() {
   return service_data.map((service) => ({
      slug: service.title.replace(/\s+/g, '').toLowerCase(),
   }));
}

const ServiceDetailsPage = ({ params }: PageProps) => {
   const { slug } = params;
   
   // Validate that the service exists
   const serviceExists = service_data.some(
      (service) => service.title.replace(/\s+/g, '').toLowerCase() === slug
   );

   // Show 404 if service doesn't exist
   if (!serviceExists) {
      notFound();
   }

   return (
      <Wrapper>
         <ServiceDetails service={slug} />
      </Wrapper>
   );
};

export default ServiceDetailsPage;
