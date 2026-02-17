import Team from "@/components/inner-pages/team";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Our Team - Meet the Experts | Makers Go Online",
   description: "Meet the talented team behind Makers Go Online. Expert developers, designers, and IT professionals dedicated to delivering exceptional solutions.",
   keywords: "IT team Pakistan, web developers, design team, software engineers, digital experts",
   openGraph: {
      title: "Our Team - Makers Go Online",
      description: "Meet our expert team of developers and IT professionals.",
      url: "https://makersgoonline.com/team",
      type: "website",
   },
};

const index = () => {
   return (
      <Wrapper>
         <Team />
      </Wrapper>
   )
}

export default index