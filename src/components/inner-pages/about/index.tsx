import Breadcrumb from "@/components/common/Breadcrumb"
import HomeOneAbout from "@/components/homes/home-five/AboutOne"
import ChooseArea from "@/components/homes/home-five/ApproachArea"
import FAQ from "@/components/common/CommonFaq"
import FactArea from "@/components/homes/home-five/FactArea"
import Team from "@/components/homes/home-five/Team"
import HeaderOne from "@/layouts/headers/HeaderOne"
import Testimonial from "./Testimonial"
import SkillArea from "./SkillArea"
import Blog from "@/components/homes/home-five/Blog"
import CtaArea from "@/components/common/CtaArea"
import FooterOne from "@/layouts/footers/FooterOne"

const About = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="About Us" sub_title="About Us" />
      <HomeOneAbout />
      <ChooseArea />
      <FactArea />
      <FAQ />
      <Team />
      <Testimonial />
      <SkillArea />
      <Blog />
      <CtaArea />
      <FooterOne />
    </>
  )
}

export default About
