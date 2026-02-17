import HomeFour from "@/components/homes/home-four";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Makers Go Online - Custom Web & App Development",
   description: "Custom web and mobile app development services from Makers Go Online. Scalable solutions for modern businesses.",
};

const index = () => {
   return (
      <Wrapper>
         <HomeFour />
      </Wrapper>
   )
}

export default index