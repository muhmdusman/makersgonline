import TeamDetails from "@/components/inner-pages/team-details";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Team Member Details - Meet Our Experts | Makers Go Online",
   description: "Learn more about our expert team members at Makers Go Online. Skilled professionals dedicated to delivering quality IT solutions.",
   keywords: "team member profile, IT expert, web developer profile",
};

const index = () => {
   return (
      <Wrapper>
         <TeamDetails />
      </Wrapper>
   )
}

export default index