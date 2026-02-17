import HomeTwo from "@/components/homes/home-two";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Makers Go Online - Professional Web Development Services",
   description: "Transform your digital presence with Makers Go Online. Expert web development, design, and IT solutions tailored for your business success.",
};

const index = () => {
   return (
      <Wrapper>
         <HomeTwo />
      </Wrapper>
   )
}

export default index