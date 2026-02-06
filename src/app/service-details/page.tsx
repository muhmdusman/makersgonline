import ServiceDetails from "@/components/services/service-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Service Details Iitechie - IT Solutions and Services React Next js Template",
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