import HomeFive from "@/components/homes/home-five";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Makers Go Online - Digital Transformation Solutions",
   description: "Complete digital transformation services including web development, cloud solutions, and IT consulting from Makers Go Online.",
};

const index = () => {
   return (
      <Wrapper>
         <HomeFive />
      </Wrapper>
   )
}

export default index