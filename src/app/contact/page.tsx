import Contact from "@/components/contact";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Contact Us - Get in Touch | Makers Go Online",
   description: "Contact Makers Go Online for professional IT solutions. Located in NSTP, NUST, Islamabad. Call +92 328 9566356 or email makersgonline@gmail.com for inquiries.",
   keywords: "contact makers go online, IT services contact, web development inquiry, Islamabad IT company, NUST NSTP",
   openGraph: {
      title: "Contact Makers Go Online",
      description: "Get in touch for professional IT solutions in Pakistan.",
      url: "https://makersgoonline.com/contact",
      type: "website",
   },
};

const index = () => {
   return (
      <Wrapper>
         <Contact />
      </Wrapper>
   )
}

export default index