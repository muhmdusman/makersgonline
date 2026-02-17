import ServiceDetails from "@/components/services/service-details";
import Wrapper from "@/layouts/Wrapper";
import service_data from "@/data/ServiceData";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
   params: { slug: string };
}

// Generate dynamic metadata for each service
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { slug } = params;
   
   const service = service_data.find(
      (item) => item.title.replace(/\s+/g, '').toLowerCase() === slug
   );

   if (!service) {
      return {
         title: "Service Not Found - Makers Go Online",
      };
   }

   return {
      title: `${service.title} - Professional IT Services | Makers Go Online`,
      description: service.detailDescription || service.desc,
      keywords: `${service.title}, ${service.title} services Pakistan, IT solutions, web development, Makers Go Online`,
      openGraph: {
         title: `${service.title} - Makers Go Online`,
         description: service.desc,
         url: `https://makersgoonline.com/service-details/${slug}`,
         type: "website",
         images: typeof service.detailImage === 'string' ? [service.detailImage] : undefined,
      },
   };
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
