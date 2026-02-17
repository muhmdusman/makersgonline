import About from "@/components/inner-pages/about";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "About Us - Makers Go Online | Leading IT Solutions Provider",
   description: "Learn about Makers Go Online - Your trusted partner for web development, design, and IT solutions in Pakistan. Expert team delivering innovative digital solutions.",
   keywords: "about makers go online, IT company Pakistan, web development team, digital agency Islamabad, software development company",
   openGraph: {
      title: "About Makers Go Online - IT Solutions Provider",
      description: "Expert team delivering innovative web development and IT solutions in Pakistan.",
      url: "https://makersgoonline.com/about",
      type: "website",
   },
};

const index = () => {
   return (
      <Wrapper>
         <About />
      </Wrapper>
   )
}

export default index