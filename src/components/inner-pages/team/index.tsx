import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TeamArea from "./TeamArea"
import FactArea from "@/components/homes/home-five/FactArea"
import SkillArea from "../about/SkillArea"
import FooterOne from "@/layouts/footers/FooterOne"
import Brand from "@/components/homes/home-five/Brand"
import CtaArea from "@/components/common/CtaArea"

const Team = () => {
   return (
      <>
         <HeaderOne />
         <Breadcrumb title="Team" sub_title="Team" />
         <TeamArea />
         <FactArea />
         <SkillArea />
         <Brand/>
         <CtaArea/>
         <FooterOne/>
      </>
   )
}

export default Team
