import HomeThree from "@/components/homes/home-three";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Makers Go Online - IT Solutions & Digital Services",
   description: "Leading IT solutions provider offering web development, SEO, and app deployment services in Pakistan.",
};

const index = () => {
   return (
      <Wrapper>
         <HomeThree />
      </Wrapper>
   )
}

export default index