import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from "./ServiceDetailsArea"
import CtaArea from "@/components/common/CtaArea"
import FooterOne from "@/layouts/footers/FooterOne"
import service_data from "@/data/ServiceData"
import HeaderThree from "@/layouts/headers/HeaderThree"

interface ServiceDetailsProps {
   service?: string;
}

const ServiceDetails = ({ service }: ServiceDetailsProps) => {
   // Find the service title for breadcrumb
   const currentService = service_data.find(
      (item) => item.title.replace(/\s+/g, '').toLowerCase() === service
   );
   const serviceTitle = currentService?.title || "Service Details";

   return (
      <>
         <HeaderThree />
         <Breadcrumb title={serviceTitle} sub_title={serviceTitle} />
         <ServiceDetailsArea service={service} />
         <CtaArea/>
         <FooterOne/>
      </>
   )
}

export default ServiceDetails
